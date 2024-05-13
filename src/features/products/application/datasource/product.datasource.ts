import { DataSource, Repository } from 'typeorm';
import { ProductEntity } from '../../domain/entity/product.entity';
import { IProductRepositoryInterface } from '../../domain/repository/product.repository.interface';
import { IGetProductRepositoryDto } from '../../domain/dto/get-product.repository.dto';
import { IProductRepositoryDto } from '../../domain/dto/product.repository.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductDataSource
  extends Repository<ProductEntity>
  implements IProductRepositoryInterface
{
  constructor(dataSource: DataSource) {
    super(ProductEntity, dataSource.createEntityManager());
  }

  async getAllProducts(): Promise<IGetProductRepositoryDto[]> {
    return await this.find();
  }
  async saveProduct(product: IProductRepositoryDto): Promise<void> {
    await this.save(product);
  }
}
