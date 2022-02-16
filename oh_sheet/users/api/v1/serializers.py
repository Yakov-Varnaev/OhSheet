from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserProfileSerialier(serializers.ModelSerializer):
    character_count = serializers.IntegerField()

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'bio', 'language', 'system', 'character_count')


class UserShortSerializer(UserProfileSerialier):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')
