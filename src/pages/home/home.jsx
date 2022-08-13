import React from 'react';
import { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../components/contexts/context';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import heroImgsm from '../../assets/hero-sm.png';
import heroImgmd from '../../assets/hero-md.png';
import heroImg from '../../assets/hero.png';
import withoutBonsai from '../../assets/img-1.svg';
import withBonsai from '../../assets/img-2.svg';
import proposalsIcon from '../../assets/proposals-icon.svg';
import contractsIcon from '../../assets/contracts.svg';
import crmIcon from '../../assets/crm.svg';
import formsIcon from '../../assets/forms.svg';
import taxesIcon from '../../assets/taxes.svg';
import taskTrackingIcon from '../../assets/task-tracking.svg';
import timeTrackingIcon from '../../assets/time-tracking.svg';
import invoicesIcon from '../../assets/invoices.svg';
import { TweenMax, TimelineMax } from 'gsap';

function Home() {
    const [activeService, setActiveService] = useState(0);
    const services = [
        {
            text: "Proposals",
            icon: proposalsIcon,
            title: "Win More Work",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Contracts",
            icon: contractsIcon,
            title: "Win More Contracts",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Clent CRM",
            icon: crmIcon,
            title: "Improved Client CRM",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Time Tracking",
            icon: timeTrackingIcon,
            title: "Improved Time Management",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Invoices",
            icon: invoicesIcon,
            title: "Automatic Invoices",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Task Tracking",
            icon: taskTrackingIcon,
            title: "Detailed Task Tracking",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Accounting and Taxes",
            icon: taxesIcon,
            title: "Straightforward Accounting",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
        {
            text: "Forms",
            icon: formsIcon,
            title: "Expertly Designed Form",
            description: "With just a few clicks, you can craft structured proposals with clear estimates to close your deal faster."
        },
    ];
    const {darkMode} = useContext(AppContext);


    //Animation References
    let headerRef = useRef(null);
    let heroRef = useRef(null);

    useEffect(() => {
        document.title = 'Home';
        TweenMax.from(headerRef, 1, {
            opacity: 0,
            y: '-20vh',
            delay: 0.5
        })

        TweenMax.from(heroRef, 1.2, {
            opacity: 0,
            y: "10vh",
            delay: 1,
            
        })

    }, [])

    return (
        <section className={`${darkMode ? 'dark': ''} overflow-hidden`}>
            <section ref={el => headerRef = el}>
                <Header/>
            </section>
            <section ref={el => heroRef = el} className="flex flex-col-reverse md:flex-row md:flex px-8 sm:px-12 py-16 md:px-16 md:py-24 md:pb-16 lg:px-32 lg:py-20 lg:pb-16 xl:px-72 xl:py-40 xl:pb-24">
                <section className="lg:w-1/2 md:w-3/5 mt-24 md:mt-0">
                    <h2 className="text-gray-600 font-custom text-3xl md:text-4xl lg:w-4/6">Everything you need to run your         freelance business.
                    </h2>
                    <p className="mt-6 md:w-4/5 lg:w-3/5 font-semibold lg:text-lg sm:text-md text-gray-600">Bonsai's all in one suite with smart automation tools let's you focus
                        on your passion, not your paperwork.
                    </p>
                    <section className="mt-6 xs:w-full md:w-full flex md:justify-start items-center">
                        <section className="flex border-custom hover:border-light border-2 rounded xs:w-full sm:w-5/6 md:w-4/5 lg:w-4/5">
                            <div className="flex-1">
                                <input className="outline-0 w-full px-5 py-3 md:px-7 md:py-4 font-semibold md:text-lg text-gray-500" type="email" placeholder="enter your email"/>
                            </div>
                            <div className="flex-grow-0">
                                <button className="block h-full px-5 py-3 text-sm md:px-7 md:py-4 uppercase hover:bg-light bg-custom text-white font-bold sm:text-md tracking-wide">Start Free</button>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="lg:w-1/3 relative">
                    <section className="w-full relative">
                        <img 

                            src={heroImgsm} 
                            srcSet={
                                    `${heroImg} 1578w,
                                    ${heroImgmd} 600w,
                                    ${heroImgsm} 300w
                                `} 
                            alt="Hero" 
                            sizes={`
                                    (min-width: 768px) 70vw,
                                    50vw
                                `}
                            className="md:static mx-auto lg:-translate-y-10 xl:-translate-y-16 w-[100%] lg:w-[170%] max-w-[200%]"/>
                    </section>
                </section>
            </section>

            {/*Why Choose Bonsai Section*/}
            <section className="px-8 sm:px-12 md:px-24 lg:px-24 xl:px-64 py-8 md:py-16 w-full">
                <section className="text-center">
                    <h2 className="font-custom text-3xl text-gray-600 text-center">Make more, manage less</h2>
                    <p className="font-light text-gray-500 text-lg lg:text-xl mt-4 sm:text-center sm:w-3/5 lg:w-3/5 mx-auto" >
                        Bonsai integrates and automates every step of your business, so it runs seamlessly, from proposal to tax season.
                    </p>
                </section>
                <section className="flex flex-col lg:flex-row lg:justify-center lg:space-x-24 lg:px-8 mt-16">
                    <section className="">
                        <h3 className="text-center font-bold text-lg text-gray-500 mb-8">Without Bonsai</h3>
                        <img src={withoutBonsai} alt="Without Bonsai" className="lg:w-full mx-auto" />
                    </section>
                    <section className="lg:mt-0 mt-8">
                        <h3 className="text-center text-gray-500 font-bold text-lg mb-8">With Bonsai</h3>
                        <img src={withBonsai} alt="With Bonsai" className="lg:w-full mx-auto" />
                    </section>
                </section>
            </section>

            {/*Mobile Services Navigations, hidden on screens 768px and above*/}
            <section className="block md:hidden px-8 sm:px-12 py-16">
                <p>Hello Mobile</p>
            </section>

            {/*Desktop Services Navigations, hidden on screens below 768px*/}
            <section className="hidden md:flex flex-col-reverse md:flex-row md:px-16 lg:px-32 xl:px-72 md:py-16 xl:py-24">
                <section className="flex justify-between">
                    <section className="flex flex-col">
                        {services.map((service, index) => {
                            return index === activeService ? 
                                <section 
                                className="px-7 py-4 flex items-center space-x-3 shadow-xl rounded-sm z-[3]"
                                key={index}>
                                    <img src={service.icon} alt={service.text + " icon"} className="w-4"/>
                                    <p className="font-bold text-lg text-gray-500">{service.text}</p>
                                </section>
                            :
                                <section 
                                className={`px-7 py-4 flex items-center space-x-3 ${(services.length-index) !== 1 ? 'border-b': ''}`} 
                                key={index} onClick={ev => setActiveService(index)}>
                                    <img src={service.icon} alt={service.text + " icon"} className="w-4"/>
                                    <p className="font-bold text-lg text-gray-500">{service.text}</p>
                                </section>
                        })}
                    </section>
                    <section className="flex-1 ml-24">
                        <h3 className="text-3xl font-custom text-gray-700">{services[activeService].title}</h3>
                        <p className="mt-2 md:w-full w-7/12 font-light text-gray-600 text-lg">{services[activeService].description}</p>
                        <p className="mt-5 font-semibold text-custom text-md uppercase">Explore {services[activeService].text}</p>
                    </section>
                </section>
            </section>
            <Footer/>
        </section>
    )
}

export default Home;