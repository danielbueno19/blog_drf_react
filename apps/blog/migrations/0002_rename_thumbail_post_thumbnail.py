# Generated by Django 4.0.6 on 2023-10-02 18:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='thumbail',
            new_name='thumbnail',
        ),
    ]
