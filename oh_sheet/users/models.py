from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        db_table = 'users'

    bio = models.TextField('users bio', max_length=250, blank=True, null=True)
    birth_date = models.DateField('date of birth', null=True)
    system = models.CharField(
        'favorite system',
        blank=True,
        null=True,
        max_length=250
    )
    language = models.CharField(
        'language',
        blank=True,
        null=True,
        max_length=250
    )
