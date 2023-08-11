import React from 'react';
import CalendarPlanning from '~/Components/CalendarPlanning';
import Sidebar from '~/Components/Sidebar';

const Planning = () => {
    return (
        <>

            {/* div contenu coté gauche */}
            <div className="flex">
                <Sidebar />

                {/* div contenu coté droit */}
                <div className="flex-1 h-screen p-7 ml-8">
                    <h1 className='text-lg pt-2'>Bienvenue sur la page planning</h1>
                    <CalendarPlanning />
                </div>
            </div>
        </>
    );
};

export default Planning;