import { Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@Controller("Auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(":username")
  create(@Param("username") username: string) {
    if (this.authService.validate(username)) {
      return this.authService.token();
    } else {
      return null;
    }
  }
}
