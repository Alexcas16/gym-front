// REACT
import React, { useState } from 'react';

// AXIOS
import axiosInstance from '../../helpers/axios';

const Login: React.FC = () => {
    // VARIABLES
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    // FUNCIONES
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (user === '' || password === '') {
            setError('Por favor, complete todos los campos.');
            return;
        }

        setError(null);

        console.log('User:', user);
        console.log('Password:', password);

        axiosInstance.post('/login/tryLogin', {
            user: user,
            password: password,
          })
          .then((response) => {
            console.log('Response:', response.data);
            // Aquí puedes manejar la respuesta de éxito, como redirigir al usuario o mostrar un mensaje
          })
          .catch((err) => {
            console.error('Error en la solicitud de inicio de sesión:', err);
            setError('Error en las credenciales, por favor intenta de nuevo.'); // Manejo de errores
          });
    };

    // DOM
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div>
            <h1 className="text-3xl font-bold text-center mb-6 -mt-16">Reserva automática</h1>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
            {error && (
                <div className="mb-4 text-red-500 text-sm">
                {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                    Usuario
                </label>
                <input
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingrese su usuario"
                />
                </div>
                <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingrese su contraseña"
                />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                Iniciar sesión
                </button>
            </form>
            </div>
        </div>
    );
};

export default Login;
