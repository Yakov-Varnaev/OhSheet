from rest_framework import viewsets

from ...models import CharacterClass, Race, PlayableCharacter
from .serializers import CharacterClassSerializer, PlayableCharacterSerialzer, RaceSerializer


class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer


class CharacterClassViewSet(viewsets.ModelViewSet):
    queryset = CharacterClass.objects.all()
    serializer_class = CharacterClassSerializer


class PlayableCharacterViewSet(viewsets.ModelViewSet):
    queryset = PlayableCharacter.objects.select_related('race', 'clazz', 'owner')
    serizlier_class = PlayableCharacterSerialzer
