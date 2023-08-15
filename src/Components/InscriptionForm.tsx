import React from 'react';
import { Card, Input, Button, Typography, Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const InscriptionForm: React.FC = () => {

  return (
    <Card color="white" className='p-10'>
      <div className='flex justify-between'>
        <Typography variant="h4" color="blue-gray">
          Inscrire un étudiant
        </Typography>
        <Link to={'/classe'}>
          <Button className='bg-blue-700'>Retour</Button>
        </Link>
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

        <div className="mb-4 flex flex-col gap-6">
          <Input type='text' label="Nom" name='name' style={{ fontSize: "lg" }} required />
          <Input type='text' label="Prénom" name='lastname' style={{ fontSize: "lg" }} required />
          <Input type='email' label="Email" name='email' style={{ fontSize: "lg" }} required />
          <Input type="password" name='password' label="Password" style={{ fontSize: "lg" }} required />
          <Input type='date' label="Date de naissance" name='birthday' style={{ fontSize: "lg" }} required />

          <div className="w-72">
            <Select label="Sélecionner la classe de l'étudiant">
              <Option>Nom de la classe 1</Option>
              <Option>Nom de la classe 2</Option>
              <Option>Nom de la classe 3</Option>
              <Option>Nom de la classe 4</Option>
              <Option>Nom de la classe 5</Option>
            </Select>
          </div>

        </div>
        <Button className="mt-6 bg-green-900" formMethod='POST' fullWidth>
          Inscrire
        </Button>

      </form>
    </Card>
  );
};

export default InscriptionForm;
