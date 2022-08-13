import React from 'react';
import dropDownIcon from '../../assets/arrow.svg';


function Footer() {
  return (
    <footer className="px-8 sm:px-12 md:px-16 lg:px-32 xl:px-72 py-12 md:py-16 lg:py-24">
      <section className="space-y-4 md:flex md:justify-between items-start">
        <section>
          <h4 className="uppercase text-gray-500 text-lg font-bold">Product</h4>
          <section className="flex-col space-y-2">
            <p href="#" className="text-gray-600  text-sm mt-6">Proposals</p>
            <p href="#" className="text-gray-600  text-sm">Contracts</p>
            <p href="#" className="text-gray-600  text-sm">Invoicing</p>
            <p href="#" className="text-gray-600  text-sm">Client CRM</p>
            <p href="#" className="text-gray-600  text-sm">Time Tracking</p>
            <p href="#" className="text-gray-600  text-sm">Task Tracking</p>
            <p href="#" className="text-gray-600  text-sm">Forms</p>
            <p href="#" className="text-gray-600  text-sm">Accounting</p>
            <p href="#" className="text-gray-600  text-sm">Bonsai TAX</p>
            <p href="#" className="text-gray-600  text-sm">Bonsai Cash</p>
            <p href="#" className="text-gray-600  text-sm mt-10">Pricing</p>
            <p href="#" className="text-gray-600  text-sm">Bonsai Reviews</p>
          </section>
        </section>
        <section>
          <h4 className="uppercase text-gray-500 font-bold text-lg">FREE RESOURCES</h4>
          <section className="flex-col space-y-2">
            <p href="#" className="text-gray-600  text-sm mt-6">Freelance Resource</p>
            <p href="#" className="text-gray-600  text-sm">Freelance Blog by Bonsai</p>
            <p href="#" className="text-gray-600  text-sm">How to write a contract</p>
            <p href="#" className="text-gray-600  text-sm">Online Signature Maker</p>
            <p href="#" className="text-gray-600  text-sm mt-10">Self-Employed Taxes Hub</p>
            <p href="#" className="text-gray-600  text-sm">Self-Employed Tax Calculator</p>
            <p href="#" className="text-gray-600  text-sm">Self-Employed Tax Deductions</p>
            

            {/*Nested Menu Under Free Resources*/}
            <section className="mt-4">
              <h4 className="capitalize text-gray-500 font-bold text-md">Templates</h4>
              <section className="flex-col space-y-2">
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="" >Invoice Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className=" ">Proposal Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Contract Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Agreements Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Scope of Work Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Quote Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Credit Note Templates</span>
                </p>
                <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Estimate Templates</span>
                </p>
              </section>
            </section>
          </section>
        </section>

        {/*Bonsai Socials*/}
        <section>
          <h4 className="uppercase text-gray-500 text-lg font-bold">Bonsai</h4>
          <section className="flex-col space-y-2">
            <p href="#" className="text-gray-600  text-sm mt-6">About</p>
            <p href="#" className="text-gray-600  text-sm">Support</p>
            <p href="#" className="text-gray-600  text-sm">Careers</p>
            <p href="#" className="text-gray-600  text-sm">LinkedIn CRM</p>
            <p href="#" className="text-gray-600  text-sm">Twitter</p>
            <p href="#" className="text-gray-600  text-sm">Privacy Policy</p>
            <p href="#" className="text-gray-600  text-sm">Legal</p>
            <p href="#" className="text-gray-600  text-sm">Affiliates</p>
            <p href="#" className="text-gray-600  text-sm">Write for Us</p>
            
            <p className="flex items-center space-x-2 text-gray-600 mt-4 text-sm">
                  <span className="">Agreements Templates</span>
                  <span className="flex items-center h-full">
                    <img src={dropDownIcon} alt="dropdown icon" className="w"/>
                  </span>
            </p>
          </section>
        </section>
      </section>
    </footer>
  )
}

export default Footer;