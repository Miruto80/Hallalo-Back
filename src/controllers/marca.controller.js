import { getMarcas, createMarca, deleteMarca } from "../services/marca.service.js";

// Controlador para obtener todas las marcas
export const getMarcasController = async (req, res) => {
    try {
        const marcas = await getMarcas();
        res.json(marcas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para crear una nueva marca
export const createMarcaController = async (req, res) => {
    const { n_marca } = req.body;
    try {
        const newMarca = await createMarca(n_marca);
        res.status(201).json(newMarca);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para eliminar una marca por su código
export const deleteMarcaController = async (req, res) => {
    const { cod_marca } = req.params;
    try {
        const deleted = await deleteMarca(cod_marca);
        res.json({ message: "Marca eliminada correctamente", deleted });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

