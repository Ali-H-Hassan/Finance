from flask import Flask
from routes import api
import logging
from utils import not_found

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

app.register_blueprint(api, url_prefix='/api')
app.register_error_handler(404, not_found)

if __name__ == '__main__':
    app.run(debug=True)
