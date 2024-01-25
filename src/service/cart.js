
export const fetchLocalProducts = () => {
    const storageLength = localStorage.length;
    let productsCart = [];
    for (let i = 0; i < storageLength; i++) {
        productsCart.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    let filteredProducts = Object.values(productsCart).filter(product => product.hasOwnProperty('chlien'));

    return {
        filteredProducts,
    }
}

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

// export const setProductsDB = () => {
//     const db = getDatabase();
//     set(ref(db, 'carts/' + userId), {
//         product: productName,
//         img: img,
//         price: price,
//         amount: amount,
//         total: price * amount,
//         desc: desc
//     });
// }