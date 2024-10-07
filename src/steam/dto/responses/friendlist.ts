import { ApiProperty } from '@nestjs/swagger';
import { Relationships } from '../../enums'; // Предположим, что Relationships находится в отдельном файле

export class Friend {
    @ApiProperty({
        description: 'Steam ID of the friend',
        example: '76561198028175555',
    })
    steamid: string;

    @ApiProperty({
        description: 'Relationship with the user',
        enum: Relationships,
    })
    relationship: Relationships;

    @ApiProperty({
        description: 'Optional name of the friend',
        required: false,
        example: 'John Doe',
    })
    name?: string;
}

export class FriendsList {
    @ApiProperty({
        description: 'List of friends',
        type: [Friend],
    })
    friends: Friend[];
}

export class FriendsResponse {
    @ApiProperty({
        description: 'Friends list object',
        type: FriendsList,
    })
    friendslist: FriendsList;
}
