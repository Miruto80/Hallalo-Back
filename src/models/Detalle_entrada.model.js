import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Detalle_entrada = sequelize.define('Detalle_entrada', {
  Cod_entrada: { type: DataTypes.INTEGER, primaryKey: true },
  Cod_inventario: { type: DataTypes.INTEGER, primaryKey: true }
}, { tableName: 'Detalle_entrada', timestamps: false });

export const associateDetalle_entrada = ({ Entradas, Inventarios }) => {
  Detalle_entrada.belongsTo(Entradas, { foreignKey: 'Cod_entrada' });
  Detalle_entrada.belongsTo(Inventarios, { foreignKey: 'Cod_inventario' });
};
