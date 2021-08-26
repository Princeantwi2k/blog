export const ADD_BRAND = "ADD_BRAND"

export const BrandAction =(brand) =>{
    return {
        type: ADD_BRAND,
        payload:brand
    }
}