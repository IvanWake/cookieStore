import React, { Fragment, useState } from "react";
import { category } from "../../store/styles";
import Category from "./Category";

const Categories = () => {

    const [categoryName, setCategoryName] = useState('All');

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

    const returnCategoryNameHandler = (categoryName) => { setCategoryName(categoryName) }

    return (
        <Fragment>
            <div className={category.categoryName}>{categoryName}</div>
            <div className={category.categoryDiv}>
                {
                    categories.map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            onChangeCategory={returnCategoryNameHandler}
                            selectedCategory={categoryName}
                        />
                    ))
                }
            </div>
        </Fragment>
    );
}

export default Categories;