import { createBrowserRouter } from "react-router-dom";
import { AdoptablePetsIdRoute, AdoptablePetsRoute, DonateRoute, FosterRoute, HomeRoute, VolunteerRoute } from "../../models/constants/InternalUrlConstants";
import Layout from "../../pages/Layout/Layout";
import Home from "../../pages/Home/Home";
import AdoptablePets from "../../pages/AdoptablePets/AdoptablePets";
import Foster from "../../pages/Foster/Foster";
import Volunteer from "../../pages/Volunteer/Volunteer";
import Donate from "../../pages/Donate/Donate";
import PetDetails from "../../pages/PetDetails/PetDetails";

export const router = createBrowserRouter([
    {
      path: HomeRoute,
      Component: Layout,
      children: [
        {
            index: true,
            Component: Home
        },
        {
            path: AdoptablePetsRoute,
            Component: AdoptablePets
        },
        {
            path: AdoptablePetsIdRoute(":id"),
            Component: PetDetails
        },
        {
            path: FosterRoute,
            Component: Foster
        },
        {
            path: VolunteerRoute,
            Component: Volunteer
        },
        {
            path: DonateRoute,
            Component: Donate
        },
      ]
    },
  ]);