from django.contrib import admin
from .models import Task

# Register your models here.

class TaskAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['user']}),
        ('User Task Information', {'fields': ['created_at', 'item']})
    ]
    list_display = ('user', 'created_at', 'item')