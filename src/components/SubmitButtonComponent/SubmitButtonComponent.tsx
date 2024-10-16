import { CircleSpinner } from "react-spinners-kit";
import { FormLoadingStatus } from "../../models/constants/FormLoadingEnum";
import { ISubmitButtonComponent } from "./ISubmitButtonComponent";
import checkMarkIcon from "../../assets/checkMarkIcon.svg"

export default function SubmitButtonComponent(props: ISubmitButtonComponent) {
    return (
        <div className="flexColumn">
            {(props.loadingStatus == FormLoadingStatus.notSubmitted || props.loadingStatus == FormLoadingStatus.failed) && 
                <div className='centerJustifySelf'>
                    <button className='submitButton' onClick={props.validateAndSendInfo}>Submit</button>
                </div>
            }
            {props.loadingStatus == FormLoadingStatus.loading && <CircleSpinner color="#483174"/>}
            {props.loadingStatus == FormLoadingStatus.success && 
                <div className="flexRow alignCenter columnGap">
                    <img src={checkMarkIcon} className="icon"/>
                    <p>{props.successText}</p>
                </div>
            }
            {props.loadingStatus == FormLoadingStatus.failed && 
                <p className="colorRed">{props.failedText}</p>
            }
        </div>
    )
}