import { Injectable } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}
