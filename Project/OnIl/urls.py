from django.urls import path
from .views import UserDetail, RecordViewSet, chatbot, missing_persons
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'records', RecordViewSet)

urlpatterns = [
    path('user/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('chatbot/', chatbot, name='chatbot'),
    path('missing-persons/', missing_persons, name='missing-persons'),
] + router.urls
