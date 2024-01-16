export const sortByPrice = (productsList, sortMethod) => {
    let sortedItems;

    if (sortMethod === 1) { 
        sortedItems = productsList?.sort((a, b) => a.price - b.price);
    } else if (sortMethod === 2) {
        sortedItems = productsList?.sort((a, b) => b.price - a.price);
    } else {
        sortedItems = productsList;
    }

    return {
        sortedItems,
    }

}