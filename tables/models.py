from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db import models
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

from django.conf import settings

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
    email = models.EmailField()
    tables = models.ManyToManyField(Table, related_name='order')

    def __str__(self):
        return str(self.email)


@receiver(post_save, sender=Order)
def send_mail_on_create(sender, instance, created=False, **kwargs):
    if created:
        template = render_to_string('tables/emailForm.html')
        subject, from_email, to = 'Order Api', settings.EMAIL_HOST_USER, instance.email
        text_content = ''
        html_content = template
        msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()


# class OrderTable(models.Model):
#     table = models.ForeignKey(Table, on_delete=models.CASCADE)
#     order = models.ForeignKey(Order, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'{self.order} {self.table}'
