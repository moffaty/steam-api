import { Controller, Get, Query } from '@nestjs/common';
import { SteamService } from './steam.service';
import { Relationships } from './enums';

@Controller('steam')
export class SteamController {
    constructor(readonly steamService: SteamService) {}

    @Get('profile')
    async getProfile(@Query('steamids') steamIds: string) {
        return await this.steamService.GetProfileInfo(steamIds);
    }

    @Get('friends')
    async getFriends(
        @Query('steamid') steamid: string,
        @Query('withNames') wihtNames: boolean,
    ) {
        console.log(steamid);
        return await this.steamService.GetFriendList(
            steamid,
            Relationships['friend'],
            wihtNames,
        );
    }
}
