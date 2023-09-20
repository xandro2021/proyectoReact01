import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra a tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {/* Cuando se renderiza varias veces un mismo componente con un map, este debe contar con una llave unica */}
          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando paciences y {''}
            <span className="text-indigo-600 font-bold">aparaceran en este lugar</span>
          </p>
        </>
      )}


    </div>
  );
};

export default ListadoPacientes;
