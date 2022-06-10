import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

BASE_URL = '/api/auth/'


@pytest.mark.django_db
def test_user_register(client: APIClient, user_register_data):
    url = BASE_URL + 'users/'
    
    response = client.post(url, user_register_data)
    assert response.status_code == status.HTTP_201_CREATED, (
        f'Check if user is able to register with data: {user_register_data}. Response: {response.json()}'
    )
