import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Imagenes_Zapatos = sequelize.define('Imagenes_Zapatos', {
  Cod_imagen: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Cod_modelo: { type: DataTypes.INTEGER, allowNull: false },
  Nombre_archivo: { type: DataTypes.STRING(255), allowNull: false },
  Es_principal: { type: DataTypes.BOOLEAN, defaultValue: false }
}, { tableName: 'Imagenes_Zapatos', timestamps: false });

export const associateImagenes_Zapatos = ({ Modelos }) => {
  Imagenes_Zapatos.belongsTo(Modelos, { foreignKey: 'FK_Cod_modelo', onDelete: 'CASCADE' });
};
