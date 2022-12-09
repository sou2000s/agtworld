import React, { useContext } from 'react';
import headerParaPng from '../../images/createAcountPara.png'
import './Modal.css'
import eyeIcon from '../../images/icons8-eye-24.png'
import googleSignIn from '../../images/Group.png'
import facebookIcon from '../../images/Group 3 (1).png'
import signInModalPicture from '../../images/Group 3 (2).png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Modal = () => {
   const {createUser,setUser , user} = useContext(AuthContext)
   console.log(user);
 const handleGoogleAuthentication = () =>{
     createUser()
     .then(res =>{
      console.log(res.user);
      setUser({name:`${res.user.displayName}` , photo:`${res.user.photoURL}`})
     })
     .catch(err => console.log(err.message))
 }

   return (
<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content ">
      <div className="position-relative">
        {/* <h1 className="modal-title fs-5" id="exampleModalLabel"></h1> */}
        <img src={headerParaPng} alt="" style={{paddingLeft:"50px"}} />
        <button type="button" className="btn-close position-relative" style={{marginLeft:"100px" , }} data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body " >
      <div className="d-flex ">
       <div className='w-75'>
       <h1 className='fw-bold fs-3 mb-3'>Create Account</h1>
  <input type="text" placeholder='first name' aria-label="First name" className='from-control border w-25 p-2' />

  <input type="text" aria-label="Last name" placeholder='last name' className='from-control border w-25   p-2 ' /> 
   <br />
  <input type="text" aria-label="" placeholder='email' className='from-control border   p-2 w-50' />
  <br />
<div className='position-relative'>
<img src={eyeIcon} className="position-absolute  " style={{marginLeft:"45%" , marginTop:"1%" , width:"20px"}} alt="" />
<input type="text" aria-label="" placeholder='password' className='from-control border   p-2 w-50'  />
</div>

 <input type="text" aria-label="" placeholder='confirm password' className='from-control border   p-2 w-50' />

 <div className='ms-2 mt-3'>
        <button type="button" className="btn w-50 btn-primary rounded-pill " data-bs-dismiss="modal">Create Account</button>
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        <br />
        <p className='btn btn-light w-50' type="button"  data-bs-dismiss="modal"><img src={facebookIcon} alt="" /></p>
        <br />
        <p className='btn btn-light w-50 ' type="button" onClick={handleGoogleAuthentication} data-bs-dismiss="modal"><img src={googleSignIn} alt="" /></p>
        </div>


       </div>

 <div className=''>
     <p>Allready have account? <span className='text-primary'>Sign In</span></p>
     <br />
     <img src={signInModalPicture} alt="" />
 </div>




</div>
      </div>
  
       
  
    </div>
  </div>
</div>



      
    );
};

export default Modal;