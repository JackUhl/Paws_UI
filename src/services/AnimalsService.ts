import axios from "axios";

export class AnimalsService {
    public static GetAnimalsInfo() {
        return axios.get("https://localhost:44387/Animals/AnimalsInfo");
    }
}