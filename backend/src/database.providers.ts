import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: '192.168.56.56',
                port: 3306,
                username: 'homestead',
                password: 'secret',
                database: 'texas-ashram',
                entities: [
                    __dirname + '/../dist/**/entities/*.entity.js',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
