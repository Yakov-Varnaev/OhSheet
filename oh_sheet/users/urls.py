from django.urls import include, path
from .api.v1.urls import urlpatterns as v1

urlpatterns = [
    path('', include(v1))
]
