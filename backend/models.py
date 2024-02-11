class Transaction:
    def __init__(self, id, name, date, status, amount):
        self.id = id
        self.name = name
        self.date = date
        self.status = status
        self.amount = amount

class Wallet:
    def __init__(self, name, balance, funds):
        self.name = name
        self.balance = balance
        self.funds = funds  

class Fund:
    def __init__(self, name, target, progress, last_paid):
        self.name = name
        self.target = target
        self.progress = progress
        self.last_paid = last_paid
