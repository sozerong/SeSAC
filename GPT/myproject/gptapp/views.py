# gptapp/views.py

from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import openai
import os
import json
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

class ChatView(View):
    def get(self, request):
        return render(request, 'chat.html')

    def post(self, request):
        data = json.loads(request.body)
        prompt = data.get('prompt')

        try:
            response = openai.ChatCompletion.create(
                model="your_model", 
                messages=[
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": prompt},
                ]
            )
            message = response.choices[0].message['content'].strip()
            return JsonResponse({'response': message})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
