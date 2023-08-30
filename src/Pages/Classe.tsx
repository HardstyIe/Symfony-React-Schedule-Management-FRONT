import { Button } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListClasse from '~/Components/ListClasse';
import Sidebar from '~/Components/Sidebar';
import ClassService from '~/Services/ClassService';

const Classe = () => {

    return (<>

        {/* div contenu coté gauche */}
        <div className="flex">
            <Sidebar />

            {/* div contenu coté droit */}
            <div className="flex-1 h-screen p-7 ml-8">
                <h1 className='text-lg pt-2'>Bienvenue sur la page classe</h1>
                <br />
                <br />
                <Link to={'/inscription'}>
                    <Button className='bg-green-700'>
                        Inscrire un étudiant
                    </Button>
                </Link>
                <ListClasse />
            </div>
        </div>
    </>
    );
};

export default Classe;