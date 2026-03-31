import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Comercios = sequelize.define('Comercios', {
  Cod_comercio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nombre_cm: { type: DataTypes.STRING(100) }
}, { tableName: 'Comercios', timestamps: false });

export const associateComercios = ({ Cargos, Empleados, Inventarios }) => {
  Comercios.hasMany(Cargos, { foreignKey: 'FK_Cod_comercio' });
  Comercios.hasMany(Empleados, { foreignKey: 'FK_Cod_comercio' });
  Comercios.hasMany(Inventarios, { foreignKey: 'FK_Cod_comercio' });
};
