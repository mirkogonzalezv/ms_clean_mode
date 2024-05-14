import { Test, TestingModule } from '@nestjs/testing';
import { ProductUseCaseImpl } from '../../application/usecases/product.usecases.impl';
import { ProductService } from './product.service';
import { ProductDto } from '../../domain/dto/product.dto';

describe('ProductService', () => {
  let productService: ProductService;
  let productUseCase: ProductUseCaseImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: ProductUseCaseImpl,
          useValue: {
            getAllProducts: jest.fn(),
          },
        },
      ],
    }).compile();

    productService = module.get<ProductService>(ProductService);
    productUseCase = module.get<ProductUseCaseImpl>(ProductUseCaseImpl);
  });

  it('Deberia retornar todos los productos', async () => {
    const mockProduct: ProductDto[] = [
      { description: 'producto 1', price: 2000 },
    ];

    jest.spyOn(productUseCase, 'getAllProducts').mockResolvedValue(mockProduct);

    const result = await productService.getAllProducts();
    expect(result).toEqual(mockProduct);
    expect(productUseCase.getAllProducts).toHaveBeenCalled();
  });
});
