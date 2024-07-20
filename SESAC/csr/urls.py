from django.urls import path
from . import views

urlpatterns = [
    path('', views.csr, name='csr'),
    path('stt_convert/', views.stt_convert, name='stt_convert'),
]
