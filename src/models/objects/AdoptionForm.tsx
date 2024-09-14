export interface AdoptionForm {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip: string,
    currentPets: string,
    householdMembers: string,
    landlordInfo: string,
    reference1Name: string,
    reference1Phone: string,
    reference2Name: string,
    reference2Phone: string,
    reference3Name: string,
    reference3Phone: string,
    vetName: string,
    vetPhone: string
}

export var defaultAdoptionForm: AdoptionForm = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    currentPets: '',
    householdMembers: '',
    landlordInfo: '',
    reference1Name: '',
    reference1Phone: '',
    reference2Name: '',
    reference2Phone: '',
    reference3Name: '',
    reference3Phone: '',
    vetName: '',
    vetPhone: ''
}

export var defaultAdoptionFormValidity = {
    firstName: false,
    lastname: false,
    email: false,
    phoneNumber: false,
    address1: false,
    address2: false,
    city: false,
    state: false,
    zip: false,
    currentPets: false,
    householdMembers: false,
    landlordInfo: false,
    reference1Name: false,
    reference1Phone: false,
    reference2Name: false,
    reference2Phone: false,
    reference3Name: false,
    reference3Phone: false,
    vetName: false,
    vetPhone: false
}

export const AdoptionFormFieldNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    zip: 'zip',
    currentPets: 'currentPets',
    householdMembers: 'householdMembers',
    landlordInfo: 'landlordInfo',
    reference1Name: 'reference1Name',
    reference1Phone: 'reference1Phone',
    reference2Name: 'reference2Name',
    reference2Phone: 'reference2Phone',
    reference3Name: 'reference3Name',
    reference3Phone: 'reference3Phone',
    vetName: 'vetName',
    vetPhone: 'vetPhone'
}