import { Sequelize } from 'sequelize-typescript';
import { FoodRecipe } from 'src/modules/FoodAppModule/foodRecipe.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION, Local } from './constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
         case Local:
            config = databaseConfig.local;
            break;
         case DEVELOPMENT:
           config = databaseConfig.development;
           break;
         case TEST:
           config = databaseConfig.test;
           break;
         case PRODUCTION:
           config = databaseConfig.production;
           break;
         default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([FoodRecipe]);
        await sequelize.sync({force: true});
        try {
         await sequelize.authenticate();
         console.log('Connection has been established successfully.');
       } catch (error) {
         console.error('Unable to connect to the database:', error);
       }
        return sequelize;
    },
}];