from flask import Blueprint, jsonify, request
from services import get_all_transactions, add_transaction, update_transaction, delete_transaction, get_wallet
from utils import not_found

api = Blueprint('api', __name__)

@api.route('/transactions', methods=['GET'])
def get_transactions():
    return jsonify(get_all_transactions())

@api.route('/transactions', methods=['POST'])
def add_new_transaction():
    data = request.json
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
