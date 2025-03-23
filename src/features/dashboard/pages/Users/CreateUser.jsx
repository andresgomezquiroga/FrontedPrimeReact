import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Button } from 'primereact/button';

const CreateUser = () => {
  const [value, setValue] = useState("");

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg'>
        <h1 className='text-2xl font-bold text-center mb-6'>Crear Usuario</h1>
        <form className='space-y-4'>
          <FloatLabel>
            <InputText
              className='w-full p-inputtext-sm'
              id='name'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="name">Nombre</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              className='w-full p-inputtext-sm'
              id='email'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="email">Correo Electrónico</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              className='w-full p-inputtext-sm'
              id='username'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="username">Nombre de Usuario</label>
          </FloatLabel>
          <FloatLabel>
            <InputText
              className='w-full p-inputtext-sm'
              id='password'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
          </FloatLabel>
          <Button label="Crear" icon="pi pi-check" className="w-full mt-4" />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;