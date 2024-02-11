from flask import Blueprint, jsonify, request
from services import get_all_transactions, add_transaction, update_transaction, delete_transaction, get_wallet,get_all_cards,add_card,update_card,delete_card
from utils import not_found
import csv
from flask import Response

api = Blueprint('api', __name__)

@api.route('/transactions', methods=['GET'])
def get_transactions():
    return jsonify(get_all_transactions())

@api.route('/transactions', methods=['POST']) 
def add_new_transaction():
    if not request.is_json:
        return jsonify({"message": "No JSON received"}), 400
    data = request.get_json()
    return jsonify(add_transaction(data)), 201

@api.route('/transactions/<int:transaction_id>', methods=['PUT'])
def update_existing_transaction(transaction_id):
    data = request.json
    try:
        updated_transaction = update_transaction(transaction_id, data)
        return jsonify(updated_transaction)
    except ValueError as e:
        return not_found(e)

@api.route('/transactions/<int:transaction_id>', methods=['DELETE'])
def remove_transaction(transaction_id):
    delete_transaction(transaction_id)
    return jsonify({"message": "Transaction deleted"}), 200

@api.route('/wallet', methods=['GET'])
def get_user_wallet():
    return jsonify(get_wallet())

@api.route('/cards', methods=['GET'])
def get_cards():
    return jsonify(get_all_cards())

@api.route('/cards', methods=['POST'])
def add_new_card():
    if not request.is_json:
        return jsonify({"message": "No JSON received"}), 400
    data = request.get_json()
    return jsonify(add_card(data)), 201

@api.route('/cards/<card_number>', methods=['PUT'])
def update_existing_card(card_number):
    data = request.json
    try:
        updated_card = update_card(card_number, data)
        return jsonify(updated_card)
    except ValueError as e:
        return not_found(e)

@api.route('/cards/<card_number>', methods=['DELETE'])
def remove_card(card_number):
    delete_card(card_number)
    return jsonify({"message": "Card deleted"}), 200

@api.route('/financial-statistics', methods=['GET'])
def get_financial_statistics():
    financial_statistics = {
        "lifetimeIncome": 40728,
        "lifetimeOutcome": 30239,
        "bonusIncome": 2490
    }
    return jsonify(financial_statistics)

@api.route('/chart-data', methods=['GET'])
def get_chart_data():
    chart_type = request.args.get('type', 'income')  
    time_period = request.args.get('period', 'thisYear')  
    chart_data = {
        "labels": ["January", "February", "March", "April", "May"],
        "datasets": [{
            "label": chart_type.capitalize(),
            "data": [65, 59, 80, 81, 56],
            "fill": False,
            "backgroundColor": "rgb(75, 192, 192)",
            "borderColor": "rgba(75, 192, 192, 0.2)",
        }]
    }
    return jsonify(chart_data)
@api.route('/download-transactions', methods=['GET'])
def download_transactions():
    transactions = get_all_transactions()  
    
    def generate():
        data = StringIO()
        writer = csv.writer(data)
        
        writer.writerow(['ID', 'Name', 'Date', 'Status', 'Amount'])
        yield data.getvalue()
        data.seek(0)
        data.truncate(0)
        
        for transaction in transactions:
            writer.writerow([transaction['id'], transaction['name'], transaction['date'], transaction['status'], transaction['amount']])
            yield data.getvalue()
            data.seek(0)
            data.truncate(0)

    return Response(generate(), mimetype='text/csv', headers={"Content-Disposition": "attachment;filename=transactions.csv"})