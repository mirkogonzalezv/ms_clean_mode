import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config';
import { ProductModule } from './features/products/products.module';
import { TypeOrmConfig } from './common/database/config-database';
import { ProductEntity } from './features/products/domain/entity/product.entity';

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmConfig([ProductEntity]),
  ],
})
export class AppModule {}
