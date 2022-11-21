import { Entity, PrimaryGeneratedColumn, Column,   OneToOne,
  JoinColumn, BaseEntity,} from "typeorm"

import { User } from "./User";


@Entity("profile")
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    gender: string

    @Column()
    profession: string
    @OneToOne(() => User, (user) => user.profile)
    user: User
}