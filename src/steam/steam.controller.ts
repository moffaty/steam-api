import {
    Controller,
    Get,
    HttpStatus,
    ParseIntPipe,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { SteamService } from './steam.service';
import { Relationships } from './enums';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FriendsList } from './dto/responses/friendlist';
import { Responses } from './interfaces';
import { ProfileResponse } from './dto/responses/profile';
import { AchievementResponse } from './dto/responses/achievements';
import { SteamIdDto } from './dto/steamid';
import { GamesResponse } from './dto/responses/games';
@Controller('steam')
export class SteamController {
    constructor(readonly steamService: SteamService) {}

    @ApiTags('User')
    @ApiOperation({ summary: 'Output steam profile information' })
    @ApiQuery({
        name: 'steamids',
        required: true,
        description: 'Steam identificator',
        type: SteamIdDto,
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Succes',
        type: ProfileResponse,
    })
    @Get('profile')
    async getProfile(
        @Query('steamids', new ParseIntPipe()) steamIds: SteamIdDto,
    ): Promise<Responses.ProfileResponse> {
        return await this.steamService.GetProfileInfo(steamIds.toString());
    }

    @ApiTags('User')
    @ApiOperation({ summary: 'Output friend list' })
    @ApiQuery({
        name: 'steamid',
        required: true,
        description: 'Steam identificator',
        type: SteamIdDto,
    })
    @ApiQuery({
        name: 'withNames',
        required: true,
        description: 'Need to detect friends names',
    })
    @ApiQuery({
        name: 'relationship',
        required: false,
        description: 'Relatinoship with user',
        enum: Relationships,
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Success',
        type: FriendsList,
    })
    @Get('friends')
    async getFriends(
        @Query('steamid') steamid: SteamIdDto,
        @Query('withNames') wihtNames: boolean,
        @Query('relationship') relationship?: Relationships,
    ): Promise<Responses.FriendsResponse> {
        return await this.steamService.GetFriendList(
            steamid.toString(),
            relationship,
            wihtNames,
        );
    }

    @ApiTags('User')
    @Get('achievements')
    @ApiQuery({
        name: 'steamid',
        required: true,
    })
    @ApiQuery({
        name: 'appid',
        description: 'Application ID',
    })
    @ApiQuery({
        name: 'language',
        required: false,
        description: 'Language of achievements',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Success',
        type: AchievementResponse,
    })
    async GetPlayerAchievements(
        @Query('steamid') steamid: SteamIdDto,
        @Query('appid') appid: string,
        @Query('language') language?: string,
    ) {
        return await this.steamService.GetPlayerAchievements(
            steamid.toString(),
            appid,
            language,
        );
    }

    @ApiTags('User')
    @Get('games')
    @ApiQuery({
        name: 'steamid',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Success',
        type: GamesResponse,
    })
    @UsePipes(new ValidationPipe({ transform: true }))
    async GetOwnedGames(@Query() steamid: SteamIdDto) {
        console.log(steamid);
        return await this.steamService.GetOwnedGames(steamid.steamid);
    }
}
