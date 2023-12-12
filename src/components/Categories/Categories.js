import React, { Fragment } from "react";
import { category } from "../../store/styles";
import { useProducts } from "../../store/products-store";
import Category from "./Category";

const Categories = () => {
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
            name: 'Ice cream'
        },
        {
            id: 'c5',
            name: 'Sweets'
        },
    ];

    const returnCategoryNameHandler = (categoryName) => { categoryState(categoryName) };

    return (
        <Fragment>
            <div className={category.categoryName}>{selectedCategory}</div>
            <div className={category.categoryDiv}>
                {
                    categories.map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            onChangeCategory={returnCategoryNameHandler}
                            selectedCategory={selectedCategory}
                        />
                    ))
                }
            </div>
        </Fragment>
    );
}

export default Categories;