import { fetchLocalProducts } from "./get-products";

export const getTotalAmount = () => {
    let totalAmount = 0;

    let productsList = fetchLocalProducts().filteredProducts;

    for (const key in productsList) {
        totalAmount += productsList[key].amount;
    }

    return {
        totalAmount,
    }
}