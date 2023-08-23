import React from 'react';
import {
    List,
    ListItem,
    Card,
} from "@material-tailwind/react";
import ModalAbsence from './ModalAbsence';
import ModalAssignation from './ModalAssignation';
import { useAuth } from '~/Services/authContext';
import jwt_decode from 'jwt-decode';
import { checkIsAdmin } from '~/Services/authUtils';


// Ne pas oubliez. role à définir sur les boutons selon si c'est un etudiant formateur ou administrateur

const ListUser = ({ users }) => {

    let isAdmin = checkIsAdmin();

    // Filtrer les utilisateurs avec le rôle "ROLE_USER"
    const filteredUsers = users.filter(user => user.roles.includes('ROLE_USER'));

    // Filtrer les utilisateurs avec le rôle "ROLE_TEACHER"
    const filteredUsersTeachers = users.filter(user => user.roles.includes('ROLE_TEACHER'));


    return (<>
        <div className='flex flex-col gap-20 md:flex-row'>
            <div className='mt-10'>
                <h2 className='mb-5'>Etudiant(s)</h2>
                <Card className="w-full">
                    <List>
                        {filteredUsers.map((user, index) => (
                            <ListItem key={index} ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center gap-4">
                                {user.firstName} {user.lastName} {/* Utilisez la propriété appropriée de l'utilisateur */}

                                {/* Vérifie si pas administrateur pour afficher ce modal */}
                                {!isAdmin ? <ModalAbsence /> : null}
                            </ListItem>
                        ))}

                    </List>
                </Card>
            </div>
            <div className='mt-10'>
                <h2 className='mb-5'>Formateur(s)</h2>
                <Card className="w-full">
                    <List>
                        {filteredUsersTeachers.map((user, index) => (
                            <ListItem key={user.id} ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center gap-4">
                                {user.firstName} {user.lastName}

                                {/* Condition pour avoir le modal que si on est administrateur */}
                                {isAdmin ? <ModalAssignation /> : null}

                            </ListItem>
                        ))}
                    </List>
                </Card>

            </div>
        </div>
    </>
    )
};

export default ListUser;