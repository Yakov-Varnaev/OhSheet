import pytest

from users.serializers import DetailUserSerializer


@pytest.mark.django_db
def test_user_seriazlier(user):
    serializer = DetailUserSerializer(user)
    data = serializer.data
    fields = ['email', 'id', 'first_name', 'last_name']
    for field in fields:
        assert data.pop(field, False), f'UserSerializer must have `{field}` field.'
    assert len(data) == 0, f'UserSerializer has extra fields {", ".join(data.keys())}'

