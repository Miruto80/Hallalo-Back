import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Imagenes_Inventario = sequelize.define('Imagenes_Inventario', {
  Cod_img: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cod_inventario: { type: DataTypes.INTEGER, allowNull: false },
  Nombre_archivo: { type: DataTypes.STRING(255), allowNull: false },
  Es_principal: { type: DataTypes.BOOLEAN, defaultValue: false }
}, { tableName: 'Imagenes_Inventario', timestamps: false });

export const associateImagenes_Inventario = ({ Inventarios }) => {
  Imagenes_Inventario.belongsTo(Inventarios, { foreignKey: 'FK_Cod_inventario', onDelete: 'CASCADE' });
};

export default Imagenes_Inventario;
