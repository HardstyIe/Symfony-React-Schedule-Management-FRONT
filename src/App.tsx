import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Cours from './Pages/Cours';
import Absences from './Pages/Absences';
import Inscription from './Pages/Inscription';
import Connexion from './Pages/Connexion';
import Planning from './Pages/Planning';
import RessourceCours from './Pages/RessourceCours';
import Classe from './Pages/Classe';
import { AuthProvider } from './Services/authContext.js';

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Connexion />} path="/" />
            <Route element={<Inscription />} path="/inscription" />
            <Route element={<RessourceCours />} path='/cours/:id' />
            <Route element={<Cours />} path="/cours" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Absences />} path="/absences" />
            <Route element={<Planning />} path='/planning/:classeid' />
            <Route element={<Classe />} path='/classe' />
            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
