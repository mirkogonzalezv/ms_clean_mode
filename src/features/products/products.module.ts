import { Module } from '@nestjs/common';
import { ProductController } from './infraestructure/controllers/products.controller';
import { ProductService } from './infraestructure/services/product.service';
import { ProductUseCaseImpl } from './application/usecases/product.usecases.impl';
import { ProductDataSource } from './application/datasource/product.datasource';
import { ProductRepositoryImpl } from './application/repository/product.repository.impl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './domain/entity/product.entity';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductUseCaseImpl,
    ProductRepositoryImpl,
    ProductDataSource,
  ],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
})
export class ProductModule {}
