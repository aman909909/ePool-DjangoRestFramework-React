from django.contrib import admin

from .models import PendingRequests, OfferRide

admin.site.register(PendingRequests)
admin.site.register(OfferRide)
