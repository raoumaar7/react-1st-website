import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Contact Me
            </p>
            <p className='footer-subscription-text'>
            Your Gateway to Exceptional Web Development!
            </p>
            <div className="input-areas">
                <form action="/submit_form" method="post">
                    <input type='email' name='email' placeholder='Enter your email'
                     className='footer-input' />
                    {/* <input type="tel" name="phone" required className='footer-input'
                     placeholder='Enter your Phone num'/>
                    <textarea name="message" required className='footer-input' 
                    placeholder='Write a message'></textarea> */}
                    <Button type="submit" value="Submit" 
                    buttonStyle='btn--outline'>Submit</Button>
                </form>
            
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-intro'>
                    <h2>About Us</h2>
                       <p>I bring your ideas to life, delivering exceptional user experiences. Let's collaborate to build a modern, responsive, and uniquely tailored web presence that stands out in the digital landscape. Explore my portfolio, and let's transform your vision into reality!</p>   
                </div>
                
            </div>
            <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                        <Link to='https://wa.link/a01qwb'><i className='fab fa-whatsapp'/>  Whatsapp </Link>
                        <Link to='mailto:umarsaeedrao63@gmail.com'><i className='fa fa-envelope'/>  Email</Link>
                        <Link to='https://join.skype.com/invite/WMi8xDhBTnlG'><i className='fab fa-skype'/>  Skype</Link>
                        <Link to='/'><i className='fa fa-map-pin' aria-hidden="true"/>  IEP Town, Lahore</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Handles</h2>
                        <Link to='https://github.com/raoumaar7'>Github</Link>
                        <Link to='https://www.upwork.com/freelancers/~01448a94504a5551e2'>Upwork</Link>
                        <Link to='https://www.linkedin.com/in/umar-saeed-7623b0152/'>Linkedin</Link>
                        <Link to='https://www.facebook.com/people/Umaar/100067172562787/'>Facebook</Link>

                        
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        UMI <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <small class="website-rights">Copyrights @2023 Umi Productions.</small>
                <div className='social-icons'>
                    <Link
                    className='social-icon-link facebook'
                    to='https://www.facebook.com/people/Umaar/100067172562787/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f' /> 
                    </Link>
                    <Link
                    className='social-icon-link upwork'
                    to='https://www.upwork.com/freelancers/~01448a94504a5551e2'
                    target='_blank'
                    aria-label='Upwork'
                    >
                        <i className='fa fa-desktop' /> 
                    </Link>
                    <Link
                    className='social-icon-link Github'
                    to='https://github.com/raoumaar7'
                    target='_blank'
                    aria-label='Github'
                    >
                        <i className='fab fa-github' /> 
                    </Link>
                    <Link
                    className='social-icon-link linkedin'
                    to='https://www.linkedin.com/in/umar-saeed-7623b0152/'
                    target='_blank'
                    aria-label='Linkedin'
                    >
                        <i className='fab fa-linkedin' /> 
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;
