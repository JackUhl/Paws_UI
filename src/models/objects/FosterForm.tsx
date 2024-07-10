// The foster form itself
export interface FosterForm{
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    whyDoYouWantTo: string,
    whatPetsYouHave: string,
    reference1Name:string,
    reference1Phone:string
    reference2Name:string,
    reference2Phone:string
}

//Default forms
export var defaultFosterForm:FosterForm = {
    firstName:'',
    lastName: '',
    phoneNumber: '',
    email: '',
    whyDoYouWantTo:'',
    whatPetsYouHave:'',
    reference1Name:'',
    reference1Phone:'', 
    reference2Name:'',
    reference2Phone:''
}

export var defaultFosterFormValidity = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    whyDoYouWantTo: true,
    whatPetsYouHave: false,
    reference1Name:false,
    reference1Phone:false,
    reference2Name:false,
    reference2Phone:false
}

//Names of the fields for use in generic sets
export const FosterFormFieldNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    whyDoYouWantTo: 'whyDoYouWantTo',
    whatPetsYouHave: 'whatPetsYouHave',
    reference1Name: 'reference1Name',
    reference1Phone: 'reference1Phone',
    reference2Name: 'reference2Name',
    reference2Phone: 'reference2Phone'
}