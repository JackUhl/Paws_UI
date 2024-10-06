export interface VolunteerApplicationRequest {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    volunteerOptions: volunteerOptions
}

export interface volunteerOptions {
    transport: boolean,
    eventSetUp: boolean,
    fundraising: boolean,
    photography: boolean,
    grooming: boolean,
    training: boolean
}