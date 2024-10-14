import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contactPage'>
        <h1>Get In touch</h1>
       
     <form action="" className='ContactForm'>
      <div className='div-1'>
        <label htmlFor="">Full Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <label htmlFor="">Mobile Number</label>
        <input type="text" />
      </div>
      <div className='div-2'>
        <label htmlFor="">Type Message</label>
        <textarea name="" id="text"></textarea>
        <button>Send</button>
      </div>
     </form>
    </div>
  )
}

export default Contact
