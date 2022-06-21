import React, { useState, useEffect } from 'react'
import Error from './Error';


const Formulario = ({ pacientes, setPacientes, paciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    } 
  }, [paciente])
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario, si tiene campos vacios generamos una alerta
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Complete todos los campos');
      setError(true)
      return;
    }
    //Seteamos el error en falso para que se borre y vuelva a aparecer en caso de ser necesario
    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id;
    }else {
      //nuevo registro
      //Nos crea una copia de nuestro objeto pacientes y agrega los nuevos 
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }

    //REINICIAMOS EL FORMULARIO
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-5 '
        onSubmit={handleSubmit}


      >

        {/* //Si hay error lo mostramos */}
        {error && <Error mensaje='Todos los campos son obligatorios' />}
        <div className='mb-5'>
          <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            id='mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            type='text'
            placeholder='Nombre de la Mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input
            id='propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            type='text'
            placeholder='Nombre del Propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
          <input
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            type='date'
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg'
            placeholder='Describe los Sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-all'
          value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
        />

      </form>

    </div>
  )
}

export default Formulario