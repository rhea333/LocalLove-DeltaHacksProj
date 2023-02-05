from rest_framework import serializers
from .models import BigBuisness
from .models import SmallBusiness

class DeltaSerializerBig(serializers.ModelSerializer):
    class Meta:
        model = BigBuisness
        fields = ['id', 'name']

class DeltaSerializerSmall(serializers.ModelSerializer):
    class Meta:
        model = SmallBusiness
        fields = ['id', 'name', 'photos', 'rating']
