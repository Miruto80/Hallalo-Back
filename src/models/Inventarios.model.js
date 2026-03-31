import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Inventarios = sequelize.define('Inventarios', {
  Cod_inventario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cod_modelo: { type: DataTypes.INTEGER, allowNull: false },
  FK_Cod_comercio: { type: DataTypes.INTEGER, allowNull: false },
  Talla: { type: DataTypes.INTEGER },
  Stock: { type: DataTypes.INTEGER },
  Precio: { type: DataTypes.INTEGER }
}, { tableName: 'Inventarios', timestamps: false });

export const associateInventarios = ({ Modelos, Comercios, Entradas, Salidas, Detalle_entrada, Detalle_salida }) => {
  Inventarios.belongsTo(Modelos, { foreignKey: 'FK_Cod_modelo' });
  Inventarios.belongsTo(Comercios, { foreignKey: 'FK_Cod_comercio' });
  Inventarios.belongsToMany(Entradas, { through: Detalle_entrada, foreignKey: 'Cod_inventario', otherKey: 'Cod_entrada' });
  Inventarios.belongsToMany(Salidas, { through: Detalle_salida, foreignKey: 'Cod_inventario', otherKey: 'Cod_salida' });
};
