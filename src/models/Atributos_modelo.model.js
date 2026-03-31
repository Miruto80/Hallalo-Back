import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Atributos_modelo = sequelize.define('Atributos_modelo', {
  Cod_atributos: { type: DataTypes.INTEGER, primaryKey: true },
  Cod_modelo: { type: DataTypes.INTEGER, primaryKey: true }
}, { tableName: 'Atributos_modelo', timestamps: false });

export const associateAtributos_modelo = ({ Atributos, Modelos }) => {
  Atributos_modelo.belongsTo(Atributos, { foreignKey: 'Cod_atributos' });
  Atributos_modelo.belongsTo(Modelos, { foreignKey: 'Cod_modelo' });
};
