class Transaction:
    def __init__(self, id, name, date, status, amount):
        self.id = id
        self.name = name
        self.date = date
        self.status = status
        self.amount = amount

class Wallet:
    def __init__(self, name, balance, funds, cards):
        self.name = name
        self.balance = balance
        self.funds = funds  
        self.cards = cards  

class Fund:
    def __init__(self, name, target, progress, last_paid):
        self.name = name
        self.target = target
        self.progress = progress
        self.last_paid = last_paid

class Card:
    def __init__(self, card_number, expiry_date, cvv, cardholder_name):
        self.card_number = card_number
        self.expiry_date = expiry_date
        self.cvv = cvv
        self.cardholder_name = cardholder_name
