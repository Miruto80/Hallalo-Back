import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const S_categorias = sequelize.define('S_categorias', {
  Cod_sc_categoria: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  FK_Categoria: { type: DataTypes.INTEGER, allowNull: false },
  NS_categoria: { type: DataTypes.STRING(100) }
}, { tableName: 'S_categorias', timestamps: false });

export const associateS_categorias = () => {
  const { Categorias, Modelos } = sequelize.models;

  S_categorias.belongsTo(Categorias, { foreignKey: 'FK_Categoria' });
  Categorias.hasMany(S_categorias, { foreignKey: 'FK_Categoria' });

  S_categorias.belongsToMany(Modelos, { through: 'Categorias_modelos', foreignKey: 'Cod_sc_categoria', otherKey: 'Cod_modelo' });
  Modelos.belongsToMany(S_categorias, { through: 'Categorias_modelos', foreignKey: 'Cod_modelo', otherKey: 'Cod_sc_categoria' });
};
