import axios from "axios";
import { PetfinderResponse } from "../../models/DTOs/PetfinderResponse";
import { AdoptablePetsApiRoute } from "./AdoptablePetsRoutes";

export class AdoptablePetsService {
    public static GetAdoptablePets() {
        return axios.get<PetfinderResponse>(import.meta.env.VITE_PAWS_API_END_POINT + AdoptablePetsApiRoute);
    }
}