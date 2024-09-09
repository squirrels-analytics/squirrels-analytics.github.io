# Deploy with Docker

In the future, we intend to create our own Cloud platform to host Squirrels projects that comes with infrastructure built-in for "project version catalog" and maintaining stacks of minor versions. But for the time being, we recommend creating a Docker image, and deploying your image as a container on a hosting platform. Information on deploying Docker containers to your hosting platform is not provided on this page... See the docs for your hosting platform for more details.

Typically, a file named "Dockerfile" is needed for creating docker images (which can be stored in your Squirrels project or somewhere in your server). There is no "one size fits all" for the contents of your Dockerfile since it depends on the Python version and package management tool that you use. Assuming Python version 3.11 and the dependencies of your project are provided in a `requirements.txt` file that can be used for pip installs, the Dockerfile can look something like this:

```dockerfile
# Change here to use different python version (ex. 3.11-slim for version 3.11)
FROM python:3.12-slim
WORKDIR /app

COPY . .

# Only needed if there are python dependencies installed using git, or for the
# "sqrl deps" command if there are packages defined in "squirrels.yml"
RUN apt-get update && apt-get install -y git

RUN pip install --no-cache-dir -r requirements.txt

RUN squirrels deps

EXPOSE 4465
CMD ["squirrels", "run", "--host", "0.0.0.0", "--port", "4465"]
```

You will want docker to ignore a few files and folders by adding them to `.dockerignore` file. The contents should looks similar to your `.gitignore` file except you also want to include the ".git" directory.

```bash
**/__pycache__/
.venv/
.git/

# squirrels files to ignore
env.yml
target/
sqrl_packages/
```

In addition to the docker image, a docker volume is also needed store the [env.yml] file. If your [env.yml] is in current directory, you can use the following `compose.yml` file to create a docker container with the volume by running `docker compose up`.

```yaml
services:
  squirrels:
    build: /path/to/Dockerfile
    ports:
      - 8080:4465
    volumes:
      - ./env.yml:/app/env.yml
```


[env.yml]: ../environcfg
