import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Cours from './Pages/Cours';
import Absences from './Pages/Absences';
import Inscription from './Pages/Inscription';

export default function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
            <Route element={<Inscription />} path="/inscription" />
            <Route element={<Cours />} path="/cours" />
              <Route element={<Dashboard />} path="/dashboard" />
              <Route element={<Absences />} path="/absences" />
              {/* Ajoutez d'autres routes ici si nécessaire */}
            </Routes>
      </BrowserRouter>
    </>
  );
}
