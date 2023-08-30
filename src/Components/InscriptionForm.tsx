import React, { useState } from 'react';
import { Card, Input, Button, Typography, Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import userService from '~/Services/userService';

const InscriptionForm: React.FC = ({ classes }) => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [classId, setClass] = useState();

  const fetchPostUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await userService.postUser(
        email, password, firstname, lastname, birthday, phone, classId
      );
      // Handle success if needed
    } catch (error) {
      console.log(error);
      // Handle error if needed
    }
  };

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
      <form name='formData' onSubmit={fetchPostUser} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

        <div className="mb-4 flex flex-col gap-6">
          <Input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} label="Nom" name='lastname' style={{ fontSize: "lg" }} required crossOrigin={undefined} />
          {console.log(lastname)}
          <Input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} label="Prénom" name='firstname' style={{ fontSize: "lg" }} required crossOrigin={undefined} />
          {console.log(firstname)}

          <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} label="Email" name='email' style={{ fontSize: "lg" }} required crossOrigin={undefined} />
          {console.log(email)}

          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' label="Password" style={{ fontSize: "lg" }} required crossOrigin={undefined} />
          {console.log(password)
          }
          <Input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} label="Date de naissance" name='birthday' style={{ fontSize: "lg" }} required crossOrigin={undefined} />
          {console.log(birthday)}

          <Input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} label='Numéro de tel' name='phone' style={{ fontSize: 'lg' }} required crossOrigin={undefined} />
          {console.log(phone)}


          <div className="w-72">
            <Select name='classeId' label="Sélectionner la classe de l'étudiant" value={classId} onChange={e => {
              setClass(e);
              console.log(e);
            }}>

              {classes.map((classe: { id: number, name: string }) => (

                < Option key={classe.id} value={String(classe.id)}>
                  {classe.name}
                </Option>
              ))}
            </Select>

          </div>


        </div>
        <Button type='submit' className="mt-6 bg-green-900" fullWidth>
          Inscrire
        </Button>

      </form>
    </Card >
  );
};

export default InscriptionForm;
