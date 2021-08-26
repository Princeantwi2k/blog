export const ADD_PRINTER = "ADD_PRINTER"

export const PhoneAction =(printers) =>{
    return {
        type: ADD_PRINTER,
        payload:printers
    }
}