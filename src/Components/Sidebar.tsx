// Sidebar.js (ou Sidebar.tsx)
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const Menus = [
    { title: 'Dashboard', link: '/dashboard', src: 'Chart_fill', gap: true },
    { title: 'Cours', link: '/cours', src: 'Cours' },
    // { title: 'Comptes', link: '/comptes', src: 'User', gap: true },
    // { title: 'Calendrier', link: '/calendrier', src: 'Calendar' },
    // { title: 'Recherche', link: '/recherche', src: 'Search' },
    // { title: 'Analytiques', link: '/analytiques', src: 'Chart' },
    // { title: 'Fichiers', link: '/fichiers', src: 'Folder', gap: true },
    // { title: 'Paramètres', link: '/parametres', src: 'Setting' },
  ];

  return (
    <div className={` ${open ? 'w-72' : 'w-20 '} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
      {/* Sidebar content */}
      <img
        src="./src/assets/navimg/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <Link to={"/"}>
        <div className="flex items-center gap-x-4">
          <img
            src="./src/assets/navimg/logo.png"
            className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>Designer</h1>
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
              <img src={`./src/assets/navimg/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
