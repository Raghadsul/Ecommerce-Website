from .models import Product
from rest_framework import serializers

class ProductSerializer(serializers.HyperlinkedModelSerializer):

    class Meta: 
        model = Product
        fields = ['id', 'name', 'desc', 'price', 'inventory', 'quantity_sold', 'image']
