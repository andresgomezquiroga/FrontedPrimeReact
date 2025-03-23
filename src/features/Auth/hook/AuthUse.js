import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthUse = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [emailError, setEmailError] = useState(false);
      const [passwordError, setPasswordError] = useState(false);
      const toast = useRef(null);
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
    
        if (email.trim() === "") {
          setEmailError(true);
          hasError = true;
        } else {
          setEmailError(false);
        }
    
        if (password.trim() === "") {
          setPasswordError(true);
          hasError = true;
        } else {
          setPasswordError(false);
        }
    
        if (hasError) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please fill in all fields', life: 3000 });
          return;
        }
    
        navigate('/dashboard/home-page');
      };
  return {
    email,
    toast,
    handleSubmit,
    setEmail,
    emailError,
    password,
    passwordError,
    setPassword,
  }
}

export default AuthUse
