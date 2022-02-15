from django.contrib.auth import get_user_model
from rest_framework import mixins, viewsets

from .serializers import UserProfileSerialier

User = get_user_model()


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserProfileSerialier

    def get_queryset(self):
        return User.objects.all()
