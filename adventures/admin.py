from django.contrib import admin

from .models import Adventure


@admin.register(Adventure)
class AdventureAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'author')

