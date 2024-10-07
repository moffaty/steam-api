import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, Length, Matches } from 'class-validator';

export class SteamIdDto {
    @IsNumberString({}, { message: 'SteamID must be a number' })
    @Length(17, 17, { message: 'SteamID must be exactly 17 digits long' })
    @Matches(/^765/, { message: 'SteamID must start with 765' })
    @ApiProperty({
        description:
            'Steam identificator. Must be start with 765 and 17 characters length',
    })
    steamId: string;
    toString() {
        return this.steamId;
    }
}
