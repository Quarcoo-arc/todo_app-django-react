from urllib import request
from backend.models import Task
from rest_framework import viewsets
from backend.serializers import TaskSerializer
from django.contrib.auth.models import User
from backend_django.backend.serializers import UserSerializer
from rest_framework import generics, permissions

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited
    """
    serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user
        return Task.objects.filter(user=user).order_by('-created_at')
