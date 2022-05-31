from django.shortcuts import render
from models import Task
from rest_framework import viewsets, permissions
from todo_app_django.backend.serializers import TaskSerializer

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer