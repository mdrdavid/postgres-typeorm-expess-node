import { DataSource } from "typeorm";
import { Profile } from "../Entities/Profile";
import { Company } from "../Entities/Company";
import { Products } from "../Entities/Products";
import { User } from "../Entities/User";

export const connectDB = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "david",
	password: "david",
	database: "crud",
	entities: [User, Profile, Company, Products],
	synchronize: false,
	migrations: ["src/migrations/**/*.ts"],
	subscribers: ["src/subscriber/**/*{.ts,.js}"],
});
