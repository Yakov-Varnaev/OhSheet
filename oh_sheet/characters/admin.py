from django.contrib import admin

from .models import CharacterClass, PlayableCharacter, Race


@admin.register(Race)
class RaceAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(CharacterClass)
class CharacterClassAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(PlayableCharacter)
class PlayableCharacterAdmin(admin.ModelAdmin):
    list_display = ('owner', 'name', 'level', 'race', 'clazz')