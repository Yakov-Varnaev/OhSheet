from atexit import register
from django.db import router
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, 'user')

urlpatterns = [
    path('v1/', include(router.urls))
]