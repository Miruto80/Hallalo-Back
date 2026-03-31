import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Atributos = sequelize.define('Atributos', {
  Cod_atributos: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  N_atributos: { type: DataTypes.STRING(100) }
}, { tableName: 'Atributos', timestamps: false });

export const associateAtributos = () => {
  const { Clientes, Modelos } = sequelize.models;

  Atributos.belongsToMany(Clientes, { through: 'Gustos_atributos', foreignKey: 'Cod_atributos', otherKey: 'Cedula_cl' });
  Clientes.belongsToMany(Atributos, { through: 'Gustos_atributos', foreignKey: 'Cedula_cl', otherKey: 'Cod_atributos' });

  Atributos.belongsToMany(Modelos, { through: 'Atributos_modelo', foreignKey: 'Cod_atributos', otherKey: 'Cod_modelo' });
  Modelos.belongsToMany(Atributos, { through: 'Atributos_modelo', foreignKey: 'Cod_modelo', otherKey: 'Cod_atributos' });
};
