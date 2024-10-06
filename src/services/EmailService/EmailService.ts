import axios from "axios";
import { VolunteerApplicationRequest } from "../../models/DTOs/VolunteerApplicationRequest";
import { FosterApplicationApiRoute, VolunteerApplicationApiRoute } from "./EmailRoutes";
import { FosterApplicationRequest } from "../../models/DTOs/FosterApplicationRequest";

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
}