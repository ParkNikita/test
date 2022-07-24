from pyexpat import model
from django.db import models

# Create your models here.


class TableType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Table(models.Model):
    seats = models.IntegerField()
    table_type = models.ForeignKey(TableType, on_delete=models.CASCADE)
    is_free = models.BooleanField(default=True)
    price = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f'{self.seats} {self.table_type}'


class Order(models.Model):
    PENDING = 'PENDING'
    BOOKED = 'BOOKED'
    CANCELED = 'CANCELED'
    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (BOOKED, 'Booked'),
        (CANCELED, 'Canceled')
    )
    status = models.CharField(max_length=9 ,choices=STATUS_CHOICES, default='PENDING')
    email = models.EmailField(null=True, blank=True)
    tables = models.ManyToManyField(Table, related_name='order', blank=True)

    def __str__(self):
        return str(self.email)

        

# class OrderTable(models.Model):
#     table = models.ForeignKey(Table, on_delete=models.CASCADE)
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'{self.order} {self.table}'
