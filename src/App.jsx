import "./App.css";
import { SitesList } from "./components/Sites/SitesList";
import { Form } from "./components/Form/Form";
import { useEffect } from "react";
import { useSites } from "./state/siteContext";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { SingleSite } from "./components/SingleSite/SingleSite";
import { Toaster } from "react-hot-toast";  

function App() {
  const { getSites } = useSites();

  useEffect(() => {
    getSites();
  }, []);

  return (
    <div className="AppBlack">
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<SitesList />} />
          <Route path="/new-site" element={<Form />} />
          <Route path="/sites/:id" element={<SingleSite />} />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
