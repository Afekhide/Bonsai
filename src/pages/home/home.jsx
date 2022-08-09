import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../components/contexts/context';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import heroImg from '../../assets/hero-2.png';

function Home() {
    const {darkMode} = useContext(AppContext);
    useEffect(() => document.title = 'Home', []);

    return (
        <section className={`${darkMode ? 'dark': ''}`}>
            <Header/>
            <section className="flex-col-reverse lg:flex-row lg:flex px-12 py-12 md:px-16 md:py-10 lg:px-20 lg:py-20 xl:px-44 xl:py-32">
                <section className="lg:w-2/3">
                    <h2 className="text-gray-600 font-custom text-4xl">Everything you need to <br/> run your freelance <br/> business.</h2>
                    <p className="mt-6 md:w-1/3 lg:w-3/5 font-semibold text-lg text-gray-600">Bonsai's all in one suite with smart automation tools let's you focus
                        on your passion, not your paperwork.
                    </p>
                    <section className="mt-6">
                        <section className="flex border-custom border-2 rounded w-5/6 md:w-3/5 lg:w-4/5">
                            <div className="flex-1">
                                <input className="outline-0 w-full px-7 py-4 font-light text lg" type="email" placeholder="enter your email"/>
                            </div>
                            <div className="flex-grow-0">
                                <button className="px-7 py-4 uppercase bg-custom text-white font-bold text-md tracking-wide">Start Free</button>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="lg:w-1/3">
                    <section className="w-full object-fill heigh">
                        <img src={heroImg} alt="Hero" className="w-full lg:-translate-y-10 object-fill" />
                    </section>
                </section>
            </section>
            <Footer/>
        </section>
    )
}

export default Home;