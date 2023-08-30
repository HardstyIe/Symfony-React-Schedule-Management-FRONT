import React, { useState, useEffect } from 'react';
import InscriptionForm from '../Components/InscriptionForm'
import ClassService from '~/Services/ClassService';

const Inscription = () => {
    const [classes, setClasses] = useState([]);

    const fetchClasses = async () => {
        try {
            let response = await ClassService.getClasses();
            setClasses(response.data['hydra:member']);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchClasses();
    }, []);
    return (<>

        <div className="flex items-center justify-center h-screen m-3">
            <InscriptionForm classes={classes} />
        </div>
    </>
    );
};

export default Inscription;