import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import * as path from 'path';
import {config} from 'dotenv';
import {join} from 'path';
import * as fs from 'fs';

//https config
const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, '', '/ssl/texas-key.txt').replace('dist', 'src')),
    cert: fs.readFileSync(path.join(__dirname, '', '/ssl/texas-cert.txt').replace('dist', 'src')),
};

//socket.io deps
import * as express from 'express';
const socket_app = express();
// const http = require('http');
import * as https from 'https';
const socket_io_server = https.createServer(httpsOptions, socket_app);
const { Server } = require("socket.io");
const io = new Server(socket_io_server);

io.on('connection', (socket) => {
    // console.log('socket', socket);
    console.log('a user connected');
});

socket_io_server.listen(process.env.SOCKET_IO_PORT, () => {
    console.log('listening on *:' + process.env.SOCKET_IO_PORT);
});

export const socketIoServer = io;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true, httpsOptions });
    app.useGlobalPipes(new ValidationPipe());
    app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
    app.use('/images', express.static(path.join(__dirname, '..', 'images')));

    config({path: join(__dirname, '../.env')});

    //swagger
    const swagger_config = new DocumentBuilder()
        .setTitle('Texas Ashram')
        .setDescription('Texas Ashram API Documentation')
        .setVersion('1.0')
        .addTag('Auth')
        .addTag('Announcements')
        .addTag('Books')
        .addTag('Contacts')
        .addTag('Donations')
        .addTag('Events')
        .addTag('Groups')
        .addTag('Group Requests')
        .addTag('Messages')
        .addTag('Notifications')
        .addTag('Posts')
        .addTag('Pages')
        .addTag('Prayer Requests')
        .addTag('Reports')
        .addTag('Sermons')
        .addTag('Speakers')
        .addTag('Staff Members')
        .addTag('Users')
        .addSecurity('bearer', {
            type: 'http',
            scheme: 'bearer',
        })
        .build();
    const document = SwaggerModule.createDocument(app, swagger_config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT);
}

bootstrap();
