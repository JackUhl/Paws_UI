import { CircleSpinner } from "react-spinners-kit";
import { RequestLoadingStatus } from "../../models/constants/FormLoadingEnum";
import { ISubmitButtonComponent } from "./ISubmitButtonComponent";
import checkMarkIcon from "../../assets/checkMarkIcon.svg"

export default function SubmitButtonComponent(props: ISubmitButtonComponent) {
    return (
        <div className="flexColumn">
            {(props.loadingStatus == RequestLoadingStatus.notRequested || props.loadingStatus == RequestLoadingStatus.failed) && 
                <div className='centerJustifySelf'>
                    <button className='submitButton' onClick={props.validateAndSendInfo}>Submit</button>
                </div>
            }
            {props.loadingStatus == RequestLoadingStatus.loading && <CircleSpinner color="#483174"/>}
            {props.loadingStatus == RequestLoadingStatus.success && 
                <div className="flexRow alignCenter columnGap">
                    <img src={checkMarkIcon} className="icon"/>
                    <p>{props.successText}</p>
                </div>
            }
            {props.loadingStatus == RequestLoadingStatus.failed && 
                <p className="colorRed">{props.failedText}</p>
            }
        </div>
    )
}