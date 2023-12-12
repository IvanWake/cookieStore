export const header = {
    header: 'z-150 flex fixed top-0 left-0 right-0 bg-[#ffcca7]',
    headerContainer: 'flex items-center justify-between mx-auto p-4 w-full max-w-[1400px]',
    headerDiv: 'flex items-center gap-4 max-h-[32px] ',
    hr: 'w-px h-[20px] bg-[#ff9f5a]',
    search: 'flex items-center relative py-2 px-4 pl-8 rounded-[0.6rem] bg-white',
    searchI: 'text-black/40 absolute left-2',
    searchInput: 'text-sm bg-none border-none focus:outline-none',
    button: 'flex items-center gap-2 py-2 px-4 rounded-[0.6rem] bg-[#ff9f5a] max-h-[32px] text-white border-none transition ease-in duration-150 active:scale-95 hover:bg-[#ff9f5a80]',
    profile: 'relative flex items-center gap-4',
    profileImage: 'cursor-pointer rounded-full'
};

export const profile = {
    profileWrapper: 'z-100 absolute top-12 right-0 h-auto w-auto min-w-[300px] bg-[#ffcca7] shadow-md rounded-b-[0.8rem] pb-4',
    profileInfo: 'flex items-center rounded-md gap-2 p-4 m-2 bg-black/10 hover:bg-black/15',
    profileImage: 'cursor-pointer rounded-full',
    info: 'flex flex-col',
    email: 'text-black/70',
    link: 'flex justify-start items-center gap-4 p-2 px-4 m-0 transition-all duration-300 ease-in-out hover:bg-black/10',
    i: 'w-4 text-black/60'
};

// Page Not Found
export const notFound = {
    div: 'flex flex-col justify-center items-center absolute inset-x-0 inset-y-0 gap-0',
    h1: 'font-medium text-[6em]'
};

export const main = {
    main: 'flex relative mx-auto my-0 max-w-[1400px] p-4 pt-[5rem]',
};

export const products = {
    productList: 'flex flex-wrap gap-4 mt-4',
    product: 'flex gap-6 bg-[#fff] p-6 rounded-[0.8rem]',
    productCol: 'flex flex-col justify-between gap-4',
    productDesc: 'flex flex-col gap-4',
    productDescHeader: 'flex justify-between',
    productName: 'font-semibold',
    productPrice: 'font-semibold text-[#D99C70]',
    productDescText: 'text-black/80 overflow-hidden max-w-[200px] break-words line-clamp-[2]',
    productBtn: 'rounded-[0.4rem] p-2 border-solid border-2 border-[#E6D9C9] bg-none text-[#D99C70] font-medium',
    productCount: 'flex items-center justify-around gap-2 rounded-[0.4rem] p-2 bg-[#f6f6f6]',
    editCount: 'flex justify-center items-center w-4 h-4 rounded-1/2 transition-all duration-300 ease-in-out',
};

export const category = {
    categoryName: 'font-extrabold text-[2.5rem]',
    categoryDiv: 'flex sticky top-[4rem] items-center gap-4 bg-[#FFE4D0] pt-4 pb-2 cursor-pointer',
    category: 'flex justify-center items-center w-[8.25rem] h-8 rounded-[0.8rem] border-2 border-black transition-all duration-300 ease-in-out font-bold hover:text-black hover:bg-white hover:border-white hover:border-2 active:scale-95',
    categorySelected: 'text-black bg-white border-2 border-white'
}
