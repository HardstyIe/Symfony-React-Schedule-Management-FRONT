import { Button } from '@material-tailwind/react';
import React from "react";
import ListCours from '~/Components/ListCours';
import ModalForm from '~/Components/ModalForm';
import Sidebar from '~/Components/Sidebar';
import { useAuth } from '~/Services/authContext';
import jwt_decode from 'jwt-decode';


const Cours = () => {

    const { token } = useAuth();

    if (token) {
        const decodedToken = jwt_decode(token);
        console.log('Informations de l\'utilisateur:', decodedToken);
    }
    else {
        console.log("mauvais token");

    }

    return (<>

        {/* div contenu coté gauche */}
        <div className="flex">
            <Sidebar />

            {/* div contenu coté droit */}
            <div className="flex-1 h-screen p-7 ml-8">
                <h1 className='text-lg pt-2 pb-10'>Bienvenue sur la page cours</h1>
                <ModalForm />
                <ListCours />

            </div>
        </div>
    </>
    );
};

export default Cours;