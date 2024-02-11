import {useState} from "react";
import {useProducts} from "../../store/products-store";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {header} from '../../store/styles.js';

const Search = () => {
    const [searchProducts, setSearchProducts] = useState();

    const products = useProducts(state => state.products);
    const setProductsList = useProducts(state => state.setProducts);

    const productsList = useProducts(state => state.productsList);


    const setSearchProductsHandler = (e) => {
        let searched;
        if (e.target.value !== '') {
            searched = products?.filter((product) =>
                product.name?.toLowerCase().replace(/\s+/g, "")
                    .includes(e.target.value.toLowerCase().replace(/\s+/g, ""))
            );
            setProductsList(searchProducts);
        } else {
            setProductsList(productsList);
        }
        setSearchProducts(searched);
    }

    return (
        <div className={header.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={header.searchI}/>
            <input
                type="text"
                placeholder="Search..."
                className={header.searchInput}
                onChange={setSearchProductsHandler}
            />
        </div>
    );
}

export default Search;