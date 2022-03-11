<h1 align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</h1>

<p align="center">A simple template to get started with <a href="https://github.com/nestjs/nest" target="_blank">Nest</a> which just meets my need. Feel free to fork and open a pull request if you would like to put something into in.</p>

## Description

This boilerplate aims to bring a simple nest application setup with all the support which a developer aims to get in an application to start. Please do note that this is just a reflection of how I like to have my application with all the utils and other things, If you know, you know.

I am not aiming yet to bring the test feature into this application since it varies in many cases, and you should write your test as per yourself. It's something important but yeah not yet on my To-Do. Sooner or later, it will be there anyway.

## Installation

```bash
npm install
```

## Running the app manually

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# using docker
$ docker-compose up

# production mode
$ npm run start:prod
```

## Running the app using docker image

1. Make `docker-compose.yml` file.
2. Add the following contents into it -

```yml
version: '3.9'
services:
    api:
        image: ghcr.io/r-priyam/nestjs-boilerplate:latest
        container_name: My-Cute-API
        env_file:
            - .env
```

3. Make `.env` file in same directory where `docker-compose.yml` file is. Sample env file can be found [here](https://github.com/r-priyam/nestjs-boilerplate/blob/master/.env.example)
4. All set, run `docker-compose up` from `CLI` and application will start up.

-   Please note, by default docker will assign your current directory name to project name while running `docker-compose up` command. To provide a name for your prject add `COMPOSE_PROJECT_NAME=Your-Project-Name` variable in `.env` file. Read more about `compose enviroments` [here](https://docs.docker.com/compose/reference/envvars/).

## Contributing

1. Fork the repo!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
