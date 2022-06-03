from django.shortcuts import render
from backend.models import Task
from rest_framework import viewsets
from backend.serializers import TaskSerializer

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited
    """
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer