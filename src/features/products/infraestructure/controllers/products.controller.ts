import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { IProductUseCaseInterface } from '../../domain/usecases/product-use-cases.interface';
import { ProductDto } from '../../domain/dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductService)
    private readonly _productService: IProductUseCaseInterface,
  ) {}

  @Get()
  getProducts(): Promise<ProductDto[]> {
    return this._productService.getAllProduct();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  saveProduct(@Body() product: ProductDto): Promise<void> {
    return this._productService.saveProducts(product);
  }
}
