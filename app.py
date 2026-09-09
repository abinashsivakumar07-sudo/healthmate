from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from src.chatbot import HealthMateChatbot

load_dotenv()

app = Flask(__name__)

chatbot = HealthMateChatbot()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()

    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({
            "reply": "Please enter a message."
        })

    response = chatbot.get_response(user_message)

    return jsonify({
        "reply": response
    })


if __name__ == "__main__":
    app.run(debug=True)