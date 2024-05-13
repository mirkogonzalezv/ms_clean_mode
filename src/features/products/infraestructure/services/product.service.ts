import { Inject, Injectable } from '@nestjs/common';
import { ProductDto } from '../../domain/dto/product.dto';
import { IProductUseCaseInterface } from '../../domain/usecases/product-use-cases.interface';
import { ProductUseCaseImpl } from '../../application/usecases/product.usecases.impl';

@Injectable()
export class ProductService implements IProductUseCaseInterface {
  constructor(
    @Inject(ProductUseCaseImpl)
    private readonly productUseCase: IProductUseCaseInterface,
  ) {}

  async getAllProduct(): Promise<ProductDto[]> {
    const products = await this.productUseCase.getAllProduct();
    return products.map((product) => product);
  }
  async saveProducts(product: ProductDto): Promise<void> {
    await this.productUseCase.saveProducts(product);
  }
}
