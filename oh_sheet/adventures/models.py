from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Adventure(models.Model):
    
    class Meta:
        verbose_name = 'adventure'
        verbose_name_plural = 'adventures'
        db_table = 'adventure'

    name = models.CharField('adventure name', max_length=255)
    description = models.TextField('description', max_length=500)
    writer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='adventures',
        verbose_name='adventure writer',
        null = True
    )

    def __str__(self):
        return self.name


class Episode(models.Model):
    
    class Meta:
        verbose_name = 'episode'
        verbose_name_plural = 'episodes'
        db_table = 'episode'

    adventure = models.ForeignKey(
        Adventure,
        on_delete=models.SET_NULL,
        related_name='adventures',
        verbose_name='adventure',
        null = True
    )
    episode_number = models.IntegerField('episode number', default=1)
    name = models.CharField('episode name', max_length=255)
    description = models.TextField('description', max_length=500)

    def __str__(self):
        return self.name


class Chapter(models.Model):
    
    class Meta:
        verbose_name = 'chapter'
        verbose_name_plural = 'chapters'
        db_table = 'chapter'

    episode = models.ForeignKey(
        Adventure,
        on_delete=models.SET_NULL,
        related_name='adventures',
        verbose_name='episode',
        null = True
    )
    chapter_number = models.IntegerField('chapter number', default=1)
    name = models.CharField('chapter name', max_length=255)
    text = models.TextField('text', max_length=500)

    def __str__(self):
        return self.name




