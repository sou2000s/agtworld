import React from 'react';
import headerParaPng from '../../images/createAcountPara.png'
const Modal = () => {
    return (
      


<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h1 class="modal-title fs-5" id="exampleModalLabel"></h1> */}
        <img src={headerParaPng} alt="" />
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body " >
      <div class="">

  <input type="text" placeholder='first name' aria-label="First name" className='from-control border w-25 p-2' />

  <input type="text" aria-label="Last name" placeholder='last name' className='from-control border w-25   p-2 ' /> 
   <br />
  <input type="text" aria-label="" placeholder='email' className='from-control border   p-2 w-50' />
  <br />
  <input type="text" aria-label="" placeholder=''  className='from-control border   p-2 w-50' />
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary rounded-pill" data-bs-dismiss="modal">Create Account</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>



      
    );
};

export default Modal;