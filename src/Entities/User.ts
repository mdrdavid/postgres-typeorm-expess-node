
import {
  Entity,
  BaseEntity,
  Column,
  OneToOne,
  OneToMany,
    JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Company } from './Company';
import { Profile } from "./Profile";
//base entity 

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column({ name: 'name', nullable: true})
 name: string;

  @Column({
    unique: true,
  })
  email: string;
  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile

  @OneToMany(() => Company, (company) => company.user, {cascade: true})
    company: Company[]

  // @OneToOne(() => Profile)
  // @JoinColumn()
  // profile: Profile
}
