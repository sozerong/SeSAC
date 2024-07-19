from rest_framework import generics
from .models import CustomUser
from .serializers import UserSerializer

class UserDetail(generics.RetrieveUpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


import requests
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def chatbot(request):
    text = request.data.get('text')
    response = requests.post(
        "https://api.clova.ai/v1/some-endpoint",  # Clova X API 엔드포인트로 변경
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {settings.CLOVA_API_KEY}"
        },
        json={"text": text}
    )
    return Response(response.json())

from rest_framework import viewsets
from .models import Record
from .serializers import RecordSerializer
from rest_framework.permissions import IsAuthenticated

class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    permission_classes = [IsAuthenticated]


@api_view(['GET'])
def missing_persons(request):
    response = requests.get("https://api.missing-persons.com/v1/search")  # 실제 API 엔드포인트로 변경
    return Response(response.json())
