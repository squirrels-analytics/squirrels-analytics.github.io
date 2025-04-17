# Deploy with Docker

This guide explains how to deploy your Squirrels project using Docker, assuming you already have a basic understanding of Docker commands.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your system
- A working Squirrels project with a `requirements.txt` file with locked dependencies

## Basic Docker Setup

The Docker setup for Squirrels consists of two main files:

1. `Dockerfile` - Defines how to build the Docker image
2. `.dockerignore` - Specifies which files should be excluded from the Docker image

### Dockerfile

The following is a basic `Dockerfile` for a Squirrels project:

```py
FROM python:3.12-slim
WORKDIR /app

COPY . .

# Installing git is needed if pip installing from git or if squirrels packages are 
# specified for `sqrl deps`. Otherwise only the `pip install` command is needed
RUN apt-get update && apt-get install -y git
RUN pip install --no-cache-dir -r requirements.txt
RUN sqrl deps

EXPOSE 4465

CMD ["sqrl", "run", "--build", "--host", "0.0.0.0", "--port", "4465"]
```

This example uses Python 3.12 from the `python:3.12-slim` image. Set this according to your project's requirements.

### .dockerignore

To keep your Docker image size small and avoid including unnecessary files, create a `.dockerignore` file:

```py
**/__pycache__/

# common virtual environment names
.venv/

# squirrels files to ignore
.env
.env.local
duckdb_init.sql
logs/
target/
sqrl_packages/

# additional files for docker to ignore
Dockerfile
.git/
```

## Docker Compose

Consider using Docker Compose, especially if your deployment contains multiple services. You can include the following in your `docker-compose.yml` file:

```yaml
services:
  ...
  squirrels-project:
    build:
      context: ./path/to/project
      dockerfile: Dockerfile
    volumes:
      - ./path/to/project/.env:/app/.env:ro
      - ./path/to/project/target:/app/target
```
