import { useState } from "react";
import { useProducts } from '../../store/products-store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { header } from '../../store/styles.js';

const MobileFilterButton = () => {
  // Update ProductsList
  const updatingProductsList = useProducts(state => state.products);

  // Get and Set Sorted Products
  const sortMethod = useProducts(state => state.sortMethod);
  const setSortMethod = useProducts(state => state.setSortMethod);

  const [sortIcon, setSortIcon] = useState(faSliders);

  const sortByPrice = () => {
    if (sortMethod === 0) {
      setSortMethod(1);
      setSortIcon(faChevronUp);
    } else if (sortMethod === 1) {
      setSortMethod(2);
      setSortIcon(faChevronDown);
    } else {
      setSortMethod(1);
      setSortIcon(faChevronUp);
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

export default MobileFilterButton;