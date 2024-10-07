import {
    Controller,
    Get,
    HttpStatus,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import { SteamService } from './steam.service';
import { Relationships } from './enums';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FriendsList } from './dto/friendlist';
import { Responses } from './responses';
import { ProfileResponse } from './dto/profile';

@Controller('steam')
export class SteamController {
    constructor(readonly steamService: SteamService) {}

    @ApiTags('User')
    @ApiOperation({ summary: 'Output steam profile information' })
    @ApiQuery({
        name: 'steamids',
        required: true,
        description: 'Steam identificator',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Succes',
        type: ProfileResponse,
    })
    @Get('profile')
    async getProfile(
        @Query('steamids', new ParseIntPipe()) steamIds: string,
    ): Promise<Responses.ProfileResponse> {
        return await this.steamService.GetProfileInfo(steamIds);
    }

    @ApiTags('User')
    @ApiOperation({ summary: 'Output friend list' })
    @ApiQuery({
        name: 'steamid',
        required: true,
        description: 'Steam identificator',
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
        @Query('steamid') steamid: string,
        @Query('withNames') wihtNames: boolean,
        @Query('relationship') relationship?: Relationships,
    ): Promise<Responses.FriendsResponse> {
        return await this.steamService.GetFriendList(
            steamid,
            relationship,
            wihtNames,
        );
    }
}
