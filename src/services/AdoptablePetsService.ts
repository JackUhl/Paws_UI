import axios from "axios";
import { PetfinderResponse } from "../models/DTOs/PetfinderResponse";

export class AdoptablePetsService {
    public static GetAdoptablePets() {
        return axios.get<PetfinderResponse>("https://localhost:44387/AdoptablePets");
    }
}