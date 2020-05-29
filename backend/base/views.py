from rest_framework import viewsets, status
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializer import UserSerializer, OfferRideSerializer, PendingRequestSerializer
from .models import OfferRide, PendingRequests

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (AllowAny, )

class OfferRideViewSet(viewsets.ModelViewSet):
    queryset = OfferRide.objects.all().order_by('-id')
    serializer_class = OfferRideSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    def create(self, request, *args, **kwargs):
        of = OfferRide()
        of.destination1 = request.data['to']
        of.destination2 = request.data['from']
        of.date = request.data['date']
        of.time = request.data['time']
        of.carModel = request.data['model']
        of.seatsAvailable = request.data['seats']
        of.cost = request.data['cost']
        of.name = request.user
        of.usrname = request.user.username
        print(request.user.username)

        of.save()
        serializer = OfferRideSerializer(of, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PendingRequestsViewSet(viewsets.ModelViewSet):
    queryset = PendingRequests.objects.all()
    serializer_class = PendingRequestSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (AllowAny, )

    def create(self, request, *args, **kwargs):
        pr = PendingRequests()
        pr.request_from = request.user
        ofreq = OfferRide.objects.get(id=request.data['request_id'])
        pr.request_id = ofreq
        pr.request_to = ofreq.name
        pr.description = request.data['description']
        pr.seatsReq = request.data['seatsReq']
        print(ofreq.destination1)
        print(pr.request_from)
        if pr.request_to == pr.request_from:
            response = {'message': 'Why do you want to select your offer?'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        already_exists = PendingRequests.objects.all().filter(request_id=ofreq).filter(request_from=request.user)
        if len(already_exists) != 0:
            response = {'message': 'You have already sent a request!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

        pr.save()
        serializer = PendingRequestSerializer(pr, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request, *args, **kwargs):
        pr = PendingRequests.objects.all().filter(request_to = request.user.id)
        serializer = PendingRequestSerializer(pr, many= True)
        return Response(serializer.data, status=status.HTTP_200_OK)



