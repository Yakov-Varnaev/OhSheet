from django.conf import settings
from django.contrib import admin
from django.urls import include, path

from .yasg import docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls')),
    path('api/', include('users.urls')),
    path('api/', include('characters.urls')),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.jwt')),
]

if settings.DEBUG:
    urlpatterns += [
        path('api/', include(docs_urls)),
    ]
