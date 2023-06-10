import { addNewProduct, fetchAllProducts, fetchProductByName } from "../database/repository/productRepository.js"


export const addnewProducts = async (req, res) => {
    try {
        const isAvailable = await fetchProductByName(req.body.productName)
        if (isAvailable) return res.status(400).json({ error: "Product already exists" })
       await addNewProduct(req.body)
        res.status(200).json({ message: "Product added successfully" });
    } catch (err) {
        res.status(500).json({ error: "Server Error" })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const response = await fetchAllProducts();
        res.status(200).json({ data: response })
    } catch (err) {
        res.status(500).json({ error: "Server Error" })

    }
}