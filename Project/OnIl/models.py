from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # 추가 필드들을 여기에 정의합니다.
    
    # `groups` 필드의 역방향 액세서자 이름을 변경
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # 여기서 'customuser_set'은 필요한 이름으로 변경
        blank=True,
        help_text='The groups this user belongs to.',
        related_query_name='customuser',
    )
    
    # `user_permissions` 필드의 역방향 액세서자 이름을 변경
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',  # 여기서 'customuser_set'은 필요한 이름으로 변경
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='customuser',
    )

from django.contrib.auth import get_user_model

class Record(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    date = models.DateField()
    content = models.TextField()
