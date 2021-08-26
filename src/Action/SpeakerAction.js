export const ADD_SPEAKER= "ADD_SPEAKER"

export const PhoneAction =(speaker) =>{
    return {
        type: ADD_SPEAKER,
        payload:speaker
    }
}