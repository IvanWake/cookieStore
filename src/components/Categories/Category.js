import { category } from "../../store/styles";

const Category = (props) => {

    const onChangeCategoryHandler = () => { props.onChangeCategory(props.name) }

    let styles = category.category;
    if (props.name === props.selectedCategory) styles += category.categorySelected;

    return (
        <div key={props?.key} className={styles} onClick={onChangeCategoryHandler}>{props?.name}</div>
    )
}

export default Category;