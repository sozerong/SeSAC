import openai
from django.conf import settings

class GptAPI:
    def __init__(self, model):
        self.messages = []
        self.model = model
        openai.api_key = settings.OPENAI_API_KEY

    def get_message(self, prompt):
        self.messages.append({"role": "user", "content": prompt})

        try:
            response = openai.ChatCompletion.create(
                model=self.model,
                messages=self.messages
            )
            result = response.choices[0].message['content']
            self.messages.append({"role": "assistant", "content": result})
            return result
        except Exception as e:
            return f"Error: {str(e)}"
