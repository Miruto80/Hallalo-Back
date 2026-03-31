import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Detalle_salida = sequelize.define('Detalle_salida', {
  Cod_salida: { type: DataTypes.INTEGER, primaryKey: true },
  Cod_inventario: { type: DataTypes.INTEGER, primaryKey: true }
}, { tableName: 'Detalle_salida', timestamps: false });

export const associateDetalle_salida = ({ Salidas, Inventarios }) => {
  Detalle_salida.belongsTo(Salidas, { foreignKey: 'Cod_salida' });
  Detalle_salida.belongsTo(Inventarios, { foreignKey: 'Cod_inventario' });
};
