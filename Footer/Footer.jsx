import React from 'react';
import { SocialIcon } from 'react-social-icons'
import "./Footer.css"

const Footer = () => {
  return (
    <><footer className="bg-gray-700 w-screen pt-16 text-white ">

<div className="mx-auto grid grid-cols-2 ">


                    <div className="col-span-4 lg:ml-72 ml-8 sm:col-span-1">
                      <h1>logoooo</h1>

                      </div>
            
            
            
    <div>
        <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-8 gap-x-32 mr-72 ml-8 lg:-ml-32'>
          
        {/* Column 1 */}
        <div className=" sm:text-xxs text-xs  whitespace-nowrap text-gray-500">
          <h3 className="text-1xl mb-4 text-white font-semibold">Navigation</h3>
          <p className=' mb-4'>Home</p>
          <p className=' mb-4'>About US</p>
          <p className='mb-4'>Locate Agents</p>
          <p className=' '>Households</p>
        
        </div>

        {/* Column 2 */}
        <div className=" text-xxs text-gray-500  whitespace-nowrap">
          <h3 className="text-white font-semibold text-1xl mb-4">Legal</h3>
          <p className=' mb-4'>General Info</p>
          <p className='Foot-links mb-4'>Privacy Policy</p>
          <p className=' '>Terms of Service</p>
        </div>



           {/* Column 3 */}
           <div className="text-xxs text-gray-500">
          <h3 className="text-white font-semibold text-1xl whitespace-nowrap mb-4">What We Do</h3>
          <p className='  mb-4 '>Products</p>
          <p className=' mb-4'>Company</p>
          <p className=' mb-4'>Recyclables</p>
          <p className=' mb-4'>CSR</p>
        </div>



           {/* Column 4 */}
           <div className=" text-xxs text-gray-500">
          <h3 className="text-white font-semibold text-1xl mb-4 whitespace-nowrap">Talk To Us</h3>
          <p className=' mb-4'>support@scrapays.com</p>
          <p className=' mb-4'>013302598</p>
          <button class="border border-yellow-700 p-3 rounded-md whitespace-nowrap"><span className='text-yellow-700'>Contact Us </span></button>
        
        </div>

       
       </div>


        <div>
        <div className='flex flex-wrap sm:flex-nowrap gap-4 border-t border-gray-400 mb-20 pt-3 ml-4 mr-4 lg:mr-20 lg:-ml-32'>
  <div className="flex gap-4">
    <SocialIcon url='https://www.facebook.com/'  fgColor='gray' bgColor='transparent'/>
    <SocialIcon url='https://www.linkedin.com/'  fgColor='gray' bgColor='transparent'/>  
    <SocialIcon url='https://twitter.com/'  fgColor='gray' bgColor='transparent'/> 
    <SocialIcon url='https://www.instagram.com/'  fgColor='gray' bgColor='transparent'/> 
  </div>
  <p className="text-gray-400 text-xxs mt-3 whitespace-nowrap">© {2023} Scrapays. All rights reserved.</p>
</div>


        </div>
      
          </div>
      </div>

    </footer>
  
     </>
  );
};

export default Footer;
