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
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer

    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
