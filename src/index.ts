import express from "express";

import { createUserRouter } from "./Routes/createUser";
import { deleteUserRouter } from "./Routes/deleteUser";
import { createProfileRouter } from "./Routes/createProfile";
import { createCompanyRouter } from "./Routes/createCompany";
import { createProductRouter } from "./Routes/createProduct";
import { connectDB } from "./utils/data_source";

//create express app
const app = express();

//middle ware
app.use(express.json());
app.use(createUserRouter);
app.use(deleteUserRouter);
app.use(createProfileRouter);
app.use(createCompanyRouter);
app.use(createProductRouter);

connectDB
	.initialize()
	.then(() => {
		console.log(`Server running`);
	})
	.catch((err) => {
		console.error(`Data Source initialization error`, err);
	});

app.listen(5000, () => {
	console.log("app is listening");
});
export default connectDB;
