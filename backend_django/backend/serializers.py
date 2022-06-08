from rest_framework import serializers
from backend.models import Task
from django.contrib.auth.models import User

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.username', querySet=User.objects.get())
    
    class Meta:
        model = Task
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(many=True, querySet=Task.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'tasks']