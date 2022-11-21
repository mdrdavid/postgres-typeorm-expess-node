import express from "express";
import { User } from "../Entities/User";

const router = express.Router();

//get user
router.get("/api/user", async (req, res) => {
	console.log("get")
	await User.find().then((data) => {
		res.json(data);
	});
});

//create user
router.post("/api/user", async (req, res) => {
	const { name, email } = req.body;

	const user = User.create({
		name: name,
		email: email,
	});
	await user.save();
	return res.json(user);
});
export { router as createUserRouter };
