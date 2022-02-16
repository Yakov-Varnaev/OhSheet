from rest_framework.routers import DefaultRouter

from .views import CharacterClassViewSet, PlayableCharacterViewSet, RaceViewSet

v1_router = DefaultRouter()
v1_router.register(r'races', RaceViewSet, 'race')
v1_router.register(r'classes', CharacterClassViewSet, 'class')
v1_router.register(r'characters', PlayableCharacterViewSet, 'character')
