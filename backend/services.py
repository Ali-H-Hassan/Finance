# services.py

from models import Transaction, Wallet, Fund, Card
from datetime import datetime

transactions = [
    Transaction(1, "Grocery shopping", "2024-02-10", "Completed", 150.00),
    Transaction(2, "Coffee with friends", "2024-02-09", "Completed", 35.50)
]

cards = [
    Card("4889 9271 1937 1932", "12/28", "123", "ADRIAN TRA")
]

wallet = Wallet("Adrian's Wallet", 124543, [], cards)

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
    wallet_dict = wallet.__dict__
    wallet_dict['cards'] = [card.__dict__ for card in wallet.cards]
    return wallet_dict

def get_all_cards():
    return [card.__dict__ for card in cards]

def add_card(data):
    new_card = Card(**data)
    cards.append(new_card)
    wallet.cards.append(new_card)  
    return new_card.__dict__

def update_card(card_number, data):
    card = next((c for c in cards if c.card_number == card_number), None)
    if card:
        card.__dict__.update(data)
        return card.__dict__
    else:
        raise ValueError("Card not found")

def delete_card(card_number):
    global cards
    cards = [c for c in cards if c.card_number != card_number]
    wallet.cards = [c for c in wallet.cards if c.card_number != card_number]  
