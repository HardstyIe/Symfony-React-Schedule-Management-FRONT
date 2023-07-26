import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from "./Pages/Dashboard";
import Accueil from './Pages/Accueil';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* Inclure la Sidebar en dehors de l'élément <Routes> */}
        <Sidebar />
        <Routes>
          <Route element={<Accueil />} path={"/"} />
          <Route element={<Dashboard />} path={"/dashboard"} />
          {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
      </BrowserRouter>
    </>
  );
}







