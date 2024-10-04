import { Injectable } from '@nestjs/common';
import { SteamAPI } from './steamapi';

@Injectable()
export class SteamService extends SteamAPI {
    constructor() {
        super(process.env.STEAM_API_KEY);
    }
}
