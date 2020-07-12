from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import OfferRide, PendingRequests, URforYou


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class OfferRideSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferRide
        fields = '__all__'

class PendingRequestSerializer(serializers.ModelSerializer):
    message = serializers.SerializerMethodField()
    class Meta:
        model = PendingRequests
        fields = '__all__'

    def get_message(self, obj):
        return ('909')

class URforYouSerializer(serializers.ModelSerializer):
    class Meta:
        model = URforYou
        fields = '__all__'

