import React from 'react';
import { useNavigate } from 'react-router';

export default function Login () {
  const navigate = useNavigate();
  const loginRoute = () => {
    navigate('/home')
  }

  const signUpRoute = () => {
    navigate('login')
  }

  return (
    <div>
      <h1>Welcome to KSL Classifieds!</h1>
    </div>
  )
}