import React from 'react';
import {
    List,
    ListItem,
    Card,
    Button,
} from "@material-tailwind/react";
import ModalAbsence from './ModalAbsence';
import ModalAssignation from './ModalAssignation';


// Ne pas oubliez. role à définir sur les boutons selon si c'est un etudiant formateur ou administrateur

const ListUser = ({ users }) => {
    console.log(users);

    return (<>
        <div className='flex flex-col gap-20 md:flex-row'>
            <div className='mt-10'>
                <h2 className='mb-5'>Etudiant(s)</h2>
                <Card className="w-full">
                    <List>
                        {users.map((user, index) => (
                            <ListItem key={index} ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center gap-4">
                                {console.log(user)
                                }
                                {user.firstName} {/* Utilisez la propriété appropriée de l'utilisateur */}
                                <ModalAbsence />
                            </ListItem>
                        ))}

                    </List>
                </Card>
            </div>
            <div className='mt-10'>
                <h2 className='mb-5'>Formateur(s)</h2>
                <Card className="w-full">
                    <List>
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center gap-4">
                            nom du Formateur 1
                            <ModalAssignation />
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center gap-4">
                            nom du Formateur 2
                            <ModalAssignation />
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center gap-4">
                            nom du Formateur 3
                            <ModalAssignation />
                        </ListItem>
                    </List>
                </Card>

            </div>
        </div>
    </>
    )
};

export default ListUser;