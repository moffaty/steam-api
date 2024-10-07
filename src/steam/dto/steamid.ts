import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Matches } from 'class-validator';

export class SteamIdDto {
    @ApiProperty({
        description:
            'Steam identificator. Must start with 765 and have a length of 17 characters.',
    })
    @IsString() // Проверка на строку
    @Length(17, 17, { message: 'SteamID must be exactly 17 characters long' })
    @Matches(/^765/, { message: 'SteamID must start with 765' })
    steamid: string;
}
