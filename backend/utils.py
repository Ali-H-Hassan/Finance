from flask import jsonify

def not_found(error):
    response = jsonify({'message': str(error)})
    response.status_code = 404
    return response
