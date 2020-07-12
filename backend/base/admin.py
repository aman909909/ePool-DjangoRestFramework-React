from django.contrib import admin

from .models import PendingRequests, OfferRide, URforYou

admin.site.register(PendingRequests)
admin.site.register(OfferRide)
admin.site.register(URforYou)
