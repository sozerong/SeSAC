# gptapp/urls.py

from django.urls import path
from .views import ChatView  # 불필요한 import 제거

urlpatterns = [
    path('chat/', ChatView.as_view(), name='chat'),
]
