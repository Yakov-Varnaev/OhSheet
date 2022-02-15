from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from .yasg import docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
    urlpatterns += [
        path('api/', include(docs_urls)),
        path('auth/', include('djoser.urls')),
        path('auth/', include('djoser.urls.jwt')),
    ]
