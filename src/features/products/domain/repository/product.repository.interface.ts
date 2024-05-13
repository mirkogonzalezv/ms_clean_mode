import { IGetProductRepositoryDto } from '../dto/get-product.repository.dto';
import { IProductRepositoryDto } from '../dto/product.repository.dto';

export interface IProductRepositoryInterface {
  getAllProducts(): Promise<IGetProductRepositoryDto[]>;
  saveProduct(product: IProductRepositoryDto): Promise<void>;
}
