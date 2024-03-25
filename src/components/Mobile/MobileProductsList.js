import { useEffect } from "react";
import { useProducts } from "../../store/products-store";
import { sortByPrice } from "../../service/products";
import { database } from "../../firebase";
import { AnimatePresence } from "framer-motion";
import { ref, onValue } from "firebase/database";
import { products } from "../../store/styles";
import MobileProduct from "./MobileProduct";
import Preloader from "../Layout/Preloader";
import { useState } from "react";

const MobileProductList = () => {
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const { selectedCategory, sortMethod } = useProducts();
  const { setProducts, setProductsList } = useProducts();
  const productsList = useProducts(state => state.products);
  const urlProducts = "https://img.cookiestore.ru/";

  const fetchProducts = () => {
    setIsProductsLoading(true);
    const productsResponse = ref(database, 'products');

    onValue(productsResponse, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
      setProductsList(data);
      setIsProductsLoading(false);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  let productsListFiltered = productsList?.filter((product) =>
      product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  // Get All products, if All categories selected
  if (selectedCategory === 'All') productsListFiltered = productsList;

  // Sorting price by Ascending and Descending
  productsListFiltered = sortByPrice(productsListFiltered, sortMethod).sortedItems;

  let content;

  if (isProductsLoading) {
    content = <div className="flex items-center justify-center flex-center"><Preloader width={'100px'} /></div>
  } else {
    content = productsListFiltered?.map(product => (
        <MobileProduct
            key={'pId ' + Math.random()}
            id={'pId ' + Math.random()}
            image={urlProducts + product.category + '/' + product.image + '.png'}
            name={product.name}
            price={product.price}
            description={product.description}
        />
    ))
  }

  return (
      <div className={products.productList + " justify-center pb-[4rem]"}>
        <AnimatePresence>
          {content}
        </AnimatePresence>
      </div>
  );
}

export default MobileProductList;