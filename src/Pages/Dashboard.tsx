import React from 'react';
import Sidebar from '~/Components/Sidebar';



const Dashboard = () => {
    return (<>
        <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen p-7">
            <h1>Bienvenue sur le tableau de bord</h1>
        </div>
        </div>
        </>
    );
};

export default Dashboard;