import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

export const Modelos = sequelize.define('Modelos', {
  Cod_modelo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  N_modelo: { type: DataTypes.STRING(100) }
}, { tableName: 'Modelos', timestamps: false });

export const associateModelos = () => {
  const { Inventarios, S_categorias, Atributos, Marcas, Imagenes_Zapatos } = sequelize.models;

  Modelos.hasMany(Inventarios, { foreignKey: 'FK_Cod_modelo' });
  Inventarios.belongsTo(Modelos, { foreignKey: 'FK_Cod_modelo' });

  Modelos.belongsToMany(S_categorias, { through: 'Categorias_modelos', foreignKey: 'Cod_modelo', otherKey: 'Cod_sc_categoria' });
  S_categorias.belongsToMany(Modelos, { through: 'Categorias_modelos', foreignKey: 'Cod_sc_categoria', otherKey: 'Cod_modelo' });

  Modelos.belongsToMany(Atributos, { through: 'Atributos_modelo', foreignKey: 'Cod_modelo', otherKey: 'Cod_atributos' });
  Atributos.belongsToMany(Modelos, { through: 'Atributos_modelo', foreignKey: 'Cod_atributos', otherKey: 'Cod_modelo' });

  Modelos.belongsToMany(Marcas, { through: 'Marcas_modelo', foreignKey: 'Cod_modelo', otherKey: 'Cod_marca' });
  Marcas.belongsToMany(Modelos, { through: 'Marcas_modelo', foreignKey: 'Cod_marca', otherKey: 'Cod_modelo' });

  Modelos.hasMany(Imagenes_Zapatos, { foreignKey: 'FK_Cod_modelo' });
  Imagenes_Zapatos.belongsTo(Modelos, { foreignKey: 'FK_Cod_modelo', onDelete: 'CASCADE' });
};
