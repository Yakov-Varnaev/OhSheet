from django.conf import settings
from django.contrib import admin
from django.urls import include, path
import djoser.urls

from .yasg import docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls')),
    path('api/', include('users.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]

if settings.DEBUG:
    urlpatterns += [
        path('api/', include(docs_urls)),
    ]
