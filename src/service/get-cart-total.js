import { fetchLocalProducts } from "./get-products";

export const getTotalPrice = () => {
    let totalPrice = 0;

    let productsList = fetchLocalProducts().filteredProducts;

    for (const key in productsList) {
        totalPrice += productsList[key].total;
    }

    return {
        totalPrice,
    }
}