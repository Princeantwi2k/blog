

export const ADD_TOPSELL = "ADD_TOPSELL"

export const Action =(product) =>{
    return {
        type: ADD_TOPSELL,
        payload:product
    }
}

export const ADD_USER = "ADD_USER"

export const Adduser =(user) =>{
    return {
        type: ADD_USER,
        payload:user
    }
}
