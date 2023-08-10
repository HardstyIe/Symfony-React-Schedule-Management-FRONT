import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '~/Components/Sidebar';

const RessourceCours = () => {
    const { id } = useParams();
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 h-screen p-7 ml-8">
                    <h1 className='text-lg pt-2'>Bienvenue sur la page Absences + {id}</h1>
                </div>
            </div>
        </>
    );
};

export default RessourceCours;