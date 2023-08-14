import React from 'react';
import {
  List,
  ListItem,
  Card,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const ListCours = () => {
  return (
    <Card className="w-full md:w-96">
      <List>
        <ListItem className="flex justify-between flex-col sm:flex-row"> {/* Utilisation de flex-col pour une disposition en colonne sur mobile */}
          <div className="mb-2 sm:mb-0"> {/* Ajout de mb-2 (marge bas) pour l'espacement en dessous sur mobile */}
            <Typography variant="h6" color="blue-gray">
              Nom du cours
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Date de début - Date de fin
            </Typography>
          </div>

          {/* :id à remplacer par l'id du cours */}
          <Link to={'/cours/2'}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
              Voir ressource
            </button>
          </Link>
        </ListItem>
      </List>
    </Card>
  );
};

export default ListCours;
