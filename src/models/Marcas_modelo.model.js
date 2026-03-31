import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Marcas_modelo = sequelize.define('Marcas_modelo', {
  Cod_marca: { type: DataTypes.INTEGER, primaryKey: true },
  Cod_modelo: { type: DataTypes.INTEGER, primaryKey: true }
}, { tableName: 'Marcas_modelo', timestamps: false });

export const associateMarcas_modelo = ({ Marcas, Modelos }) => {
  Marcas_modelo.belongsTo(Marcas, { foreignKey: 'Cod_marca' });
  Marcas_modelo.belongsTo(Modelos, { foreignKey: 'Cod_modelo' });
};
