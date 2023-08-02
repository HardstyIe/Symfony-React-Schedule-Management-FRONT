import { Button, Card, Input, Option, Select, Typography } from '@material-tailwind/react';
import React from 'react';

const ConnexionForm: React.FC = () => {
    return (

    <Card color="white" className='p-10'>

        <Typography variant="h4" color="blue-gray">
          Connexion
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

          <div className="mb-4 flex flex-col gap-6">
            <Input type='email' label="Email" name='email' style={{ fontSize: "lg" }} required />
            <Input type="password" name='password' label="Password" style={{ fontSize: "lg" }} required />

          </div>
          <Button className="mt-6" fullWidth>
            Se connecter
          </Button>
          
        </form>
      </Card>

    );
};

export default ConnexionForm;