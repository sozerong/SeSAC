from django.shortcuts import render
from django.http import JsonResponse
import requests
import json

def csr(request):
    return render(request, 'csr.html')

def stt_convert(request):
    if request.method == 'POST':
        url = 'https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor'
        client_id = "rqpyd9cvh3"  #  Client ID
        client_secret = "mB7aPQdkdaKid7wtsX3M9iFlXQPmG1gngE45soaI"  #  Client Secret

        headers = {
            'Content-Type': 'application/octet-stream',
            'X-NCP-APIGW-API-KEY-ID': client_id,
            'X-NCP-APIGW-API-KEY': client_secret,
        }

        file = request.FILES['file']
        data = file.read()

        response = requests.post(url, headers=headers, data=data)

        if response.status_code == 200:
            result = response.json()
            return JsonResponse({'text': result['text']})
        else:
            return JsonResponse({'error': '음성 파일 변환에 실패했습니다.'}, status=400)
    else:
        return JsonResponse({'error': 'POST 요청이 아닙니다.'}, status=400)
