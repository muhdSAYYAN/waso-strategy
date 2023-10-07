import React from 'react'
import image from './img/wa.png'
import img1 from './img/ph.jpg'
// import img2 from './img/map.jpg'

function Footer() {
  return (
    <div className='Footer'>
         <img src={image} alt="" />
         
        <div className='footdiv'>
            <form action="">
                <div className='inp'>
                <input type="text" name="" id=""  placeholder='Your Name'/>
                <input type="text" name="" id="" placeholder='Email'/>
                </div>
                <textarea name="" id="" cols="60" rows="10" placeholder='Message'></textarea>
                <button>submitt</button>
            </form>
            <div className='last'>
                <h1>1340 Atwater St, Detroit, MI 48207</h1>
                <img src={img1} alt="" />
                {/* <img id='map' src={img2} alt="" /> */}
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4063.103580426464!2d-83.0264337484065!3d42.33402597908653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2cce05ddf4f1%3A0xcc0559eb3fda00c9!2sDetroit%20Riverwalk%2C%20Detroit%2C%20MI!5e1!3m2!1sen!2sus!4v1657814406289!5m2!1sen!2sus"
  
></iframe>
            </div>
        </div>
        <div className='end'>
          <h6>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</h6>
        <div className="clock">
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/4926/4926510.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/128/717/717426.png" alt="" />
        
        </div>

        </div>
    </div>
  )
}

export default Footer