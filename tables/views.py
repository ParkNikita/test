from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from . import models
from . import serializers

# Create your views here.

class TableListView(APIView):
    permission_classes = []

    def get(self, request, *args, **kwargs):
        queryset = models.Table.objects.all().order_by('-is_free', 'table_type')
        serializer = serializers.TableSerializer(queryset, many=True)
        return Response(serializer.data, status=200)


class FilterTableListView(APIView):
    def post(self, request, *args, **kwargs):
        queryset = models.Table.objects.filter(
            is_free=True,
            seats=request.data.get('seats'),
            table_type__name=request.data.get('type'), 
            price__gte = request.data.get('price_from'),
            price__lte = request.data.get('price_to')
        )

        serializer = serializers.TableSerializer(queryset, many=True)
        return Response(serializer.data, status=200)

class UpdateTableView(APIView):
    permission_classes = [IsAuthenticated]
    
    def put(self, request, id, *args, **kwargs):
        table = models.Table.objects.get(id=id)
        serializer = serializers.TableSerializer(table, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CreateTableView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = serializers.TableSerializer(data=request.data)
        if serializer.is_valid():
            table_type = models.TableType.objects.get(name=request.data.get('table_type'))
            serializer.save(
                is_free=True,
                seats=request.data.get('seats'),
                table_type=table_type,
                price=request.data.get('price')
            )
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderListView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        queryset = models.Order.objects.all().order_by('-status')
        serializer = serializers.OrderSerializer(queryset, many=True)
        return Response(serializer.data, status=200)


class UpdateOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, id, *args, **kwargs):
        order = models.Order.objects.get(id=id)
        serializer = serializers.OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateOrderView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = serializers.OrderCreateSerializer(data=request.data)
        if serializer.is_valid():
            table = models.Table.objects.get(id=request.data.get('table_id'))
            serializer.save(email=request.data.get('email'), tables=[table])

            return Response(serializer.data, status=200)
        return Response(serializer.errors)