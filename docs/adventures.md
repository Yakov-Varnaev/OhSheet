# Adventures

## Idea

To play D&D you should have some story or an adventure, which you will follow along. 
So, this part should be responsible for this.

### Models

- Adventure
    - id
    - name max len 255
    - description max len 500
    - writer (fk to user)

- Episode
    - id
    - adventure fk to Adventure
    - episode №
    - name
    - description max len 500
default ordering by episode №

- Chapter
    - id 
    - chapter №
    - Episode fk to Adventure
    - text
default ordering by chapter №

### Serializers

- Adventure
List:
```
{
    "id": 1,
    "name": "String",
    "description": "string",
    "writer": {
        "id": 1,
        "first_name": "Yakov",
        "last_name": "Varnaev"
    },
    "episodes_count": 1,
    "chapters_count": 1
}
```

Detail
```
    "id": 1,
    "name": "String",
    "description": "string",
    "writer": {
        "id": 1,
        "first_name": "Yakov",
        "last_name": "Varnaev"
    },
    "episodes": [{"id": 1, "name": "string"}],
    "chapters": [{"id": 1, "name": "string"}]
```