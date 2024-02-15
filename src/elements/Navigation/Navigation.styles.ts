export const styles = {
    // todo: slate-800 should be a global variable from root background
    nav: `fixed h-12 md:h-20 z-50 left-0 top-0 flex w-full justify-between content-center bg-gradient-to-b from-slate-800 backdrop-blur-2xl`,
    navLine: `w-[1100px] flex justify-between items-center mx-auto px-4`,
    navLinks: 'hidden gap-8 md:flex',
    iconWrapper: `p-2 rounded-full hover:bg-gray-200 hover:bg-opacity-50 cursor-pointer active:bg-gray-200 active:bg-opacity-50`,
    active: `text-amber-500`,
    textLinks: 'hidden gap-8 sm:flex items-center',
    icons: 'flex gap-8 sm:hidden',
    tryButton: 'bg-primary text-white font-bold px-4 rounded-full cursor-pointer border-1 h-8 items-center flex',
    signInButton: 'bg-card border-primary text-primary pl-[0.125rem] pr-4 rounded-full cursor-pointer flex gap-2 items-center border-[1px] h-8',
};
