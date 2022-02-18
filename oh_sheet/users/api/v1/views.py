from django.contrib.auth import get_user_model
from django.db.models import Count
from rest_framework import mixins, viewsets

from .serializers import UserProfileSerialier

User = get_user_model()


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserProfileSerialier

    def get_queryset(self):
        if self.action == 'list':
            res = (
                User
                .objects
                .annotate(characters_count=Count('characters'))
            )
            return res
        return User.objects.all()
