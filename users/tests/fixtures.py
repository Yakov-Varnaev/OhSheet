import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient

User = get_user_model()


@pytest.fixture
def user_register_data():
    return {
        'email': 'yakov@ohsheet.com',
        'password': 'S0meVeryHardPassword'
    }


@pytest.fixture
def user():
    return User.objects.create_user(
        email='user@example.com',
        username='user@example.com',
        first_name='Name',
        last_name='Surname',
        password='password'
    )


@pytest.fixture
def client():
    return APIClient()
