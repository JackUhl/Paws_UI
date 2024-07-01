import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomeRoute, AdoptablePetsRoute, AdoptablePetsIdParam, FosterRoute, VolunteerRoute, DonateRoute, NotFoundRoute } from "./models/constants/InternalUrlConstants";
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import AdoptablePets from "./pages/AdoptablePets/AdoptablePets";
import Volunteer from "./pages/Volunteer/Volunteer";
import Foster from "./pages/Foster/Foster";
import Donate from "./pages/Donate/Donate";
import NotFound from "./pages/NotFound/NotFound";
import { IsMobileContext } from "./contexts/IsMobileContext";
import PetDetails from "./pages/PetDetails/PetDetails";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth > 600 ? false : true);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth > 600 ? false : true);
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <IsMobileContext.Provider value={isMobile}>
        <BrowserRouter>
          <Routes>
            <Route path={HomeRoute} element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={AdoptablePetsRoute} element={<AdoptablePets />} />
              <Route path={AdoptablePetsRoute + AdoptablePetsIdParam} element={<PetDetails/>} /> 
              <Route path={FosterRoute} element={<Foster />} />
              <Route path={VolunteerRoute} element={<Volunteer />} />
              <Route path={DonateRoute} element={<Donate />} />
              <Route path={NotFoundRoute} element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </IsMobileContext.Provider>
    </>
  )
}
