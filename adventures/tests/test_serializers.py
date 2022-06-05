import pytest

from users.serializers import UserSerializer

@pytest.mark.django_db
def test_adventure_serializer(user):
    serializer = UserSerializer(user)
    data = serializer.data
    fields = ['email', 'id', 'first_name', 'last_name']
    for field in fields:
        assert data.pop(field, False), f'UserSerializer must have `{field}` field.'
    assert len(data) == 0, f'UserSerializer has extra fields {", ".join(data.keys())}'
