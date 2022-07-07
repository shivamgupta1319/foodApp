import * as dotenv from 'dotenv';
import { IDatabaseConfigAttributes } from './dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfigAttributes = {

    
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
      
};