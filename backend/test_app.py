import unittest
from unittest.mock import patch
from app import app
from flask import json

mock_transactions = [
    {'id': 1, 'name': 'Grocery Shopping', 'date': '2024-01-01', 'status': 'Completed', 'amount': 150.00},
    {'id': 2, 'name': 'Gym Membership', 'date': '2024-01-02', 'status': 'Completed', 'amount': 50.00}
]

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

if __name__ == '__main__':
    unittest.main()
