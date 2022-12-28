import "./App.css";
import { SitesList } from "./features/sites/SitesList";
import { NewSite } from "./features/admin/NewSite";
import { NavBar } from "./features/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { SingleSite } from "./features/singleSite/SingleSite";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="AppBlack">
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<SitesList />} />
          <Route path="/new-site" element={<NewSite />} />
          <Route path="/sites/:id" element={<SingleSite />} />
          <Route path="*" element={<p>No se ha encontrado esta ruta</p>} />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
