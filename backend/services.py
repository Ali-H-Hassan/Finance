from models import Transaction, Wallet, Fund
from datetime import datetime

transactions = [
    Transaction(1, "Grocery shopping", "2024-02-10", "Completed", 150.00),
    Transaction(2, "Coffee with friends", "2024-02-09", "Completed", 35.50)
]

wallet = Wallet("Adrian's Wallet", 124543, [])

def get_all_transactions():
    return [t.__dict__ for t in transactions]

def add_transaction(data):
    new_transaction = Transaction(len(transactions) + 1, **data)
    transactions.append(new_transaction)
    return new_transaction.__dict__

def update_transaction(transaction_id, data):
    transaction = next((t for t in transactions if t.id == transaction_id), None)
    if transaction:
        transaction.__dict__.update(data)
        return transaction.__dict__
    else:
        raise ValueError("Transaction not found")

def delete_transaction(transaction_id):
    global transactions
    transactions = [t for t in transactions if t.id != transaction_id]

def get_wallet():
    return wallet.__dict__

