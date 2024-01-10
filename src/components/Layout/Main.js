import { main } from '../../store/styles';

const Main = (props) => {
    return (
        <main className={main.main}>
            {props.children}
        </main>
    );
}

export default Main;