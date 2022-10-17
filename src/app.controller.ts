import { Controller, Get, Request, Post, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/public-auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('auth/login')
  async login(@Body() body: any) {
    console.log('body', body);
    return this.authService.login(body);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
