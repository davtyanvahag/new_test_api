import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvModule } from 'nest-csv-parser';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    CsvModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
