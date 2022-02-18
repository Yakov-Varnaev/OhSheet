from rest_framework import serializers

from characters.models import CharacterClass, PlayableCharacter, Race
from users.api.v1.serializers import UserShortSerializer


class RaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Race
        fields = '__all__'


class CharacterClassSerializer(serializers.ModelSerializer):

    class Meta:
        model = CharacterClass
        fields = '__all__'


class PlayableCharacterSerialzer(serializers.ModelSerializer):
    owner = UserShortSerializer()
    race = RaceSerializer()
    clazz = CharacterClassSerializer()

    class Meta:
        model = PlayableCharacter
        fields = '__all__'
