from django.http import HttpRequest
from rest_framework import permissions

from .models import PlayableCharacter


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request: HttpRequest, view, obj: PlayableCharacter):
        return obj.owner == request.user