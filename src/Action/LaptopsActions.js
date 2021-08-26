export const ADD_LAPTOPS = "ADD_LAPTOPS"

export const LaptopsAction =(laptops) =>{
    return {
        type: ADD_LAPTOPS,
        payload:laptops
    }
}