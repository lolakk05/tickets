import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { PrismaPg } from 'node_modules/@prisma/adapter-pg/dist/index.mjs';
import { Pool } from 'node_modules/@types/pg/index.mjs';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }
}
