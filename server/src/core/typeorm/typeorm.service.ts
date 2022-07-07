import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ENTITIES, LOGGER, MIGRATIONS, MTN, TYPE } from './constant/typeorm.service.constant';
import { databaseConfig } from './database.config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  

  public createTypeOrmOptions(): TypeOrmModuleOptions {


    return {
      type: TYPE,
      host: databaseConfig.host,
      port: databaseConfig.port,
      database: databaseConfig.database,
      username: databaseConfig.username,
      password: databaseConfig.password,
      entities: [ENTITIES],
      migrations: [MIGRATIONS],
      migrationsTableName: MTN,
      logger: LOGGER,
      synchronize: true,
    };
  }
}