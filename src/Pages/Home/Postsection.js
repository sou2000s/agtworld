import React, { useState } from 'react';
import joinIcon from '../../images/Vector (3).png'
import postImage1 from '../../images/Rectangle 5.png'
import postImage2 from '../../images/Rectangle 5 (1).png'
import postImage3 from '../../images/Rectangle 5 (2).png'
import articleIcon from '../../images/✍️ Article.png'
import actionIcon from '../../images/Vector (6).png'
import locationIcon from '../../images/Vector (7).png'
import penIcon from '../../images/Vector (8).png'
import infoIcon from '../../images/Vector (9).png'
import avatar from '../../images/Rectangle 3 (2).png'
import shareIcon from '../../images/Vector (10).png'
import eyeIcon from '../../images/Path.png'
import writePostIcon from '../../images/Vector (1).png'
import meetUpPicture from '../../images/Rectangle 5 (3).png'
import meetUpIcon from '../../images/🗓️ Meetup.png'
import { Modal } from 'bootstrap';
const Postsection = () => {
  const [action ,setAction] = useState(false)

  const handleAction = ()=>{
    setAction(!action)
    console.log(action);
  }
    return (
        <div>
               <div className='d-flex justify-content-between'>
            <div>
                <div className='d-flex '>
                <p className='fs-5 text-dark'>All posts(32)</p>
                <p className='ps-3 fs-5 text-secondary'>Article</p>
                <p className='ps-3 fs-5 text-secondary'>Event</p>
                <p className='ps-3 fs-5 text-secondary'>Education</p>
                <p className='ps-3 fs-5 text-secondary'>Job</p>
                </div>
            </div>
            <div>
           
              <div className='d-flex'>
               <p className='btn btn-light'>Write a post <img src={writePostIcon} alt="" /> </p>
                <p className='ms-3 btn btn-primary'> <img src={joinIcon} alt="" /> Join group</p>
               </div>
              
              
            </div>
        </div>
        <div className="w-100 bg-secondary">
  <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width: "8%" , border:"1px solid #000000"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

       <div className='d-flex mt-5 justify-content-between'>
     
        <div className="row row-cols-1  g-4">
  <div className="col w-75">
    <div className="card ">
      <img src={postImage1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <img src={articleIcon}  alt="" />
        <div className='d-flex justify-content-between'>
        <div >
        <h5 className="card-title pt-3">What if famous brands had regular fonts?Meet <br />
          Regularbrands!
             </h5>
        </div>
             <div className='position-relative ' onClick={handleAction}>
            <img src={actionIcon} alt="" />
                <ul className={`${action ? "d-block" : "d-none"}`}>
                  <li>Edit</li>
                  <li>Report</li>
                  <li>Option3</li>
                </ul>
             </div>

        </div>
        <p>I have worked in UX for better part of decade.From now on, I plan to rei.. </p>
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <img src={avatar} alt="" />
            <h1 className='fs-6 fw-bold  mt-3 ms-3'>Sarthak Kamra</h1>
          </div>

          <div>
             <p><img style={{background:" #DADADA"}} src={eyeIcon}  alt="" />1.4k views <img src={shareIcon} alt="" /></p>                 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col w-75">
    <div className="card ">
      <img src={postImage1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <img src={articleIcon}  alt="" />
        <div className='d-flex justify-content-between'>
        <div >
        <h5 className="card-title pt-3">What if famous brands had regular fonts?Meet <br />
          Regularbrands!
             </h5>
        </div>
             <div className='position-relative ' onClick={handleAction}>
            <img src={actionIcon} alt="" />
                <ul className={`${action ? "d-block" : "d-none"}`}>
                  <li>Edit</li>
                  <li>Report</li>
                  <li>Option3</li>
                </ul>
             </div>

        </div>
      </div>
    </div>
  </div>
  <div className="col w-75">
    <div className="card ">
      <img src={meetUpPicture} className="card-img-top" alt="..."/>
      <div className="card-body">
        <img src={meetUpIcon}  alt="" />
        <div className='d-flex justify-content-between'>
        <div >
        <h5 className="card-title pt-3">Finance & Investment Elite Social Mixer @Lujiazui            </h5>
        </div>
             <div className='position-relative ' onClick={handleAction}>
            <img src={actionIcon} alt="" />
                <ul className={`${action ? "d-block" : "d-none"}`}>
                  <li>Edit</li>
                  <li>Report</li>
                  <li>Option3</li>
                </ul>
             </div>
          
          
        </div>
      </div>
    </div>
  </div>
</div>
      
        <div className='d-flex'>
         <div>
         <img src={locationIcon} style={{height:"10px"}} alt="" />
         </div> 
            <div className='ps-3'>
            <input type="text" defaultValue='Noida , India' style={{borderRightWidth:"0px" , borderLeftWidth:"0px" , borderTopWidth:"0px"}} name="" id="" />
            <p className='text-muted'><img className='bg-muted' src={infoIcon} alt="" /> your location help up to serve better and extended a personalised experience </p>
            </div>
              <div>
            <img src={penIcon} alt="" />

              </div>
        </div>


       </div>
        
        </div>
     
    );
};

export default Postsection;