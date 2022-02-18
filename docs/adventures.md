# Adventures

## Idea

To play D&D you should have some story or an adventure, which you will follow along. 
So, this part should be responsible for this.

## Permissions
Only authenticated users are able to perform CRUD.

### Models
<details>
  <summary>Adventure model</summary>

  ## Advnture
  
  1. id
  2. name max len 255
  3. description max len 500
  4. writer (fk to user)
</details>

<details>
  <summary>Episode</summary>
  1. id
  2. adventure fk to Adventure
  3. episode №
  4. name
  5. description max len 500

  ordering by episode №
</details>

<details>
  <summary>Chapter</summary>
  1. id
  2. episode fk to Adventure
  3. chapter №
  4. name
  5. text
  ordering by chapter №
</details>

### Serializers

- Adventure

List:
```
[{
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
}]
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

- Episodes/Chapters

List
```
[{
    "id": 1,
    "number": 1,
    "name": "string"
}]
```

Detail
```
all fields
```
