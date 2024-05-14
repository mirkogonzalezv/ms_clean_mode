import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const TypeOrmConfig = (entities: [any]) => {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>('database.mysql.host'),
      port: configService.get<number>('database.mysql.port'),
      username: configService.get<string>('database.mysql.username'),
      password: configService.get<string>('database.mysql.password'),
      database: configService.get<string>('database.mysql.database'),
      ssl: false,
      entities: entities,
      keepConnectionAlive: true,
      synchronize: configService.get<string>('env') == 'develop' ? true : false,
      autoLoadEntities: true,
      logging: configService.get<string>('env') == 'develop' ? true : false,
    }),
    dataSourceFactory: async (options) => {
      return new DataSource(options).initialize();
    },
  });
};
