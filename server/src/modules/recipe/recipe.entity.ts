import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class RecipeModel {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({type: 'varchar', length: 120})
    public aisle: string;

    @Column({type: 'varchar', length: 120})
    public url: string;

    @Column({type: 'varchar', length: 120})
    public consistency: string;

    @Column({type: 'varchar', length: 120})
    public name: string;

    @Column({type: 'varchar', length: 120})
    public original: string;

    @Column({type: 'varchar', length: 5000})
    public instructions: string;   

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;
}