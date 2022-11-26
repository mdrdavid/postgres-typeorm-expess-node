import express, { Request, Response } from "express";

import { Company } from "../Entities/Company";

const router = express.Router();

//get company
router.get("/api/company", async (req: Request, res: Response) => {
	console.log("get");
	await Company.find().then((data: any) => {
		res.json(data);
	});
});

//create company
router.post("/api/company", async (req: Request, res: Response) => {
	const { name, location } = req.body;

	const company = Company.create({
		name: name,
		location: location,
	});
	await company.save();
	return res.json(company);
});
export { router as createCompanyRouter };
