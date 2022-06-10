from django.contrib.auth import get_user_model
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
User = get_user_model()


class DetailUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')

class UserCreateSerializer(BaseUserCreateSerializer):

    def create(self, validated_data):
        validated_data.update({'username': validated_data['email']})
        return super().create(validated_data)

    class Meta(BaseUserCreateSerializer.Meta):
        fields = ('email', 'password')
