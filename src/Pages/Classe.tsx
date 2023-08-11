import React from 'react';
import ListClasse from '~/Components/ListClasse';
import Sidebar from '~/Components/Sidebar';

const Classe = () => {
    return (<>

        {/* div contenu coté gauche */}
        <div className="flex">
            <Sidebar />

            {/* div contenu coté droit */}
            <div className="flex-1 h-screen p-7 ml-8">
                <h1 className='text-lg pt-2'>Bienvenue sur la page classe</h1>
                <ListClasse />
            </div>
        </div>
    </>
    );
};

export default Classe;