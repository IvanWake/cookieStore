import preloader from '../../assets/tail-spin.svg';

const Preloader = (props) => {
    return (
        <img src={preloader} width={props.width} />
    );
}

export default Preloader;