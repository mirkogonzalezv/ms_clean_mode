import { Module } from '@nestjs/common';
import { CONFIG_DATABASE } from './common/database/config-database';
import { ProductModule } from './features/products/products.module';

@Module({
  imports: [CONFIG_DATABASE(), ProductModule],
})
export class AppModule {}
