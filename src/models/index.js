//Archivo que centraliza la exportación de todos los modelos y sus asociaciones

import sequelize from '../database/db.js';
import { Atributos, associateAtributos } from './Atributos.model.js';
import { Categorias, associateCategorias } from './Categorias.model.js';
import { Clientes, associateClientes } from './Clientes.model.js';
import { Marcas, associateMarcas } from './Marcas.model.js';
import { Modelos, associateModelos } from './Modelos.model.js';
import { Comercios, associateComercios } from './Comercios.model.js';
import { S_categorias, associateS_categorias } from './S_categorias.model.js';
import { Cargos, associateCargos } from './Cargos.model.js';
import { Permisos, associatePermisos } from './Permisos.model.js';
import { Empleados, associateEmpleados } from './Empleados.model.js';
import { Inventarios } from './Inventarios.model.js';
import { Entradas } from './Entradas.model.js';
import { Salidas } from './Salidas.model.js';
import { Gustos_categorias } from './Gustos_categorias.model.js';
import { Gustos_atributos } from './Gustos_atributos.model.js';
import { Gustos_marcas } from './Gustos_marcas.model.js';
import { Categorias_modelos } from './Categorias_modelos.model.js';
import { Atributos_modelo } from './Atributos_modelo.model.js';
import { Marcas_modelo } from './Marcas_modelo.model.js';
import { Detalle_entrada } from './Detalle_entrada.model.js';
import { Detalle_salida } from './Detalle_salida.model.js';
import { Cargos_permisos } from './Cargos_permisos.model.js';
import { Imagenes_Inventario, associateImagenes_Inventario } from './Imagenes_Inventario.model.js';

export const associateAllModels = (models = sequelize.models) => {
  associateAtributos(models);
  associateCategorias(models);
  associateClientes(models);
  associateMarcas(models);
  associateModelos(models);
  associateComercios(models);
  associateS_categorias(models);
  associateCargos(models);
  associatePermisos(models);
  associateEmpleados(models);
  associateImagenes_Inventario(models);
};

export {
  Atributos,
  Categorias,
  Clientes,
  Marcas,
  Modelos,
  Comercios,
  S_categorias,
  Cargos,
  Permisos,
  Empleados,
  Inventarios,
  Entradas,
  Salidas,
  Gustos_categorias,
  Gustos_atributos,
  Gustos_marcas,
  Categorias_modelos,
  Atributos_modelo,
  Marcas_modelo,
  Detalle_entrada,
  Detalle_salida,
  Cargos_permisos,
  Imagenes_Inventario
};
