import { ApiProperty } from '@nestjs/swagger';

export class Achievement {
    @ApiProperty({
        description: 'The API name of the achievement',
    })
    apiname: string;
    @ApiProperty({
        description: 'Whether or not the achievement has been completed.',
    })
    achieved: string;
    @ApiProperty({
        description: 'Date when the achievement was unlocked.',
    })
    unlocktime: number;
    @ApiProperty({
        description: 'Localized achievement name',
    })
    name?: string;
    @ApiProperty({
        description: 'Localized description of the achievement',
    })
    description?: string;
}

export class Achievements {
    @ApiProperty({
        description: 'Steam identificator',
    })
    steamID: string;
    @ApiProperty({
        description: 'Game name',
    })
    gameName: string;
    @ApiProperty({
        description: 'Array of achievements',
        type: [Achievement],
    })
    acheivements?: Achievement[];
    @ApiProperty({
        description: 'Result of request',
    })
    success: boolean;
}

export class AchievementResponse {
    @ApiProperty({
        description: 'Player stat. All achieves of current game (appid)',
        type: Achievements,
    })
    playerstats: Achievements;
}
