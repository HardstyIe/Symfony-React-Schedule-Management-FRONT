import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from "./Pages/Dashboard";
import Cours from './Pages/Cours';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* Div pour que le contenu de la page soit dans le flex */}
        <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen p-7">
        <Routes>
          <Route element={<Cours />} path={"/"} />
          <Route element={<Dashboard />} path={"/dashboard"} />
          <Route element={<Cours />} path={"/cours"} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}







