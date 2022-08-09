import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useContext } from 'react';
import { AppContext} from '../../components/contexts/context';


function Pricing() {

  const {darkMode} = useContext(AppContext);
  return (
    <section className={`${darkMode ? 'dark': ''}`}>
            <Header/>
            <section>
                <p>{darkMode? 'DarkMode' : 'Light Mode'} Pricing</p>
            </section>
            <Footer/>
        </section>
  )
}

export default Pricing;