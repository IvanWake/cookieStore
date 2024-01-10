import { main } from "../../store/styles";

const MainWrapper = (props) => {
    return <div className={main.div}>{props.children}</div>;
}

export default MainWrapper;