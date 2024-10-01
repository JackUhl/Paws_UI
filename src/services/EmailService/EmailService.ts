import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { VolunteerApplicationRequest } from "../../models/DTOs/VolunteerApplicationRequest";
import { FosterApplicationApiRoute, VolunteerApplicationApiRoute } from "./EmailRoutes";
import { FosterApplicationRequest } from "../../models/DTOs/FosterApplicationRequest";

export class EmailService {
    public static PostFosterApplication(fosterApplicationRequest: FosterApplicationRequest) {
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            }
        }
        
        return axios.post<FosterApplicationRequest>(
            import.meta.env.VITE_PAWS_API_END_POINT + FosterApplicationApiRoute,
            fosterApplicationRequest,
            config
        );
    }

    public static PostVolunteerApplication(volunteerApplicationRequest: VolunteerApplicationRequest) {
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            }
        }
        
        return axios.post<VolunteerApplicationRequest>(
            import.meta.env.VITE_PAWS_API_END_POINT + VolunteerApplicationApiRoute,
            volunteerApplicationRequest,
            config
        );
    }
}