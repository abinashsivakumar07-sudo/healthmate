HealthMate 🥗

HealthMate is an AI-powered Food and Nutrition chatbot that helps users get simple information about food, nutrition, protein, calories, and healthy eating.

Features

- AI-powered chatbot
- Food and nutrition information
- Protein-rich food suggestions
- Calorie information
- Healthy meal suggestions
- Firebase Firestore chat storage
- Simple and user-friendly interface

Technologies

- Python
- Flask
- Google Gemini API
- HTML
- CSS
- JavaScript
- Firebase Firestore

Project Structure

HealthMate/
│
├── app.py
├── requirements.txt
├── README.md
├── .env
├── .env.example
│
├── src/
│   ├── __init__.py
│   └── chatbot.py
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    ├── script.js
    └── firebase.js

Installation

1. Install dependencies

pip install -r requirements.txt

2. Configure Gemini API

Create a ".env" file:

GEMINI_API_KEY=your_api_key_here

3. Configure Firebase

Create a Firebase project and add a Web App.

Enable Firestore Database and add the Firebase configuration to:

static/firebase.js

Run the Project

Run the following command:

python app.py

Open your browser and visit:

http://127.0.0.1:5000

Example Questions

- What are protein-rich foods?
- What is a balanced diet?
- Give me healthy breakfast ideas.
- Which foods contain calcium?
- What foods are rich in iron?

Disclaimer

HealthMate provides general food and nutrition information. It is not a replacement for professional medical advice, diagnosis, or treatment.

Project Information

Project Name: HealthMate
Domain: Food & Nutrition
Type: AI-Powered Chatbot