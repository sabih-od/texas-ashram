<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

##Database
Database configuration is located in ./src/database/database.providers.ts

##JWT
JWT auth middleware is present in ./src/auth/auth.guard.ts

##Firebase
Firebase credentials located in ./src/firebase/fbase.json

##Helpers
Located in ./src/helpers/helper.ts

##Mailing (smtp)
Located in ./src/mail

SMTP credentials located in .env

##Middlewares
Located in ./src/middlewares

##Socket-io
Initialised in ./src/main.ts

Socket port is defined in .env file [SOCKET_IO_PORT]

##SSL (for https):
Generate .key and .cert files and place them in ./src/ssl directory

Include certificate and key in main.ts file

Example (main.ts):

```
//https config
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '', '/ssl/<key-filename>').replace('dist', 'src')),
    cert: fs.readFileSync(path.join(__dirname, '', '/ssl/<cert-filename>').replace('dist', 'src')),
};
```
