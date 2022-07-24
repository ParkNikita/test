from django.contrib import admin

from . import models
# Register your models here.

# class OrderAdmin(admin.ModelAdmin):
#     fields = ['status', 'table', 'price']
#     list_display = ('status', 'table')


# class TableAdmin(admin.ModelAdmin):
#     fields = ['seats', 'table_type', 'is_free']
#     list_display = ('seats', 'table_type', 'is_free')

admin.site.register(models.Order)
admin.site.register(models.Table)
admin.site.register(models.TableType)

