# Generated by Django 4.1.5 on 2023-01-15 15:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('DeltaHacks9', '0005_rename_data_smallbusiness_photos_smallbusiness_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='smallbusiness',
            old_name='photos',
            new_name='data',
        ),
        migrations.RemoveField(
            model_name='smallbusiness',
            name='name',
        ),
        migrations.RemoveField(
            model_name='smallbusiness',
            name='rating',
        ),
    ]
