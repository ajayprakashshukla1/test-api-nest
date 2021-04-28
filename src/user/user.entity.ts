import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from './user.interface';

@Entity()
export class User extends BaseEntity implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  age: number;
}
