import { RequestLoadingStatus } from "../../models/constants/FormLoadingEnum";

export interface ISubmitButtonComponent {
    validateAndSendInfo: () => void;
    loadingStatus: RequestLoadingStatus;
    submitButtonText: string,
    successText: string,
    failedText: string
}