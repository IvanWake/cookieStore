import React from "react";
import { products } from "../../store/styles";
import { useProducts } from "../../store/products-store";
import Product from "./Product";

const ProductList = () => {
    const category = useProducts(state => state.selectedCategory);

    const productsList = [
        {
            category: 'Cookies',
            image: 'waffle',
            name: 'Liege Waffle',
            price: '1.00',
            description: 'Delicate, crispy waffle crafted using the traditional Belgian recipe, adorned with sugar crystals.'
        },
        {
            category: 'Cookies',
            image: 'waffle_choco',
            name: 'Chocolate Liege Waffle',
            price: '1.25',
            description: 'Indulge in the rich goodness of a chocolate-infused Liege waffle, a delightful treat with a crispy exterior and a sumptuous Belgian touch.'
        },
        {
            category: 'Cookies',
            image: 'waffle_pink',
            name: 'Raspberry Liege Waffle',
            price: '1.50',
            description: 'A Liege waffle covered in luscious raspberry glaze and topped with dried raspberries for an exquisite fruity delight.'
        },
        {
            category: 'Cookies',
            image: 'waffle_green',
            name: 'Pistachio Liege Waffle',
            price: '1.55',
            description: 'Savor the indulgence of a Liege waffle adorned with pistachio glaze and sprinkled with chocolate flakes for a delightful fusion of flavors.'
        },
        {
            category: 'Bakery',
            image: 'pon_de_ring',
            name: 'Pon de Ring Pistachio',
            price: '2.00',
            description: 'Experience the unique Pon de Ring Donut with a pistachio twist, featuring a delightful pistachio glaze for a nutty and sweet sensation.'
        },
        {
            category: 'Bakery',
            image: 'donut_pink',
            name: 'Raspberry Donut',
            price: '1.50',
            description: ''
        },
        {
            category: 'Bakery',
            image: 'pancake',
            name: 'Pancake',
            price: '1.00',
            description: ''
        },
        {
            category: 'Bakery',
            image: 'croissant',
            name: 'Сroissant',
            price: '1.45',
            description: ''
        }
    ];


    let productsListFiltered = productsList.filter((product) =>
        product.category === category);

    if (category === 'All') {
        productsListFiltered = productsList;
    }

    return (
        <div className={products.productList}>
            {
                productsListFiltered.map(product => (
                    <Product
                        key={'pId ' + Math.random()}
                        id={'pId ' + Math.random()}
                        image={'https://img.cookiestore.ru/' + product.image + '.png'}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))
            }

        </div>
    );
}

export default ProductList;