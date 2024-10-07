import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    Length,
    Matches,
    IsOptional,
    IsNumber,
    IsBoolean,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Relationships } from '../enums';

export class SteamDTO {
    @ApiProperty({
        description:
            'Steam identificator. Must start with 765 and have a length of 17 characters.',
    })
    @IsOptional()
    @IsString({ message: 'steamid must be a string' })
    @Length(17, 17, { message: 'SteamID must be exactly 17 characters long' })
    @Matches(/^765/, { message: 'SteamID must start with 765' })
    steamid?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber({}, { message: 'appid must be a number' })
    appid?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: 'language must be a string' })
    language?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: 'relationship must be a string' })
    relationship?: Relationships;

    @ApiProperty({ required: false })
    @IsOptional()
    @Transform(({ value }) =>
        value === 'true' ? true : value === 'false' ? false : undefined,
    )
    @IsBoolean({ message: 'withNames must be a boolean' })
    withNames?: boolean;
}
