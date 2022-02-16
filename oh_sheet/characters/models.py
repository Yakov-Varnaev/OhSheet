from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Race(models.Model):

    class Meta:
        verbose_name = 'character race'
        verbose_name_plural = 'character races'

    name = models.CharField('race name', max_length=255)

    def __str__(self):
        return self.name


class CharacterClass(models.Model):

    class Meta:
        verbose_name = 'character class'
        verbose_name_plural = 'character classes'

    name = models.CharField('class name', max_length=255)

    def __str__(self):
        return self.name


class AbstractCharacter(models.Model):
    class Meta:
        abstract = True
        verbose_name = 'character'
        verbose_name_plural = 'characters'

    name = models.CharField('character name', max_length=255)
    race = models.ForeignKey(
        Race,
        on_delete=models.SET_NULL,
        related_name='characters',
        verbose_name='character race',
        null=True
    )
    clazz = models.ForeignKey(
        CharacterClass,
        on_delete=models.SET_NULL,
        related_name='characters',
        verbose_name='character class',
        null=True
    )
    max_hp = models.IntegerField(
        'character max hp',
        default=10,
    )
    armor_class = models.IntegerField(
        'armor class',
        default=5
    )
    level = models.IntegerField(
        'character level',
        default=1
    )
    strength = models.IntegerField('character strength', default=10)
    dexterity = models.IntegerField('character dexterity', default=10)
    constitution = models.IntegerField('character constitution', default=10)
    intelligence = models.IntegerField('character intelligence', default=10)
    wisdom = models.IntegerField('character wisdom', default=10)
    charisma = models.IntegerField('character charisma', default=10)
    speed = models.IntegerField('character speed', default=30)


class PlayableCharacter(AbstractCharacter):

    class Meta:
        verbose_name = 'playable character'
        verbose_name_plural = 'playable characters'

    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='characters',
        verbose_name='character owner',
    )

    temporary_hp = models.IntegerField(
        'temporary hp',
        default=0
    )
    initiative_bonus = models.IntegerField('initiative bonus', default=2)
