from atexit import register
from django.contrib import admin

from .models import order, register_info, product,category
# Register your models here.


class register_dtls(admin.ModelAdmin):
    list_display = ['firstname', 'lastname', 'email']


admin.site.register(register_info, register_dtls)

admin.site.register(product)
admin.site.register(category)
admin.site.register(order)
