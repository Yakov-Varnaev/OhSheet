from attr import fields
from rest_framework import serializers

from ...models import CharacterClass, Race, PlayableCharacter


class RaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Race
        fields = '__all__'

class CharacterClassSerializer(serializers.ModelSerializer):

    class Meta:
        model = CharacterClass
        fields = '__all__'

class PlayableCharacterSerialzer(serializers.ModelSerializer):

    class Meta:
        model = PlayableCharacter
        fields = '__all__'
