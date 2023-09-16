import Paciente from './Paciente';

const ListadoPacientes = () => {
  console.log('Hola Mundo desde la pantalla negra');
  console.log('Si me da las sugerencias waka waka');
  console.log('Hola ahora desde Lvim con la pantalla negra');
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Administra a tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />

    </div>
  );
};

export default ListadoPacientes;
