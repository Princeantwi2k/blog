export const ADD_FASHION = "ADD_FASHION"

export const FashionAction =(fashions) =>{
    return {
        type: ADD_FASHION,
        payload:fashions
    }
}