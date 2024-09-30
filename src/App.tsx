import React, { useEffect, useState } from 'react';
import axiosInstance from './helpers/axios';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axiosInstance.get('/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error al comunicarse con el backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>Prueba de conexión con Axios y configuración global</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
