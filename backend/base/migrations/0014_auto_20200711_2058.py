# Generated by Django 3.0.6 on 2020-07-11 20:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_auto_20200523_1730'),
    ]

    operations = [
        migrations.CreateModel(
            name='URforYou',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ride_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.OfferRide')),
            ],
        ),
        migrations.DeleteModel(
            name='Notification',
        ),
    ]