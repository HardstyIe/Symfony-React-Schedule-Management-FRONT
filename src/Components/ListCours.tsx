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
    <Card className="w-96">
      <List>
        <ListItem className="flex justify-between">
          <div>
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
