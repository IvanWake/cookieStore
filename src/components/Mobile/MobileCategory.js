import { category } from "../../store/styles";

const MobileCategory = (props) => {

  const onChangeCategoryHandler = () => { props.onChangeCategory(props.name) }

  let styles = "flex text-[0.8em] px-2 justify-center items-center w-[8.9rem]  h-8 cursor-pointer rounded-[0.8rem] border-2 border-black transition-all duration-300 ease-in-out font-bold hover:text-black hover:bg-white hover:border-white hover:border-2 active:scale-95";
  if (props.name === props.selectedCategory) styles += category.categorySelected;

  return (
      <div key={props?.key} className={styles} onClick={onChangeCategoryHandler}>{props?.name}</div>
  )
}

export default MobileCategory;