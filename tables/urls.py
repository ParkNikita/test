from django.urls import path

from . import views

app_name = 'tables'

urlpatterns = [
    path('tables/', views.TableListView.as_view(), name='table-list'),
    path('tables/create/', views.CreateTableView.as_view(), name='table-create'),
    path('tables/filter/', views.FilterTableListView.as_view(), name='table-filter'),
    path('orders/', views.OrderListView.as_view(), name='order-list'),
    path('orders/create/', views.CreateOrderView.as_view(), name='order-create'),
    path('orders/<int:id>/', views.UpdateOrderView.as_view(), name='order-create')

]