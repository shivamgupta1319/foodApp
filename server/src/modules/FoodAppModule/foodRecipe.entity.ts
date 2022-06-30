import { Table, Column, Model, DataType, AutoIncrement } from 'sequelize-typescript';

@Table
export class FoodRecipe extends Model<FoodRecipe> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    aisle: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    url: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    consistency: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    original: string;

}