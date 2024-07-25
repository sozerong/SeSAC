from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from gptapp.views import ChatView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('gptapp/', include('gptapp.urls')),  # 앱의 URL 패턴을 포함
    path('', ChatView.as_view(), name='home'),  # 루트 URL에 대한 처리
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)  # 정적 파일 처리
