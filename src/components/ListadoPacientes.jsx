import {useEffect} from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  // useEffect( () => {
  //   //condicionamos el useEffect para que solo reaccione al crear un paciente nuevo
  //   if( pacientes.length > 0){
  //   console.log('Nuevo paciente')
  //   }
  // }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {/* Condicionamos el texto que nos muestra el listado de pacientes */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Lista Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y se veran aquí.</span>
          </p>
        </>

      )}




    </div>
  )
}

export default ListadoPacientes