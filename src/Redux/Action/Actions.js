import { ActionContent } from "../Container/ActionContent";
export const setProduct = (products) =>  {
    return{
        type: ActionContent.SET_PRODUCT,
        payload:products
    };
}

export const selectedProducts = (product) => {
    return{
        type:ActionContent.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProducts = () => {
    return{
        type:ActionContent.REMOVE_PRODUCT,
    }
}