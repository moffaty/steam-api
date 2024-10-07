import { ApiProperty } from '@nestjs/swagger';

export class Game {
    @ApiProperty({
        description: 'Game identificator',
    })
    appid: number;
    @ApiProperty({
        description: 'Played hours of all time',
    })
    playtime_forever: number;
}

export class Games {
    @ApiProperty({
        description: 'Number of games on account',
    })
    game_count: number;
    @ApiProperty({
        type: [Game],
        description: 'List of games',
    })
    games: Game[];
}

export class GamesResponse {
    @ApiProperty({
        type: Games,
    })
    response: Games;
}
