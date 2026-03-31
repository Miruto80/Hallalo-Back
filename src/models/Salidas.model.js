import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Salidas = sequelize.define('Salidas', {
  Cod_salida: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cedula_em: { type: DataTypes.INTEGER, allowNull: false },
  Hora_s: { type: DataTypes.TIME },
  Fecha_s: { type: DataTypes.DATEONLY },
  Cedula_s: { type: DataTypes.INTEGER }
}, { tableName: 'Salidas', timestamps: false });

export const associateSalidas = ({ Empleados, Inventarios, Detalle_salida }) => {
  Salidas.belongsTo(Empleados, { foreignKey: 'FK_Cedula_em' });
  Salidas.belongsToMany(Inventarios, { through: Detalle_salida, foreignKey: 'Cod_salida', otherKey: 'Cod_inventario' });
};
