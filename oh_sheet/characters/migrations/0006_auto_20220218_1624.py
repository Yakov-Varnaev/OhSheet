# Generated by Django 3.2.12 on 2022-02-18 16:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0005_characters_class_rename'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='characterclass',
            table='character_class',
        ),
        migrations.AlterModelTable(
            name='playablecharacter',
            table='playable_character',
        ),
        migrations.AlterModelTable(
            name='race',
            table='character_race',
        ),
    ]