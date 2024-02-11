from flask import Blueprint, jsonify, request
from services import get_all_transactions, add_transaction, update_transaction, delete_transaction, get_wallet,get_all_cards,add_card,update_card,delete_card
from utils import not_found

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