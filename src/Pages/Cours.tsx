import React from 'react';
import Sidebar from '~/Components/Sidebar';

const Cours = () => {
    return (<>

        <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen p-7">
            <h1>Bienvenue sur la page cours</h1>
        </div>
        </div>
        </>
    );
};

export default Cours;