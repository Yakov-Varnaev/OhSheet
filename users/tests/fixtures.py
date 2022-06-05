import pytest
from django.contrib.auth import get_user_model

User = get_user_model()

@pytest.fixture
def user():
    return User.objects.create_user(
        email='user@example.com',
        username='user@example.com',
        first_name='Name',
        last_name='Surname',
        password='password'
    )
