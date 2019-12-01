import os
import re

import praw
from dotenv import load_dotenv
from flask import Flask, escape, jsonify, request
from flask_cors import CORS, cross_origin

load_dotenv()
reddit = praw.Reddit(client_id=os.getenv("CLIENT_ID"),
                     client_secret=os.getenv("CLIENT_SECRET"),
                     user_agent=os.getenv("USER_AGENT"))

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET'])
@cross_origin()
def posts():
    subs = {}
    for submission in reddit.subreddit(request.args.get('sub')).hot(limit=100):
        # Csak azokat a posztokat adja vissza, amikben van kép
        if re.compile(r"(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)").match(submission.url):
            subs[submission.id] = {"title": submission.title,
                                   "pic": submission.url, "author": submission.author.name}

    return jsonify(subs)


if __name__ == "__main__":
    app.run()
