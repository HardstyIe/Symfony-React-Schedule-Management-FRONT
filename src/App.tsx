import { useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(() => {
    // auth.setAxiosToken();
  }, []);

  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          {/* <Route element={#} path="/"></Route>
          <Route element={#} path="/film"></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
