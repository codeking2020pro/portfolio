import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../uwohos/contactmeans/facebook-icon4.png';
import XIcon from '../../uwohos/contactmeans/twitter-x-logo-icon.png';
import WhatsAppIcon from '../../uwohos/contactmeans/whatsapp-icon.jpg';
import LinkedinIcon from '../../uwohos/contactmeans/linkedin-icon3.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ga4wrfp', 'template_jsfkjdk', form.current, 'rZ54kf1jQcvsrEhYG')
      .then((result) => {
          console.log(result.text);
          alert('Email sent');
      }, (error) => {
          console.log(error.text);
      }
    );
    e.target.reset()
  };


  return (
      <section id='contact'>
        <div className='contactSection'>
            <h1 className='contactSectionTitle'>Contact Me</h1>
            <span className='contactSectionDesc'>It's a delight to hear from you, so please, <span id='inboxME'>inbox me.</span> </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Enter your name' name='your_name'></input>
              <input type='email' className='email' placeholder='Your email' name='your_email'></input>
              <textarea className='msg' name='message' rows={10} placeholder='Drop a Message'></textarea>
              <button type='submit' value='send' className='submitBtn'>Send Message</button>
              <div className='links'>
                <img src={FacebookIcon} alt='' className='link' />
                <img src={XIcon} alt='' className='link' />
                <img src={WhatsAppIcon} alt='' className='link' />
                <img src={LinkedinIcon} alt='' className='link' />
              </div> 
            </form>
        </div>
    </section>

  )
}

export default Contact