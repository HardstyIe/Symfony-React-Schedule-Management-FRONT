import React from 'react';
import Sidebar from '~/Components/Sidebar';



const Dashboard = () => {
    return (<>
        <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen p-7 ml-8">
            <h1 className='text-lg pt-2'>Bienvenue sur le tableau de bord</h1>
        </div>
        </div>
        </>
    );
};

export default Dashboard;