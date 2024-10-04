import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SteamController } from './steam/steam.controller';
import { SteamService } from './steam/steam.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        CacheModule.register({
            ttl: 360,
            max: 100,
            isGlobal: true,
        }),
    ],
    controllers: [AppController, SteamController],
    providers: [AppService, SteamService],
})
export class AppModule {}
