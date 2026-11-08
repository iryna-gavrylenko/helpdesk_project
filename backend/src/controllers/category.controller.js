import { Category } from '../models/category.model.js';


//create a categorie
const createCategories = async (req, res) => {
    try {
        const {name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        const categorie = await Category.create({
            name,
            description
        });
        return res.status(201).json({
            message: "Categorie created successfully", categorie
        });
    
    } catch (error) {
    return res.status(500).json({
        message: "Internal Server error", error
    });
}
}

// Read all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error", error
        });
    }
}

export {
    getCategories,
    createCategories
};
