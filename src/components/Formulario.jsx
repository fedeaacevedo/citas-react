import React, { useState } from 'react'

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario, si tiene campos vacios generamos una alerta
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Complete todos los campos');
      setError(true)
    } else {
      console.log('Todos los campos completos..')
    }


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
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligatorios</p>
          </div>

        )}
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
          value="Agregar Paciente"
        />

      </form>

    </div>
  )
}

export default Formulario