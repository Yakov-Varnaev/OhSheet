# Generated by Django 3.2.12 on 2022-02-16 05:39

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('characters', '0002_character_related_names_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playablecharacter',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='characters', to=settings.AUTH_USER_MODEL, verbose_name='character owner'),
        ),
    ]
