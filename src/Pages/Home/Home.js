import { Modal } from 'bootstrap';
import React from 'react';

import heroBanner from "../../images/Rectangle 2.png"
import Postsection from './Postsection';
const Home = () => {
  
       return (
          <div>

           <div  className='position-relative  ' style={{height:"440px"  , backgroundImage: `url('https://i.ibb.co/RhPgd3N/Rectangle-2.png')`  }} >
                  <div className="p-5">
                     <h1 className='text-white'>Computer Engineering</h1>
                  </div>
             

                  
           </div>
              <div className='container mt-5'>
                     <Postsection></Postsection>
              </div>

            
           

        
          </div>
       
          
        
    );
};

export default Home;