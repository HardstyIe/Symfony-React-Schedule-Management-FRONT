import { HelmetProvider } from "react-helmet-async";
import Sidebar from './Components/Sidebar';

export default function App() {
  return (
    <HelmetProvider>
      <Sidebar />
    </HelmetProvider>
  );
}