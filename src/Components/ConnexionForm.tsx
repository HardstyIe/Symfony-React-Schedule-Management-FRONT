import { Button, Card, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'; // Assurez-vous de spécifier le chemin correct
import userService from '../Services/userService';
import { useAuth } from '~/Services/authContext';
import { useNavigate } from 'react-router-dom';

const ConnexionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await userService.getUserToken(email, password);

      const token = response.data.token;

      setToken(token);

      // Mettre à jour l'état de connexion réussie
      // Rediriger vers la page "/cours" après un court délai
      navigate('/cours');

    } catch (error) {
      console.log(error);
      // Mettre à jour l'état du message d'erreur en cas d'échec de connexion

    }
  };

  return (
    <Card color="white" className='p-10'>
      <Typography variant="h4" color="blue-gray">
        Connexion
      </Typography>
      <>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleLogin}>
          <div className="mb-4 flex flex-col gap-6">
            <Input type='email' label="Email" name='email' style={{ fontSize: "lg" }} onChange={(e) => setEmail(e.target.value)} required crossOrigin={undefined} />
            <Input type="password" name='password' label="Password" style={{ fontSize: "lg" }} onChange={(e) => setPassword(e.target.value)} required crossOrigin={undefined} />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Se connecter
          </Button>
        </form>
      </>
    </Card>
  );
};

export default ConnexionForm;
