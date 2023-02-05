from django.contrib import admin
from .models import BigBuisness
from .models import SmallBusiness

admin.site.register(BigBuisness)
admin.site.register(SmallBusiness)