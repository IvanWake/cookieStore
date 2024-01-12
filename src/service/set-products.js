export const setProducts = (productsList, addingItem, id, productCounter) => {

    const existingProducts = productsList.findIndex(item => {
        return item.name === addingItem.name;
    })

    let existingProduct = productsList[existingProducts];
        let updatedProduct;
        let updetedProductObj;
        let amount, price;

        if (existingProduct) {
            updatedProduct = {
                ...existingProduct,
                amount: existingProduct.amount + productCounter,
            }

            amount = updatedProduct.amount;
            price = updatedProduct.price;

            updetedProductObj = {
                ...updatedProduct,
                total: amount * price,
            }
            
            localStorage.setItem(existingProduct.id, JSON.stringify(updetedProductObj));
        } else {
            localStorage.setItem(id, JSON.stringify(addingItem));
        }

}