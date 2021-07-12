import flask
from flask import send_from_directory
from flask_cors import CORS



app = flask.Flask(__name__, static_url_path='', static_folder='build')
#app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS']='Content-Type'

cors = CORS(app)

@app.route("/", defaults={'path':''})
def app_serve(path):
    return send_from_directory(app.static_folder,'index.html')

if __name__ == '__main__':

    #app.register_blueprint(main)
    app.run(host='0.0.0.0')
    #serve(app, host='0.0.0.0', port='5000')
