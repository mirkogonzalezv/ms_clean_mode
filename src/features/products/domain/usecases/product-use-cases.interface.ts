import { ProductDto } from '../dto/product.dto';

export interface IProductUseCaseInterface {
  getAllProducts(): Promise<ProductDto[]>;
  saveProducts(product: ProductDto): Promise<void>;
}
