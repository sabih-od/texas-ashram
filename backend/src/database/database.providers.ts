import { DataSource } from 'typeorm';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: 3306,
                database: process.env.DB_DATABASE,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                entities: [
                    __dirname + '/../../dist/**/entities/*.entity.js',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
