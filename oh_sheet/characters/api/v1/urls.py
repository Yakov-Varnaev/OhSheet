from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CharacterClassViewSet, RaceViewSet, PlayableCharacterViewSet

v1_router = DefaultRouter()
v1_router.register(r'races', RaceViewSet, 'race')
v1_router.register(r'classes', CharacterClassViewSet, 'class')
v1_router.register(r'character', PlayableCharacterViewSet, 'character')
