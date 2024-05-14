import { Inject, Injectable } from '@nestjs/common';
import { ProductDto } from '../../domain/dto/product.dto';
import { IProductUseCaseInterface } from '../../domain/usecases/product-use-cases.interface';
import { ProductRepositoryImpl } from '../repository/product.repository.impl';
import { IProductRepositoryInterface } from '../../domain/repository/product.repository.interface';

@Injectable()
export class ProductUseCaseImpl implements IProductUseCaseInterface {
  constructor(
    @Inject(ProductRepositoryImpl)
    private readonly productRepository: IProductRepositoryInterface,
  ) {}

  async getAllProducts(): Promise<ProductDto[]> {
    const allProducts = await this.productRepository.getAllProducts();
    return allProducts.map((product) => ({
      productId: product.productId,
      description: product.description,
      price: product.price,
    }));
  }
  async saveProducts(product: ProductDto): Promise<void> {
    await this.productRepository.saveProduct(product);
  }
}
