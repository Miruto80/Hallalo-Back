import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Entradas = sequelize.define('Entradas', {
  Cod_entrada: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cedula_em: { type: DataTypes.INTEGER, allowNull: false },
  Hora_e: { type: DataTypes.TIME },
  Fecha_e: { type: DataTypes.DATEONLY }
}, { tableName: 'Entradas', timestamps: false });

export const associateEntradas = ({ Empleados, Inventarios, Detalle_entrada }) => {
  Entradas.belongsTo(Empleados, { foreignKey: 'FK_Cedula_em' });
  Entradas.belongsToMany(Inventarios, { through: Detalle_entrada, foreignKey: 'Cod_entrada', otherKey: 'Cod_inventario' });
};
