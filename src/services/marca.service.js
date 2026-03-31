import {Marcas} from "../models/Marcas.model.js";

// Obtener todas las marcas
export const getMarcas = async () => {
    try {
        const marcas = await Marcas.findAll();
        return marcas;
    } catch (error) {
        throw new Error("Error al obtener las marcas");
    }
};

export const createMarca = async (n_marca) => {
    try {
        const newMarca = await Marcas.create({ N_marca: n_marca });
        return newMarca;
    } catch (error) {
        throw new Error("Error al crear la marca");
    }
};

export const deleteMarca = async (cod_marca) => {
    try {
        const deleted = await Marcas.destroy({ where: { Cod_marca: cod_marca } });
        return deleted;
    } catch (error) {
        throw new Error("Error al eliminar la marca");
    }
};
