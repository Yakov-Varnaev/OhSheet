import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient

User = get_user_model()


@pytest.fixture
def user_auth_data():
    return {
        'email': 'yakov@ohsheet.com',
        'password': 'S0meVeryHardPassword'
    }


@pytest.fixture
def user(user_auth_data):
    return User.objects.create_user(
        **user_auth_data,
        username='user@example.com',
        first_name='Name',
        last_name='Surname',
    )


@pytest.fixture
def client():
    return APIClient()


@pytest.fixture
def token_user(user):
    from rest_framework_simplejwt.tokens import AccessToken
    token = AccessToken.for_user(user)

    return {
        'access': str(token),
    }


@pytest.fixture
def user_client(token_user):
    client = APIClient()
    client.credentials(HTTP_AUTHORIZATION=f'JWT {token_user["access"]}')
    return client
