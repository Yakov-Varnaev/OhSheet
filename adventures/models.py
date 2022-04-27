from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Adventure(models.Model):

    class Meta:
        verbose_name = 'Adventure'
        verbose_name_plural = 'Adventures'
        db_table = 'adventures'

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='adventures',
    )
    name = models.CharField('Adventure Name', max_length=255)
    description = models.TextField('Adventure Description')


class Episode(models.Model):

    class Meta:
        verbose_name = 'Episode'
        verbose_name_plural = 'Episodes'
        db_table = 'episodes'

    adventure = models.ForeignKey(
        Adventure,
        on_delete=models.CASCADE,
        related_name='episodes',
    )
    order = models.PositiveSmallIntegerField('Episode order')
    name = models.CharField(max_length=255)


class Chapter(models.Model):

    class Meta:
        verbose_name = 'Chapter'
        verbose_name_plural = 'Chapters'
        db_table = 'chpaters'

    name = models.CharField(max_length=255)
    text = models.TextField()
    order = models.PositiveSmallIntegerField()
