import React from 'react';
import ListAbsence from '~/Components/ListAbsence';
import ModalAbsence from '~/Components/ModalAbsence';
import Sidebar from '~/Components/Sidebar';

const Absences = () => {
    return (
        <>

            <div className="flex">
                <Sidebar />
                <div className="flex-1 h-screen p-7 ml-8">
                    <h1 className='text-lg pt-2 pb-10'>Bienvenue sur la page Absences</h1>

                    {/* Modal que seul les étudiants peuvent avoir pour signaler leur absence (les roles doivent etre définit dans le modal pour retirer l'input nom de l'étudiant si c'est un étudiant qui accede au modal) */}
                    <ModalAbsence />

                    {/* Liste des absence que tout le monde peut voir sauf les étudiants */}
                    <ListAbsence />
                </div>
            </div>
        </>
    );
};

export default Absences;