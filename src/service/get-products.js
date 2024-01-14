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