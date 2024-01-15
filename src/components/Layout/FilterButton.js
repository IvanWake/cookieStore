import { useState } from "react";
import { header } from '../../store/styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useProducts } from '../../store/products-store.js';

const FilterButton = () => {
    // Update ProductsList
    const updatingProductsList = useProducts(state => state.products);
    const setProducts = useProducts(state => state.setProducts);
    // Get and Set Sorted Products
    const sortMethod = useProducts(state => state.sortMethod);
    const setSortMethod = useProducts(state => state.setSortMethod);

    const [sortIcon, setSortIcon] = useState(faSliders);

    const sortByPrice = () => {
        const sortedList = [...updatingProductsList];
        if (sortMethod === 0) { 
            setProducts(sortedList);
            sortedList.sort((a, b) => a.price - b.price);
            setSortMethod(1);
            setSortIcon(faChevronUp);
        } else if (sortMethod === 1) {
            sortedList.sort((a, b) => b.price - a.price);
            setProducts(sortedList);
            setSortMethod(0);
            setSortIcon(faChevronDown);
        }
    }

    return (
        <button
            className={header.button}
            onClick={sortByPrice}
        >
            <FontAwesomeIcon icon={sortIcon} />
            Sort
        </button>
    );
}

export default FilterButton;