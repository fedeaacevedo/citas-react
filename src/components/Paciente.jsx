import React from 'react'

const Paciente = () => {
  return (
    

    <div className="mx-3 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}<span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}<span className="font-normal normal-case">Federico</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}<span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}<span className="font-normal normal-case">10/10/10</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}<span className="font-normal normal-case"> Picazon en la oreja</span>
      </p>
    </div>

   
  )
}

export default Paciente