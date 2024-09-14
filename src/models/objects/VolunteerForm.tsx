export interface VolunteerForm{
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    canHelpTransport: boolean,
    canHelpEventSetup: boolean,
    canHelpFundraising: boolean,
    canHelpPhotography: boolean,
    canHelpGrooming: boolean,
    canHelpTraining: boolean
}

export var defaultVolunteerForm: VolunteerForm = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    canHelpTransport: false,
    canHelpEventSetup: false,
    canHelpFundraising: false,
    canHelpPhotography: false,
    canHelpGrooming: false,
    canHelpTraining: false 
}

export var defaultVolunteerFormValidity = {
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    canHelpValidity: false,
}

export const VolunteerFormFieldNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    canHelpTransport: 'canHelpTransport',
    canHelpEventSetup: 'canHelpEventSetup',
    canHelpFundraising: 'canHelpFundraising',
    canHelpPhotography: 'canHelpPhotography',
    canHelpGrooming: 'canHelpGrooming',
    canHelpTraining: 'canHelpTraining' 
}