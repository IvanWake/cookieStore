export const setProducts = (productsList, addingItem, id, productCounter) => {

    const existingProducts = productsList.findIndex(item => {
        return item.name === addingItem.name;
    })

    let existingProduct = productsList[existingProducts];
        let updatedProduct;

        if (existingProduct) {
            updatedProduct = {
                ...existingProduct,
                amount: existingProduct.amount + productCounter
            }
            localStorage.setItem(existingProduct.id, JSON.stringify(updatedProduct));
        } else {
            localStorage.setItem(id, JSON.stringify(addingItem));
        }

}