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