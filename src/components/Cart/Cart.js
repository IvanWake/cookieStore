import { cart } from "../../store/styles";
import Product from "./CartProduct";

const Cart = () => {

    const cartProducts = [
        {
            category: 'Cookies',
            name: 'Liege Waffle',
            price: '1.00',
            description: 'Delicate, crispy waffle crafted using the traditional Belgian recipe, adorned with sugar crystals.'
        },
        {
            category: 'Cookies',
            name: 'Chocolate Liege Waffle',
            price: '1.25',
            description: 'Indulge in the rich goodness of a chocolate-infused Liege waffle, a delightful treat with a crispy exterior and a sumptuous Belgian touch.'
        },
        {
            category: 'Cookies',
            name: 'Raspberry Liege Waffle',
            price: '1.50',
            description: 'A Liege waffle covered in luscious raspberry glaze and topped with dried raspberries for an exquisite fruity delight.'
        },
        {
            category: 'Cookies',
            name: 'Pistachio Liege Waffle',
            price: '1.55',
            description: 'Savor the indulgence of a Liege waffle adorned with pistachio glaze and sprinkled with chocolate flakes for a delightful fusion of flavors.'
        },
        {
            category: 'Bakery',
            name: 'Pon de Ring Pistachio',
            price: '2.00',
            description: 'Experience the unique Pon de Ring Donut with a pistachio twist, featuring a delightful pistachio glaze for a nutty and sweet sensation.'
        },

    ];

    return (
        <div className={cart.wrapper}>
            <div className={cart.cart}>
                <div className={cart.header}>Cart</div>
                <div className={cart.method}>
                    <button className={cart.button}>Delivery</button>
                    <button className={cart.button}>Take away</button>
                </div>
                <div className={cart.productList}>
                    {
                        cartProducts.map(product => (
                            <Product
                                key={'cpId ' + Math.random()}
                                id={'cpId ' + Math.random()}
                                name={product.name}
                                price={product.price}
                            />
                        ))
                    }
                </div>
                <div className={cart.footer}>
                    <div className={cart.total}>
                        <p>Total</p>
                        <p>$ 2.00</p>
                    </div>
                    <button className={cart.footerButton}>Place order</button>
                </div>
            </div>
        </div>

    );
}

export default Cart;