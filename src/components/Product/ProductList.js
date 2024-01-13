import React from "react";
import { products } from "../../store/styles";
import { useProducts } from "../../store/products-store";
import Product from "./Product";

const ProductList = () => {
    const category = useProducts(state => state.selectedCategory);

    const productsList = [
        // Cookies
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
            category: 'Cookies',
            image: 'cookie',
            name: 'American Cookie',
            price: '1.00',
            description: 'A perfect blend of chewy and crispy textures with rich, buttery goodness in every bite.'
        },
        {
            category: 'Cookies',
            image: 'macaroon',
            name: 'Macaroon',
            price: '2.00',
            description: 'Indulge in the divine fusion of flavors with our Strawberry Macaroon. Crisp macaroon shells embrace a luscious strawberry filling, creating a delightful treat for your senses.'
        },

        // Bakery
        {
            category: 'Bakery',
            image: 'pon_de_ring',
            name: 'Pon de Ring Pistachio',
            price: '2.00',
            description: 'Experience the unique Pon de Ring Donut with a pistachio twist, featuring a delightful pistachio glaze for a nutty and sweet sensation.'
        },
        {
            category: 'Bakery',
            image: 'cupcake',
            name: 'Cupcake',
            price: '1.00',
            description: 'A chocolatey masterpiece crowned with velvety Oreo frosting. A symphony of flavors, each bite offers rich cocoa bliss and creamy indulgence.'
        },
        {
            category: 'Bakery',
            image: 'croissant',
            name: 'Сroissant',
            price: '1.15',
            description: 'Layers of buttery, flaky perfection. Whether enjoyed plain or with your favorite filling, each bite promises an exquisite taste experience.'
        },
        {
            category: 'Bakery',
            image: 'pancake',
            name: 'Pancake',
            price: '2.00',
            description: 'Delight in the comfort of our fluffy Pancakes. Light, airy, and golden brown, these breakfast classics are perfect with your favorite toppings for a scrumptious morning treat.'
        },
        {
            category: 'Bakery',
            image: 'cheesecake',
            name: 'Cheesecake',
            price: '1.50',
            description: 'Indulge in the exquisite fusion of flavors with our Cheesecake Marshmallow. Creamy cheesecake meets fluffy marshmallow, creating a heavenly delight that melts in your mouth.'
        },
        {
            category: 'Bakery',
            image: 'pie',
            name: 'Cherry Pie',
            price: '3.00',
            description: 'Savor the nostalgia with our Cherry Pie. A flaky, golden crust cradles a sweet and tangy cherry filling, creating a timeless treat for any occasion.'
        },

        // Icecream
        {
            category: 'Icecream',
            image: 'vanilla',
            name: 'Vanilla Icecream',
            price: '2.89',
            description: 'Smooth vanilla ice cream: the perfect blend of creamy texture and distinct flavor for true connoisseurs of sweet indulgence.'
        },
        {
            category: 'Icecream',
            image: 'pistachio',
            name: 'Pistachio Icecream',
            price: '3.00',
            description: 'Indulge in the rich and nutty delight of our Pistachio Ice Cream. Creamy, velvety, and packed with exquisite pistachio flavor. A true treat for your taste buds.'
        },
        {
            category: 'Icecream',
            image: 'nuts',
            name: 'Nuts Icecream',
            price: '3.15',
            description: 'Savor the crunch with our Nuts Ice Cream. A symphony of assorted nuts folded into creamy perfection, delivering a delightful blend of textures and flavors.'
        },
        {
            category: 'Icecream',
            image: 'choco',
            name: 'Chocolate Icecream',
            price: '3.00',
            description: 'Experience pure bliss with our Chocolate Ice Cream. Velvety, rich cocoa flavor enveloped in a creamy texture, creating a decadent treat for chocolate enthusiasts.'
        },
        {
            category: 'Icecream',
            image: 'raspberry',
            name: 'Raspberry Icecream',
            price: '3.25',
            description: 'Delight in the refreshing sweetness of our Raspberry Ice Cream. A luscious blend of ripe raspberries, creating a fruity symphony in every creamy spoonful.'
        },
        {
            category: 'Icecream',
            image: 'strawberry',
            name: 'Strawberry Icecream',
            price: '3.25',
            description: 'Treat yourself to the lusciousness of our Strawberry Ice Cream. Bursting with the natural sweetness of ripe strawberries, a delightful symphony of flavor in every scoop.'
        },

        // Doughnuts 
        {
            category: 'Doughnuts',
            image: 'banana',
            name: 'Banana Doughnut',
            price: '2.25',
            description: 'Savor the delightful fusion of flavors with our Banana Doughnut. Soft, moist dough infused with the sweet essence of ripe bananas, creating a delicious tropical indulgence.'
        },
        {
            category: 'Doughnuts',
            image: 'mint',
            name: 'Mint Doughnut',
            price: '2.99',
            description: 'Indulge in a refreshing treat with our Mint Doughnut. Soft and airy, it combines the cool essence of mint with a sweet glaze for a delightful and uplifting flavor experience.'
        },
        {
            category: 'Doughnuts',
            image: 'pineapple',
            name: 'Pineapple Doughnut',
            price: '2.99',
            description: 'Embark on a tropical journey with our Pineapple Doughnut. Soft, fluffy dough infused with pineapple essence, topped with a tangy glaze for a refreshing and delightful treat.'
        },
        {
            category: 'Doughnuts',
            image: 'oreo',
            name: 'Oreo Doughnut',
            price: '2.00',
            description: 'Experience the perfect harmony of flavors with our Oreo Doughnut. A heavenly blend of soft doughnut, creamy filling, and crushed Oreo topping for an irresistible treat.'
        },
        {
            category: 'Doughnuts',
            image: 'strawberry',
            name: 'Strawberry Doughnut',
            price: '3.50',
            description: 'Delight in the sweetness of our Strawberry Doughnut. Soft and fluffy, this treat is topped with a luscious strawberry glaze for a burst of fruity goodness in every bite.'
        },
        {
            category: 'Doughnuts',
            image: 'chocolate',
            name: 'Chocolate Doughnut',
            price: '2.00',
            description: 'Enjoy the decadence of our Chocolate Doughnut. A delightful ring of fluffy perfection, generously coated in rich chocolate glaze for an irresistibly sweet experience.'
        },
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
                        image={'https://img.cookiestore.ru/' + product.category + '/' + product.image + '.png'}
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