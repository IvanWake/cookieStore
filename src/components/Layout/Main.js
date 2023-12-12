import { main } from '../../store/styles';
const Main = (props) => {
    return (
        <main className={main.main}>
            <div>
                {props.children}
            </div>
        </main>
    );
}

export default Main;