import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Clientes = sequelize.define('Clientes', {
  Cedula_cl: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  Nombre_cl: { type: DataTypes.STRING(100) },
  Telefono: { type: DataTypes.STRING(20) },
  Correo: { type: DataTypes.STRING(100) }
}, { tableName: 'Clientes', timestamps: false });

export const associateClientes = () => {
  const { Categorias, Atributos, Marcas } = sequelize.models;

  Categorias.belongsToMany(Clientes, { through: 'Gustos_categorias', foreignKey: 'Cod_categoria', otherKey: 'Cedula_cl' });
  Clientes.belongsToMany(Categorias, { through: 'Gustos_categorias', foreignKey: 'Cedula_cl', otherKey: 'Cod_categoria' });

  Atributos.belongsToMany(Clientes, { through: 'Gustos_atributos', foreignKey: 'Cod_atributos', otherKey: 'Cedula_cl' });
  Clientes.belongsToMany(Atributos, { through: 'Gustos_atributos', foreignKey: 'Cedula_cl', otherKey: 'Cod_atributos' });

  Marcas.belongsToMany(Clientes, { through: 'Gustos_marcas', foreignKey: 'Cod_marca', otherKey: 'Cedula_cl' });
  Clientes.belongsToMany(Marcas, { through: 'Gustos_marcas', foreignKey: 'Cedula_cl', otherKey: 'Cod_marca' });
};
