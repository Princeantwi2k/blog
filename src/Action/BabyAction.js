export const ADD_BABY = "ADD_BABY"

export const PhoneAction =(baby) =>{
    return {
        type: ADD_BABY,
        payload:baby
    }
}