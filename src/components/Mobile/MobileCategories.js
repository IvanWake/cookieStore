import React, { Fragment } from "react";
import { category } from "../../store/styles";
import { useProducts } from "../../store/products-store";
import MobileCategory from "./MobileCategory";

const MobileCategories = () => {
  const categoryState = useProducts((state) => state.changeCategory);
  const selectedCategory = useProducts((state) => state.selectedCategory);

  const categories = [
    {
      id: 'c1',
      name: 'All'
    },
    {
      id: 'c2',
      name: 'Bakery'
    },
    {
      id: 'c3',
      name: 'Cookies'
    },
    {
      id: 'c4',
      name: 'Icecream'
    },
    {
      id: 'c5',
      name: 'Doughnuts'
    },
  ];

  const returnCategoryNameHandler = (categoryName) => { categoryState(categoryName) };

  return (
      <div className="py-4 px-2 mt-[4rem]">
        <div className="font-extrabold text-[2.5rem]">{selectedCategory}</div>
        <div className={category.categoryDiv}>
          {
            categories.map((category) => (
                <MobileCategory
                    key={category.id}
                    name={category.name}
                    onChangeCategory={returnCategoryNameHandler}
                    selectedCategory={selectedCategory}
                />
            ))
          }
        </div>
      </div>
  );
}

export default MobileCategories;