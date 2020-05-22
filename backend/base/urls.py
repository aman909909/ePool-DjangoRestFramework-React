from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, OfferRideViewSet, PendingRequestsViewSet

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('offer', OfferRideViewSet)
router.register('pending-requests', PendingRequestsViewSet)

urlpatterns = [
        path('', include(router.urls)),
]
