import { Clientes } from './models/Clientes.model.js';
import { Cargos } from './models/Cargos.model.js';
import { Comercios } from './models/Comercios.model.js';
import { Empleados } from './models/Empleados.model.js';

export const createInitialCommerce = async () => {
  try {
    const existingCommerce = await Comercios.findOne({ where: { Nombre_cm: 'Hallalo Store' } });
    if (existingCommerce) {
      console.log('Comercio inicial ya existe');
      return existingCommerce;
    }
    const newCommerce = await Comercios.create({ Nombre_cm: 'Hallalo Store' });
    console.log('Comercio inicial creado');
    return newCommerce;
  } catch (error) {
    console.error('Error al crear comercio inicial:', error.message);
    throw error;
  }
};

export const createInitialCargo = async (comercioId) => {
  try {
    const existingCargo = await Cargos.findOne({ where: { N_cargo: 'Administrador', FK_Cod_comercio: comercioId } });
    if (existingCargo) {
      console.log('Cargo administrador ya existe');
      return existingCargo;
    }
    const newCargo = await Cargos.create({ N_cargo: 'Administrador', FK_Cod_comercio: comercioId });
    console.log('Cargo administrador creado');
    return newCargo;
  } catch (error) {
    console.error('Error al crear cargo inicial:', error.message);
    throw error;
  }
};

export const createInitialClient = async () => {
  try {
    const existingClient = await Clientes.findOne({ where: { Nombre_cl: 'BCP' } });
    if (existingClient) {
      console.log('Cliente BCP ya existe');
      return existingClient;
    }
    const newClient = await Clientes.create({
      Cedula_cl: 99999999,
      Nombre_cl: 'BCP',
      Telefono: '1234567890',
      Correo: 'bcp@example.com'
    });
    console.log('Cliente BCP creado');
    return newClient;
  } catch (error) {
    console.error('Error al crear el cliente inicial:', error.message);
    throw error;
  }
};

export const createInitialEmployee = async (comercioId, cargoId) => {
  try {
    const existingEmployee = await Empleados.findOne({ where: { Cedula_em: 99999999 } });
    if (existingEmployee) {
      console.log('Empleado administrador ya existe');
      return existingEmployee;
    }
    const newEmployee = await Empleados.create({
      Cedula_em: 99999999,
      FK_Cod_comercio: comercioId,
      FK_Cod_cargo: cargoId,
      Nombre_em: 'Admin'
    });
    console.log('Empleado administrador creado');
    return newEmployee;
  } catch (error) {
    console.error('Error al crear empleado inicial:', error.message);
    throw error;
  }
};

export const seedInitialData = async () => {
  const comercio = await createInitialCommerce();
  const cargo = await createInitialCargo(comercio.Cod_comercio);
  await createInitialClient();
  await createInitialEmployee(comercio.Cod_comercio, cargo.Cod_cargo);
  console.log('Seed inicial completado para Hallalo');
};
