'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // importante usar next/navigation en app directory

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isSignIn ? 'Iniciado sesión' : 'Registrado');
    router.push('/'); // volver al inicio
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[var(--accent)]">{isSignIn ? 'Iniciar sesión' : 'Registrarse'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-orange-500 transition-colors">
            {isSignIn ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-sm text-[var(--accent)] hover:underline">
            {isSignIn ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
