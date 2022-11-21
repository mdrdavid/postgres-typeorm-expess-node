
import express,{Request, Response} from "express"
import { Profile } from '../Entities/Profile';


const router = express.Router();

//get profile
router.get("/api/profile", async (req:Request, res:Response) => {
	console.log("get")
	await Profile.find().then((data:any) => {
		res.json(data);
	});
});

//create profile
router.post("/api/profile", async (req, res) => {
	const { gender, profession } = req.body;

	const profile = Profile.create({
		gender: gender,
		profession: profession,
	});
	await profile.save();
	return res.json(profile);
});
export { router as createProfileRouter };
