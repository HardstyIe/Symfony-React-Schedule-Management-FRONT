import React from 'react';
import {
    List,
    ListItem,
    Card,
    Button,
} from "@material-tailwind/react";
import ModalAbsence from './ModalAbsence';
import ModalAssignation from './ModalAssignation';

const ListUser = () => {
    return (<>
        <div className='flex gap-20'>
            <div className='mt-10'>
                <h2 className='mb-5'>Etudiant(s)</h2>
                <Card className="w-80">
                    <List>
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'Etudiant 1
                            <ModalAbsence />
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'Etudiant 2
                            <ModalAbsence />
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'Etudiant 3
                            <ModalAbsence />
                        </ListItem>
                    </List>
                </Card>
            </div>
            <div className='mt-10'>
                <h2 className='mb-5'>Formateur(s)</h2>
                <Card className="w-80">
                    <List>
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom du Formateur 1
                            <ModalAssignation />
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom du Formateur 2
                            <ModalAssignation />
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
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