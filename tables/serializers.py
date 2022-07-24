from curses import meta
from rest_framework import serializers

from . import models


class TableSerializer(serializers.HyperlinkedModelSerializer):
    seats = serializers.SerializerMethodField(read_only=True)
    table_type = serializers.SerializerMethodField(read_only=True)
    price = serializers.SerializerMethodField(read_only=True)
    is_free = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = models.Table
        fields = ['id', 'seats', 'table_type', 'price', 'is_free'] 

    def get_seats(self, obj):
        return obj.seats

    def get_table_type(self, obj):
        return obj.table_type.name

    def get_price(self, obj):
        return obj.price

    def get_is_free(self, obj):
        return obj.is_free


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    email = serializers.SerializerMethodField(read_only=True)
    status = serializers.CharField()
    tables = TableSerializer(many=True, required=False)

    class Meta:
        model = models.Order
        fields = ['id', 'email', 'status', 'tables'] 
    
    def get_email(self, obj):
        return obj.email
    
    def get_status(self, obj):
        return obj.status 
    
    def get_tables(self, obj):
        return obj.tables

    def update(self, instance, validated_data):
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance


class OrderCreateSerializer(serializers.HyperlinkedModelSerializer):
    email = serializers.SerializerMethodField(read_only=True)
    status = serializers.SerializerMethodField(read_only=True)
    tables = TableSerializer(many=True, required=False, read_only=True)

    class Meta:
        model = models.Order
        fields = ['id', 'email', 'status', 'tables'] 
    
    def get_email(self, obj):
        return obj.email
    
    def get_status(self, obj):
        return obj.status 
    
    def get_tables(self, obj):
        return obj.tables


