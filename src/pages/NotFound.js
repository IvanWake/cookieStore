import { notFound } from "../store/styles.js";
import error from "../assets/404.png";

const NotFound = () => {
    return (
        <div className={notFound.div}>
            <img src={error} alt="404" width="400px" />
            <h1 className={notFound.h1}>Oops! Page not found</h1>
        </div>
    );
}

export default NotFound;