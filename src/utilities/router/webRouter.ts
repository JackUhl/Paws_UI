import { createBrowserRouter } from "react-router-dom";
import { AdoptablePetsIdRoute, AdoptablePetsRoute, DonateRoute, FosterRoute, HomeRoute, NotFoundRoute, VolunteerRoute } from "../../models/constants/InternalUrlConstants";
import Layout from "../../pages/Layout/Layout";
import Home from "../../pages/Home/Home";
import AdoptablePets from "../../pages/AdoptablePets/AdoptablePets";
import Foster from "../../pages/Foster/Foster";
import Volunteer from "../../pages/Volunteer/Volunteer";
import Donate from "../../pages/Donate/Donate";
import NotFound from "../../pages/NotFound/NotFound";

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
            Component: AdoptablePets,
            children: [
                {
                    path: AdoptablePetsIdRoute(":id"),
                    Component: AdoptablePets
                }
            ]
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
        {
            path: NotFoundRoute,
            Component: NotFound
        }
      ]
    },
  ]);