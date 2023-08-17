import React, { useEffect, useState } from 'react';
import ListUser from '~/Components/ListUser';
import Sidebar from '~/Components/Sidebar';
import userService from '../Services/userService';


const Dashboard = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        try {
            let response = await userService.getAllUsers();
            console.log(response.data['hydra:member']);

            setUsers(response.data['hydra:member']);

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchUsers();
    }, []);


    return (<>
        <div className="flex">
            <Sidebar />
            <div className="flex-1 h-screen p-7 ml-8">
                <h1 className='text-lg pt-2'>Bienvenue sur le tableau de bord</h1>
                <ListUser users={users} />
            </div>
        </div>
    </>
    );
};

export default Dashboard;