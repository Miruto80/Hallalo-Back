import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Marcas = sequelize.define('Marcas', {
  Cod_marca: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  N_marca: { type: DataTypes.STRING(100) }
}, { tableName: 'Marcas', timestamps: false });

export const associateMarcas = () => {
  const { Clientes, Modelos } = sequelize.models;

  Marcas.belongsToMany(Clientes, { through: 'Gustos_marcas', foreignKey: 'Cod_marca', otherKey: 'Cedula_cl' });
  Clientes.belongsToMany(Marcas, { through: 'Gustos_marcas', foreignKey: 'Cedula_cl', otherKey: 'Cod_marca' });

  Marcas.belongsToMany(Modelos, { through: 'Marcas_modelo', foreignKey: 'Cod_marca', otherKey: 'Cod_modelo' });
  Modelos.belongsToMany(Marcas, { through: 'Marcas_modelo', foreignKey: 'Cod_modelo', otherKey: 'Cod_marca' });
};
