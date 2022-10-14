import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Res,
  SetMetadata,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ForbiddenException } from 'src/common/forbidden.exception';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { JoiValidationPipe } from 'src/common/joi-validate.pipe';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { Roles } from 'src/common/roles.decorator';
import { RolesGuard } from 'src/common/roles.guard';
import { CreateFuckerDto } from './create-fucker.dto';
import { FuckerService } from './fucker.service';

@Controller('fuckers')
@UseGuards(RolesGuard)
export class FuckerController {
  constructor(private readonly fuckerService: FuckerService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe({ id: 1 }))
  @Roles('admin')
  create(@Body() data: CreateFuckerDto): string {
    // (undefined as any)();
    console.log('data', data);
    return 'create fucker!!!!';
  }

  @Get('list')
  getFuckerList(@Res() res): void {
    throw new ForbiddenException();
    res.status(HttpStatus.OK).json({ fucker: [1, 2] });
  }

  @Get()
  // @HttpCode(205)
  @Header('x-api-key', '123456')
  @Header('x-api-key2', '123456123456')
  // @Redirect('https://www.baidu.com', 301)
  getFuckers(@Query() query): any {
    console.log('query', query);
    throw new HttpException('forbidden~~~~', HttpStatus.FORBIDDEN);
    // return this.fuckerService.getFuckers();
    // return { url: 'https://www.google.com' };
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
  async getFuckerById(@Param('id', new ParseIntPipe()) id): Promise<string> {
    return Promise.resolve(this.fuckerService.getFuckerById(id));
  }
}
