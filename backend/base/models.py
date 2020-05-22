from django.db import models
from django.contrib.auth.models import User

class OfferRide(models.Model):
    destination1 = models.CharField(max_length=100)
    destination2 = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    carModel = models.CharField(max_length=40)
    seatsAvailable = models.IntegerField()
    cost = models.IntegerField(default=0)
    name = models.ForeignKey(User, on_delete=models.CASCADE)

class PendingRequests(models.Model):
    request_id = models.ForeignKey(OfferRide, on_delete=models.CASCADE)
    request_from = models.ForeignKey(User, related_name='request_from', on_delete=models.CASCADE)
    request_to = models.ForeignKey(User, related_name='request_to', on_delete=models.CASCADE)



