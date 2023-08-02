import { Button } from '@material-tailwind/react';
import React from "react";
import ModalForm from '~/Components/ModalForm';
import Sidebar from '~/Components/Sidebar';


const Cours = () => {
    
    return (<>

        {/* div contenu coté gauche */}
        <div className="flex">
        <Sidebar />

        {/* div contenu coté droit */}
        <div className="flex-1 h-screen p-7 ml-8">
            <h1 className='text-lg pt-2'>Bienvenue sur la page cours</h1>
            <ModalForm />
        </div>
        </div>
        </>
    );
};

export default Cours;