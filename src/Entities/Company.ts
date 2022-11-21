

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToOne, JoinColumn,  JoinTable, BaseEntity } from "typeorm"
import { User } from "./User";
import { Profile } from "./Profile";
import { Products } from './Products';

@Entity()
export class Company extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    location: string

    @OneToOne(() => Profile, {cascade: true})
    @JoinColumn()
    profile: Profile;

    @ManyToOne(() => User, (user) => user.company)
    user: User;
    
    
  @ManyToMany(() => Products, (products) => products.company)
  @JoinTable()
  products: Products[]
}