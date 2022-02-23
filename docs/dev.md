# How start server locally

### NOTE! docker-compose will be added soon.

# Locally 

## 1. Prerequirements

You have to install python 3.8 or higher to run the server.

## 2. Commands

```
cd <project dir>

# create and activate venv
python3 -m venv venv
source venv/bin/activate   # unix systems for windows google the command

# install dependencies
pip install --upgrade pip
pip install -r requirements.txt.

cd oh_sheet

# apply migrations
python3 manage.py migrate

# run server
python3 manage.py runserver
```
