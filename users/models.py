from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
    email = models.EmailField('email', unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []