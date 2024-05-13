import { ProductDto } from '../dto/product.dto';

export interface IProductUseCaseInterface {
  getAllProduct(): Promise<ProductDto[]>;
  saveProducts(product: ProductDto): Promise<void>;
}
