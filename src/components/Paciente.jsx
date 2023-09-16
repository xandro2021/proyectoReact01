const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {''}
        <span className="font-normal normal-case">Alejandro Salazar</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {''}
        <span className="font-normal normal-case">correo@correo</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {''}
        <span className="font-normal normal-case">12 de Octubre del 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {''}
        <span className="font-normal normal-case">
          Arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Ornare suspendisse sed nisi lacus, sed viverra tellus in hac habitasse!
          Sed turpis tincidunt id aliquet risus feugiat in ante metus, dictum at tempor commodo, ullamcorper a lacus. Id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
