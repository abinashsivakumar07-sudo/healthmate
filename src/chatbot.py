from google import genai
import os


class HealthMateChatbot:

    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")

        if not api_key:
            raise ValueError("GEMINI_API_KEY not found")

        self.client = genai.Client(api_key=api_key)

    def get_response(self, user_message):

        prompt = f"""
You are HealthMate, a food and nutrition chatbot.

You help users with:
- Food and nutrition
- Protein-rich foods
- Calories
- Balanced diet
- Healthy meal ideas
- Fruits and vegetables
- General nutrition information

Give simple and clear answers.

Do not diagnose diseases or prescribe medicines.
For serious health problems, recommend consulting a qualified healthcare professional.

User:
{user_message}

HealthMate:
"""

        try:
            response = self.client.models.generate_content(
                model="gemini-3.7-flash",
                contents=prompt
            )

            return response.text

        except Exception as error:
            print("Error:", error)
            return "Sorry, something went wrong. Please try again."