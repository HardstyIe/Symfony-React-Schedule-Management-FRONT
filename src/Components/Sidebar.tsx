// Sidebar.js (ou Sidebar.tsx)
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [open, setOpen] = React.useState(true);


  const Menus = [

    // Classe a afficher si administrateur
    { title: 'Classe', link: '/classe', src: 'Folder', gap: true },

    { title: 'Cours', link: '/cours', src: 'Cours', gap: true },
    { title: 'Absences', link: '/absences', src: 'bloc-notes', gap: true },
    { title: 'Tableau de bord', link: '/dashboard', src: 'Chart_fill', gap: true },

    // Mettre l'id de la classe après /planning pour récupérer le planning de la classe actuel 
    { title: 'Planning', link: '/planning/2', src: 'Calendar', gap: true },
  ];



  return (
    <div className={` ${open ? 'w-72' : 'w-20 '} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
      {/* Sidebar content */}
      <img
        src={`${window.location.origin}/src/assets/navimg/control.png`}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <Link to={"/cours"}>
        <div className="flex items-center gap-x-4">
          <img
            src={`${window.location.origin}/src/assets/navimg/logo.png`}
            className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Sofip</h1>
        </div>
      </Link>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
          >
            <Link to={Menu.link}>
              <img src={`${window.location.origin}/src/assets/navimg/${Menu.src}.png`} alt={Menu.title} />

              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
