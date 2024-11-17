import dbConnect from "@/backend/config/dbConnect";
import {
  newProduct,
  getProduct,
} from "@/backend/controllers/productController";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    return newProduct(req, res);
  }
  if (req.method === "GET") {
    return getProduct(req, res);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
