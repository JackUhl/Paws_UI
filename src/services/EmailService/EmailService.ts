import axios from "axios";
import { VolunteerApplicationRequest } from "../../models/DTOs/VolunteerApplicationRequest";
import { AdoptionApplicationApiRoute, FosterApplicationApiRoute, VolunteerApplicationApiRoute } from "./EmailRoutes";
import { FosterApplicationRequest } from "../../models/DTOs/FosterApplicationRequest";
import { AdoptionApplicationRequest } from "../../models/DTOs/AdoptionApplicationRequest";

export class EmailService {
    public static PostFosterApplication(fosterApplicationRequest: FosterApplicationRequest) {       
        return axios.post<FosterApplicationRequest>(
            import.meta.env.VITE_PAWS_API_END_POINT + FosterApplicationApiRoute,
            fosterApplicationRequest,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
    }

    public static PostVolunteerApplication(volunteerApplicationRequest: VolunteerApplicationRequest) {
        return axios.post<VolunteerApplicationRequest>(
            import.meta.env.VITE_PAWS_API_END_POINT + VolunteerApplicationApiRoute,
            volunteerApplicationRequest,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
    }

    public static PostAdoptionApplication(adoptionApplicationRequest: AdoptionApplicationRequest) {
        return axios.post<AdoptionApplicationRequest>(
            import.meta.env.VITE_PAWS_API_END_POINT + AdoptionApplicationApiRoute,
            adoptionApplicationRequest,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
    }
}