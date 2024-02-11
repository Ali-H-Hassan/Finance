import unittest
from unittest.mock import patch
from app import app
from flask import json

mock_transactions = [
    {'id': 1, 'name': 'Grocery Shopping', 'date': '2024-01-01', 'status': 'Completed', 'amount': 150.00},
    {'id': 2, 'name': 'Gym Membership', 'date': '2024-01-02', 'status': 'Completed', 'amount': 50.00}
]
new_transaction_data = {
    'name': 'Online Course',
    'date': '2024-01-03',
    'status': 'Pending',
    'amount': 100.00
}
updated_transaction_data = {
    'name': 'Grocery Shopping',
    'date': '2024-01-01',
    'status': 'Completed',
    'amount': 200.00 
}

class BackendTestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    @patch('routes.get_all_transactions')
    def test_get_transactions(self, mock_get_all_transactions):
        mock_get_all_transactions.return_value = mock_transactions
        
        response = self.app.get('/api/transactions')
        
        data = json.loads(response.get_data(as_text=True))
        
        self.assertEqual(response.status_code, 200)
        
        self.assertIsInstance(data, list)
        
        self.assertEqual(len(data), len(mock_transactions))
        
        self.assertEqual(data, mock_transactions)
        
        mock_get_all_transactions.assert_called_once()

    @patch('routes.add_transaction') 
    def test_add_new_transaction(self, mock_add_transaction):
        mock_add_transaction.return_value = {**new_transaction_data, 'id': 3}
        
        response = self.app.post('/api/transactions', json=new_transaction_data)
        
        data = json.loads(response.get_data(as_text=True))
        
        self.assertEqual(response.status_code, 201)
        
        self.assertIn('id', data)
        
        self.assertEqual(data, {**new_transaction_data, 'id': 3})
        
        mock_add_transaction.assert_called_once_with(new_transaction_data)

    @patch('routes.update_transaction')
    def test_update_existing_transaction(self, mock_update_transaction):
        mock_update_transaction.return_value = {**updated_transaction_data, 'id': 1}
        
        response = self.app.put('/api/transactions/1', json=updated_transaction_data)
        
        data = json.loads(response.get_data(as_text=True))
        
        self.assertEqual(response.status_code, 200)
        
        self.assertEqual(data, {**updated_transaction_data, 'id': 1})
        
        mock_update_transaction.assert_called_once_with(1, updated_transaction_data)


if __name__ == '__main__':
    unittest.main()
