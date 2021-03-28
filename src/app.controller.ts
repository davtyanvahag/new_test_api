import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateUserDto } from './users/dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getAll();
  }

  @Post()
  search(@Body() text: {text: string}): any {
    return this.appService.searchUsers(text);
  }
}
