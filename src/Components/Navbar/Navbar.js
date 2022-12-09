import React from 'react';
import { Link } from 'react-router-dom';
import logoicon from '../../images/Union 1.png'
import createAccounticon from '../../images/Vector (1).png'
import searchIcon from '../../images/Vector.png';
const Navbar = () => {
    return (
        <div className=" d-flex justify-content-around p-3 bg-[#FFFFFF]">

   <div>
   <Link className="navbar-brand" ><span  style={{Color: "#27A365"}}>ATG</span>  W <img src={logoicon} alt="" /> RLD</Link>
   </div>
   
    <div className="input-group flex-nowrap w-25 ">
  <span className="input-group-text" id="addon-wrapping"><img src={searchIcon} alt="" /></span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
      
   <div>
    <p>Create account. <span className='text text-primary'> It's free!</span> <img type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal" src={createAccounticon} alt="" /></p>
   </div>
   
</div>
    );
};

export default Navbar;