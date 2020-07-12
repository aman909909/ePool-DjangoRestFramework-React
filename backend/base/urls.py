from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, OfferRideViewSet, PendingRequestsViewSet, UserFromTokenViewSet, URforYouViewSet

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('offer', OfferRideViewSet)
router.register('pending-requests', PendingRequestsViewSet)
router.register('user-from-token', UserFromTokenViewSet)
router.register('ur-for-you', URforYouViewSet)

urlpatterns = [
        path('', include(router.urls)),
]
