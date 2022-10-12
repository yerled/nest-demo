import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { CreateFuckerDto } from './create-fucker.dto';
import { FuckerService } from './fucker.service';

@Controller('fuckers')
export class FuckerController {
  constructor(private readonly fuckerService: FuckerService) {}

  @Post()
  create(@Body() data: CreateFuckerDto): string {
    console.log('data', data);
    return 'create fucker!!!!';
  }

  @Get('list')
  getFuckerList(@Res() res): void {
    res.status(HttpStatus.OK).json({ fucker: [1, 2] });
  }

  @Get()
  @HttpCode(205)
  @Header('x-api-key', '123456')
  @Header('x-api-key2', '123456123456')
  @Redirect('https://www.baidu.com', 301)
  getFuckers(@Query() query): any {
    console.log('query', query);
    // return this.fuckerService.getFuckers();
    return { url: 'https://www.google.com' };
  }

  @Get('/*/*')
  getFuckerAnyWay(@Param() param): string {
    return `getFuckerAnyWay: ${param[0]} ${param[1]}`;
  }

  // @Get('/*')
  // getFuckerById(@Param() param): string {
  //   return this.fuckerService.getFuckerById(Number(param[0]));
  // }

  @Get(':id')
  async getFuckerById(@Param('id') id): Promise<string> {
    return Promise.resolve(this.fuckerService.getFuckerById(Number(id)));
  }
}
