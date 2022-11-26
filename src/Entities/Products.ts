import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	BaseEntity,
} from "typeorm";

import { Company } from "./Company";

@Entity()
export class Products extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	type: string;

	@ManyToMany(() => Company, (company) => company.products)
	company: Company[];
}
