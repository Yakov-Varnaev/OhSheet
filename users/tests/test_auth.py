import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status

User = get_user_model()

BASE_URL = '/api/auth/'


@pytest.mark.django_db
def test_user_register(client: APIClient, user_auth_data):
    url = BASE_URL + 'users/'
    users_count = User.objects.count()
    response = client.post(url, user_auth_data)

    assert response.status_code == status.HTTP_201_CREATED, (
        f'Check if user is able to register with data: {user_auth_data}. Response: {response.json()}'
    )
    assert User.objects.count() == users_count + 1, (
        'User was not created after successfull registration.'
    )


@pytest.mark.django_db
def test_user_can_get_jwt_token(client: APIClient, user_auth_data, user):
    url = BASE_URL + 'jwt/create/'
    response = client.post(url, user_auth_data)
    json = response.json()

    assert response.status_code == status.HTTP_200_OK, (
        f'User cannot login with {User.USERNAME_FIELD} and password. Data: {user_auth_data}. Response: {json}'
    )
    assert all(token in json for token in ['access', 'refresh'])


@pytest.mark.django_db
def test_auth_user_can_get_me(user_client: APIClient):
    url = BASE_URL + 'users/me/'
    response = user_client.get(url)
    json = response.json()

    assert response.status_code == status.HTTP_200_OK, (
        f'Authenticated user is not able to get information about himself.'
    )

    for field in ['email', 'first_name', 'last_name', 'id']:
        assert json.pop(field, None), (
            f'Field {field} must be in response `api/auth/users/me/`.'
        )
    assert len(json) == 0, (
        f'Fields `{", ".join(json)}` must not be in response `api/auth/users/me/`.'
    )
