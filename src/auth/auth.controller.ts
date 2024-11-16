import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() body: AuthCredentialsDto): Promise<void> {
    return this.authService.createUser(body);
  }

  @Post('/signin')
  signIn(@Body() body: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(body);
  }
}
