import { FormLoadingStatus } from "../../models/constants/FormLoadingEnum";

export interface ISubmitButtonComponent {
    validateAndSendInfo: () => void;
    loadingStatus: FormLoadingStatus;
    submitButtonText: string,
    successText: string,
    failedText: string
}