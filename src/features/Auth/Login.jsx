import React from 'react';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import AuthUse from './hook/AuthUse';

const Login = () => {

  const {email, emailError, handleSubmit, password, passwordError, setEmail, toast, setPassword} = AuthUse();
  
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-10 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>
        <Toast ref={toast} />
        <form onSubmit={handleSubmit} className='space-y-6'>
          <FloatLabel>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-inputtext-sm ${emailError ? 'p-invalid' : ''}`}
              placeholder="Email"
            />
            <label htmlFor="email">Email</label>
          </FloatLabel>
          <FloatLabel>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-inputtext-sm ${passwordError ? 'p-invalid' : ''}`}
              placeholder="Password"
              feedback={false}
            />
            <label htmlFor="password">Password</label>
          </FloatLabel>
          <Button label="Login" icon="pi pi-sign-in" className="w-full" />
        </form>
      </div>
    </div>
  );
};

export default Login;