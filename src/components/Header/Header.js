const Header = () => {
    const classLink = "no-underline text-black";

    return (
        <header className="flex fixed top-0 left-0 right-0 bg-[#f7b76d] p-4 justify-between h-[70px]">
            <div className="flex items-center">
                <img src="./assets/logo.svg" width="30px" alt="C"/>
                <h1 className="text-3xl color-[#240b00]">ookieStore</h1>
            </div>

            <div className="flex items-center gap-4">
                <a className={classLink} href="#cart">Корзина</a>
                <a className={classLink} href="#catalog">Каталог</a>
                <a className={classLink} href="#signin">Войти</a>
            </div>
        </header>
    );
}

export default Header;