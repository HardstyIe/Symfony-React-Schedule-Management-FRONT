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
                    <h1 className='text-lg pt-2'>Ressource pédagogique du cours</h1>

                    <div className="bg-white p-8 rounded shadow-md max-w-md ml-10 mt-20">
                        <h1 className="text-2xl font-semibold mb-4">Voir ressource pédagogique</h1>
                        <a href="/chemin/vers/votre/fichier.pdf" target="_blank" className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-center">
                            Ouvrir le fichier
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RessourceCours;