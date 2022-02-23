# Project Specification

# ToC

Will be added later

# 1. Aim of Project

This project to create a tool for D&D players and masters. Masters 
will be able to create adventures, locations and NPC with a specialized 
tool. Players will be able to create and store their characters.

# 2. System Description 

System will contain next functional blocks:

1. Registration, authentication and authorization
2. Characters
3. Adventures
4. Parties
5. Master tools

## 2.1 Auth system and user types

### 2.1.1 User Types

System will have three types of users: admin, staff, and ordinary. All of this types will be implemented by standart django tools. 

### 2.1.2 Registration

Registration fields:

- username
- emal
- password
- first name
- last name

### 2.1.3 Authentication

Authentication fields:

- email
- password

## 2.2 Characters

Characters block will be responsible for D&D characters CRUD. More detail in characters.md.
