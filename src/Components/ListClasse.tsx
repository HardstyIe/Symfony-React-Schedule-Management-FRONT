import { Button, Card, List, ListItem } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

// Seul les administrateur auront le droit d'accéder à cette page
const ListClasse = () => {
    return (
        <>
            <div className='mt-10'>
                <h2 className='mb-5'>Classe(s)</h2>
                <Card className="w-80">
                    <List>
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            Classe 1

                            {/* Remplacer 2 par l'id de la classe pour récupérer le planning de la classe cliqué */}
                            <Link to="/planning/2" >
                                <Button color="blue">
                                    Voir Planning
                                </Button>
                            </Link>
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            Classe 2

                            {/* Remplacer 2 par l'id de la classe pour récupérer le planning de la classe cliqué */}
                            <Link to="/planning/2" >
                                <Button color="blue">
                                    Voir Planning
                                </Button>
                            </Link>
                        </ListItem>
                        <hr />
                        <ListItem ripple={false} className="py-1 pr-1 pl-4 pt-2 pb-2 flex justify-between items-center">
                            Classe 3

                            {/* Remplacer 2 par l'id de la classe pour récupérer le planning de la classe cliqué */}
                            <Link to="/planning/2" >
                                <Button color="blue">
                                    Voir Planning
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </>
    );
};

export default ListClasse;