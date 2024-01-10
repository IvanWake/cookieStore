export const fetchLocalProducts = () => {
    const storageLength = localStorage.length;
    let productsCart = [];
    
    for (let i = 0; i < storageLength; i++) {
        productsCart.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    return {
        productsCart,
    }
}