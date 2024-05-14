import { TypeOrmModule } from '@nestjs/typeorm';

export const CONFIG_DATABASE = () =>
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    entities: ['../src/features/**/domain/entity/*.ts'],
  });
