// The foster form itself
export interface FosterForm{
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    whyDoYouWantTo: string,
    whatPetsYouHave: string,
    reference1:Reference,
    reference2:Reference
}

export interface Reference{
    name: string,
    phoneNumber: string
}

//Default forms
export var defaultFosterForm:FosterForm = {
    firstName:'',
    lastName: '',
    phoneNumber: '',
    email: '',
    whyDoYouWantTo:'',
    whatPetsYouHave:'',
    reference1: {
        name:'',
        phoneNumber:''
    },
    reference2:{
        name:'',
        phoneNumber:''
    }
}

export var defaultFosterFormValidity = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    whyDoYouWantTo: true,
    whatPetsYouHave: false,
    reference1: {
        name: false,
        phoneNumber: false
    },
    reference2:{
        name: false,
        phoneNumber: false
    }
}

//Names of the fields for use in generic sets
export const FosterFormFieldNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    whyDoYouWantTo: 'whyDoYouWantTo',
    whatPetsYouHave: 'whatPetsYouHave',

    reference1: {
        name: 'reference1.name',
        phoneNumber: 'reference1.phoneNumber'
    },
    reference2: {
        name: 'reference2.name',
        phoneNumber: 'reference2.phoneNumber'
    }
}