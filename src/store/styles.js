export const header = {
    header: 'z-50 flex fixed top-0 left-0 right-0 bg-[#ffcca7] shadow-[0px_8px_16px_-8px_#00000020]', //
    headerContainer: 'flex items-center justify-between mx-auto p-4 w-full max-w-[1400px]',
    headerDiv: 'flex items-center gap-4 max-h-[32px] ',
    hr: 'w-px h-[20px] bg-[#ff9f5a]',
    search: 'flex items-center relative py-2 px-4 pl-8 rounded-[0.6rem] bg-white max-h-[32px]',
    searchI: 'text-black/40 absolute left-2',
    searchInput: 'text-sm bg-none border-none focus:outline-none',
    button: 'flex relative items-center gap-2 py-2 px-4 rounded-[0.6rem] bg-[#ff9f5a] max-h-[32px] text-white border-none transition ease-in duration-150 active:scale-95 hover:bg-[#ff9f5a80]',
    profile: 'relative flex items-center gap-4',
    profileImage: 'cursor-pointer rounded-full',
    cartBadge: 'absolute top-[-12px] right-[-12px] py-[3px] px-[8px] bg-[#FF9F5A] rounded-full border-2 border-[#ffcca7] text-white text-xs',
};

export const auth = {
    buttonsWrapper: 'flex gap-4',
    logIn: 'flex items-center py-2 px-4 font-semibold max-h-[32px]',
    signUp: 'flex items-center py-2 px-4 rounded-[0.6rem] border-2 border-black font-semibold max-h-[32px]',
};

export const profile = {
    profileWrapper: 'z-50 absolute top-12 right-0 h-auto w-auto min-w-[300px] bg-[#ffcca7] shadow-md rounded-b-[0.8rem] pb-4',
    profileInfo: 'flex items-center rounded-md gap-2 p-4 m-2 bg-black/10 hover:bg-black/15',
    profileImage: 'cursor-pointer rounded-full',
    info: 'flex flex-col',
    email: 'text-black/70',
    link: 'flex justify-start items-center gap-4 p-2 px-4 m-0 transition-all duration-300 ease-in-out hover:bg-black/10 cursor-pointer',
    i: 'w-4 text-black/60'
};

// Page Not Found
export const notFound = {
    div: 'flex flex-col justify-center items-center absolute inset-x-0 inset-y-0 gap-0',
    h1: 'font-medium text-[6em]'
};

export const main = {
    main: 'z-10 flex relative justify-between mx-auto my-0 max-w-[1400px] p-4 mt-[4rem]',
    div: 'flex flex-col mr-4'
};

export const products = {
    productList: 'flex flex-wrap gap-4 mt-4',
    product: 'flex gap-6 bg-[#fff] p-6 rounded-[0.8rem] min-w-[380px] max-w-[380px] min-h-[210px] max-h-[210px]',
    productCol: 'flex flex-col justify-between gap-4',
    productDesc: 'flex flex-col gap-4',
    productDescHeader: 'flex justify-between',
    productName: 'font-semibold truncate max-w-[166px]',
    productPrice: 'font-semibold text-[#D99C70] pl-2',
    productDescText: 'text-black/80 overflow-hidden max-w-[215px] break-words line-clamp-[2]',
    productBtn: 'rounded-[0.4rem] p-2 border-solid border-2 border-[#E6D9C9] bg-none text-[#D99C70] font-medium hover:bg-[#FF9F5A] hover:text-white transition-all duration-300 ease-in-out',
    productAdded: 'rounded-[0.4rem] p-2 border-solid border-2 border-[#E6D9C9] bg-[#FF9F5A] text- font-medium text-white',
    productCount: 'flex items-center justify-around gap-2 rounded-[0.4rem] p-2 bg-[#f6f6f6]',
    productImage: '',
    editCount: 'flex justify-center items-center w-4 h-4 rounded-1/2 transition-all duration-300 ease-in-out',
};

export const category = {
    categoryName: 'font-extrabold text-[2.5rem]',
    categoryDiv: 'flex sticky top-[4rem] items-center gap-4 bg-[#e5e7eb] pt-4 pb-2 ',
    category: 'flex justify-center items-center w-[8.9rem] h-8 cursor-pointer rounded-[0.4rem] border-2 border-black transition-all duration-300 ease-in-out font-bold hover:text-black hover:bg-white hover:border-white hover:border-2 active:scale-95',
    categorySelected: 'text-black bg-white border-2 border-white'
};

export const cart = {
    wrapper: 'flex flex-col sticky top-[5rem] h-[85vh] min-w-[400px] bg-white rounded-[0.8rem] p-4',
    cart: 'h-full flex flex-col justify-between relative',
    header: 'text-[2.5rem] font-bold',
    method: 'flex gap-4 pt-2 pb-4 items-center shadow-[0px_8px_16px_-8px_#00000020]',
    button: 'w-[50%] p-2 border border-black rounded-[0.4rem] transition-all duration-300 ease-in-out hover:border-[#FF9F5A] hover:bg-[#FF9F5A] hover:text-white active:scale-95',
    productList: 'flex flex-col gap-4 min-h-[auto] h-full overflow-y-scroll cart-scroll',
    product: 'flex items-center justify-between p-4 rounded-[0.4rem] border border-black',
    productInfo: 'flex min-w-[100%] gap-4',
    description: 'flex flex-col w-[100%] justify-between',
    productHeader: 'flex justify-between items-center',
    name: 'font-bold flex max-w-[190px] truncate',
    counterWrapper: 'flex justify-between',
    price: 'flex items-center',
    productCount: 'flex items-center justify-around gap-2 rounded-[0.4rem] p-2 bg-[#efefef]',
    editCount: 'flex justify-center items-center w-4 h-4 rounded-1/2 transition-all duration-300 ease-in-out',
    footer: 'bg-white flex flex-col pt-4 gap-4 shadow-[0px_-8px_16px_-8px_#00000020]',
    total: 'flex justify-between font-semibold text-[1.2em]',
    footerButton: 'border-none px-4 py-4 text-[1.2em] font-medium text-white bg-[#FF9F5A] rounded-[0.4rem]',
    xMark: 'hover: cursor-pointer'
}