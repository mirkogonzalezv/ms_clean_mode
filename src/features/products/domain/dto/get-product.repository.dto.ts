import { IProductRepositoryDto } from './product.repository.dto';

export interface IGetProductRepositoryDto extends IProductRepositoryDto {
  productId: number;
}
