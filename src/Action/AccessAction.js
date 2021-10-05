export const ADD_ACCESS = "ADD_ACCESS"
export const ADD_USER ="ADD_USER"

export const PhoneAction =( accessories) =>{
    return {
        type: ADD_ACCESS,
        payload:accessories
    }
}
export const AddAction =( user) =>{
    return {
        type:ADD_USER ,
        payload:user
    }
}