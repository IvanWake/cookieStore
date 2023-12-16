import { products } from "../../store/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import product from "../../assets/american.png";

const Product = (props) => {
    return (
        <div className={products.product}>
            <div className={products.productCol}>
                <img src={product} alt="productImage" className="product-image" />
                    <div className={products.productCount}>
                        <button className={products.editCount}><FontAwesomeIcon icon={faMinus}/></button>
                        <div className="counter">1</div>
                        <button className={products.editCount}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
            </div>
            <div className={products.productCol}>
                <div className={products.productDesc}>
                    <div className={products.productDescHeader}>
                        <div className={products.productName}>{props.name}</div>
                        <div className={products.productPrice}>$ {props.price}</div>
                    </div>
                    <div className={products.productDescText}>
                        {props.description}
                    </div>
                </div>

                <button className={products.productBtn}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Product;