from django.contrib.auth import get_user_model
from rest_framework import mixins, viewsets

from .serializers import UserProfileSerialier

User = get_user_model()


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserProfileSerialier

    def get_queryset(self):
        if self.action == 'list':
            res = User.objects.raw(
                '''
                select users_user.id, first_name, last_name, bio, language, system, SUM(characters_playablecharacter.id) as character_count
                from users_user
                join characters_playablecharacter on users_user.id = characters_playablecharacter.owner_id;
                '''
            )
            return res
        return User.objects.all()
