import { TypeOrmModule } from '@nestjs/typeorm';

export const CONFIG_DATABASE = () =>
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'xintec',
    password: 'Xintec2024.',
    database: 'ecommerce_example',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    entities: ['../src/features/**/domain/entity/*.ts'],
  });
