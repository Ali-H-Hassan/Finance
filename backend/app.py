from flask import Flask
from flask_cors import CORS  
from routes import api
import logging
from utils import not_found

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

CORS(app)  

app.register_blueprint(api, url_prefix='/api')
app.register_error_handler(404, not_found)

if __name__ == '__main__':
    app.run(debug=True)
