import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  validate(username: string): boolean {
    return username === this.configService.get("auth.secret");
  }

  async token() {
    const payload = { client: this.configService.get("auth.env") };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
