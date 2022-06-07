from django.db import models

# Create your models here.

class Task(models.Model):
    item = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('auth.User', related_name='tasks', on_delete=models.CASCADE)