import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../../types/jwtPayload';
import { RequestUser } from '../../types/requestUser';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET!,
    });
  }
  validate(payload: JwtPayload): RequestUser {
    return {
      id: payload.sub,
      name: payload.username,
      status: payload.status,
    };
  }
}
