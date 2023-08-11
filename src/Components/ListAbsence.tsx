import { Card, List, ListItem } from '@material-tailwind/react';
import React from 'react';
import ModalAbsence from './ModalAbsence';

const ListAbsence = () => {
    return (<>
        <div className='flex gap-20'>
            <div className='mt-10'>
                <h2 className='mb-5'>Absence(s)</h2>
                <Card className="w-80">
                    <List>
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'Etudiant 1 qui est absent
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'Etudiant 2 qui est absent
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'Etudiant 3 qui est absent
                        </ListItem>
                    </List>
                </Card>
            </div>
            <div className='mt-10'>
                <h2 className='mb-5'>Retard(s)</h2>
                <Card className="w-80">
                    <List>
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'étudiant 1 qui est en retard
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'étudiant 2 qui est en retard
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            nom de l'étudiant 3 qui est en retard
                        </ListItem>
                    </List>
                </Card>
            </div>
        </div>
    </>
    );
};

export default ListAbsence;