import React from 'react';
import dropDownIcon from '../../assets/arrow.svg';
import Logo from '../../assets/bonsai-logo.svg';
import menuIcon from '../../assets/menu.svg';

function Header() {
  return (
    <header className='px-12 md:px-16 lg:px-20 xl:px-44 bg-white dark:bg-gray-700 dark:text-white z-50'>
        <section className='py-5 flex justify-between items-center'>
            {/*Section containing the logo*/}
            <section>
                <img src={Logo} alt="Bonsai Logo" className="w-32"/>
            </section>

            {/*Section containing the major navigation links*/}
            <section className="hidden lg:flex justify-end flex-1 xl:gap-x-24 lg:gap-x-20">
                <nav className="text-gray-500 flex xl:gap-x-10 lg:gap-x-5">
                    <a href="#" className="flex gap-x-2 items-center">
                        <span>Products</span>
                        <span className='flex items-center'>
                            <img src={dropDownIcon} alt="" className='w-2'/>
                        </span>
                    </a>
                    <a href="#" className="flex gap-x-2 items-center">
                        <span>Templates</span>
                        <span className='flex items-center'>
                            <img src={dropDownIcon} alt="" className='w-2'/>
                        </span>
                    </a>
                    <a href="#" className="flex gap-x-2 items-center">
                        <span>Pricing</span>
                    </a>
                    <a href="#" className="flex gap-x-2 items-center">
                        <span>Reviews</span>
                    </a>
                </nav>
                <section className="flex ctas justify-between gap-5">
                    <button 
                        className='uppercase bg-white text-custom px-6 py-2 rounded text-xs font-bold border-[1px] border-custom'>
                        Log in
                    </button>
                    <button 
                        className='uppercase bg-custom text-white px-6 py-2 rounded text-xs font-bold'>
                        Start free
                    </button>
                </section>
            </section>

            {/*Section containing the menu icon, only visible on small devices*/}
            <section className="menu-btn lg:hidden">
                <img src={menuIcon} alt="" className='w-5'/>
            </section>
        </section>
    </header>
  )
}

export default Header;