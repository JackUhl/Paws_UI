import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import AdoptablePets from "./pages/AdoptablePets/AdoptablePets";
import { AdoptablePetsNav, DonateNav, FosterNav, HomeNav, VolunteerNav } from "./models/constants/NavBarConstants";
import Volunteer from "./pages/Volunteer/Volunteer";
import Foster from "./pages/Foster/Foster";
import Donate from "./pages/Donate/Donate";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HomeNav.route} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={AdoptablePetsNav.route} element={<AdoptablePets />} />
            <Route path={FosterNav.route} element={<Foster />} />
            <Route path={VolunteerNav.route} element={<Volunteer />} />
            <Route path={DonateNav.route} element={<Donate />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
