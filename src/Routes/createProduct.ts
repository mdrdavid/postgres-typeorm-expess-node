
import express,{Request, Response} from "express"
import { Products } from '../Entities/Products';


const router = express.Router();

//get all products
router.get("/api/products", async (req:Request, res:Response) => {
	console.log("get")
	await Products.find().then((data:any) => {
		res.json(data);
	});
});

//create a product
router.post("/api/product", async (req, res) => {
	const { name, type } = req.body;

	const product = Products.create({
		name: name,
		type: type,
	});
	await product.save();
	return res.json(product);
});
export { router as createProductRouter };
