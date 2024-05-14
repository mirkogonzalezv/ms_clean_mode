import { Inject, Injectable } from '@nestjs/common';
import { IGetProductRepositoryDto } from '../../domain/dto/get-product.repository.dto';
import { IProductRepositoryDto } from '../../domain/dto/product.repository.dto';
import { IProductRepositoryInterface } from '../../domain/repository/product.repository.interface';
import { ProductDataSource } from '../datasource/product.datasource';

@Injectable()
export class ProductRepositoryImpl implements IProductRepositoryInterface {
  constructor(
    @Inject(ProductDataSource)
    private readonly productDataSource: IProductRepositoryInterface,
  ) {}

  getAllProducts(): Promise<IGetProductRepositoryDto[]> {
    return this.productDataSource.getAllProducts();
  }
  saveProduct(product: IProductRepositoryDto): Promise<void> {
    return this.productDataSource.saveProduct(product);
  }
}
