import { ApiProperty } from '@nestjs/swagger';
import { SteamIdDto } from '../steamid';
export class Player {
    @ApiProperty({ description: 'Steam identificator', type: SteamIdDto })
    steamid: SteamIdDto;
    @ApiProperty({
        description:
            'This represents whether the profile is visible or not, and if it is visible, why you are allowed to see it',
    })
    communityvisibilitystate: number;
    @ApiProperty({
        description:
            "If set, indicates the user has a community profile configured (will be set to '1')",
    })
    profilestate: number;
    @ApiProperty({
        description: "The player's persona name (display name)",
    })
    personaname: string;
    @ApiProperty({
        description: 'If set, indicates the profile allows public comments.',
    })
    commentpermission: number;
    @ApiProperty({
        description: "The full URL of the player's Steam Community profile.",
    })
    profileurl: string;
    @ApiProperty({
        description:
            "The full URL of the player's 32x32px avatar. If the user hasn't configured an avatar, this will be the default ? avatar.",
    })
    avatar: string;
    @ApiProperty({
        description:
            "The full URL of the player's 64x64px avatar. If the user hasn't configured an avatar, this will be the default ? avatar.",
    })
    avatarmedium: string;
    @ApiProperty({
        description:
            "The full URL of the player's 184x184px avatar. If the user hasn't configured an avatar, this will be the default ? avatar.",
    })
    avatarfull: string;
    avatarhash: string;
    @ApiProperty({
        description:
            "The user's current status. 0 - Offline, 1 - Online, 2 - Busy, 3 - Away, 4 - Snooze, 5 - looking to trade, 6 - looking to play. If the player's profile is private, this will always be '0', except is the user has set their status to looking to trade or looking to play, because a bug makes those status appear even if the profile is private.",
    })
    personastate: number;
    @ApiProperty({
        description:
            "The player's primary group, as configured in their Steam Community profile.",
    })
    primaryclanid: string;
    @ApiProperty({
        description: "The time the player's account was created.",
    })
    timecreated: number;
    personastateflags: number;
    @ApiProperty({
        description:
            "If set on the user's Steam Community profile, The user's country of residence, 2-character ISO country code",
    })
    loccountrycode: string;
    @ApiProperty({
        description:
            "If set on the user's Steam Community profile, The user's state of residence",
    })
    locstatecode: string;
}

export class Players {
    @ApiProperty({
        description: 'List of information about player',
        type: [Player],
    })
    players: Player[];
}

export class ProfileResponse {
    @ApiProperty({
        type: Players,
    })
    response: Players;
}
