from django_filters.rest_framework import DjangoFilterBackend
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
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['user']
    # def get_queryset(self):
    #     username = self.request.user
    #     return Task.objects.filter(user=username).order_by('-created_at')
