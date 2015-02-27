import os
import urllib
import jinja2

from flask import Flask, render_template,request
from google.appengine.ext import ndb

app = Flask(__name__)
app.debug=True

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__))
    ,extensions=['jinja2.ext.autoescape']
    ,autoescape=True)
DEFAULT_ROOM = 'home'

def get_ndbKey( _roomName = DEFAULT_ROOM ):
    return ndb.Key('Greeting', _roomName)

class Greeting(ndb.Model):
    content = ndb.StringProperty(indexed=False)
    date= ndb.DateTimeProperty(auto_now_add=True)

@app.route('/')
def index():
    val = {
        'msg': 'Hello, Flask/Jinja2'
    }
    print "get"
    return render_template('index.html', val=val)

@app.route('/add',methods=['POST'])
def add():
    myVal = request.args.get('q','')
    val ={
        'msg':'posted!!!!'
    }
    print urllib.unquote((myVal).encode('utf-8'))
    return render_template('index.html', val=val)