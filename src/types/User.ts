export interface User {
    userId: string
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    addresses: Address[]
}

export interface Address {
    type: string,
    unitNumber: string,
    street: string,
    city: string,
    state: string,
    country: string
}