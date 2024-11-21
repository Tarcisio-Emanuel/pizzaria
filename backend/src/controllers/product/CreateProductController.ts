import { Request, Response } from "express";
import { CreateProductServer } from "../../services/product/CreateProductServer";

class CreateProductController {

    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;

        const createProductServer = new CreateProductServer();

        if (!req.file) {
            throw new Error("error upload file!!!!!")
        } else {
            const { originalname, filename: banner } = req.file;
            // console.log(filename);
            
            const product = await createProductServer.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(product);
        }

    }

}

export { CreateProductController }
// 5de49cb1-1d4a-4a97-8a82-9393b56427a2