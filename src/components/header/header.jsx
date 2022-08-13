import React from 'react';
import dropDownIcon from '../../assets/arrow.svg';
import Logo from '../../assets/bonsai-logo.svg';
import menuIcon from '../../assets/menu.svg';

function Header() {
  return (
    <header className='px-8 sm:px-12 md:px-16 lg:px-32 xl:px-72 bg-white dark:bg-gray-700 dark:text-white z-50'>
        <section className='py-5 flex justify-between items-center'>
            {/*Section containing the logo*/}
            <section>
                <img src={Logo} alt="Bonsai Logo" className="w-24 sm:w-32"/>
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
            <svg className="fill-current text-custom w-5 h-5" fill="current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.75 24.75">
                <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
                    c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
                    c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
            </svg>
            </section>
        </section>
    </header>
  )
}

export default Header;