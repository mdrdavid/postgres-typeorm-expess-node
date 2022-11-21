import { DataSource } from "typeorm";
import { Profile } from '../src/Entities/Profile';
import {Company}  from '../src/Entities/Company';
import { Products } from '../src/Entities/Products';
import { User } from "../src/Entities/User";

export const connectDB = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "david",
	password: "david",
	database: "crud",
	entities: [User, Profile, Company, Products],
	synchronize: true,
	migrations: ["src/migrations/**/*.ts"],
	subscribers: ['src/subscriber/**/*{.ts,.js}'],
});