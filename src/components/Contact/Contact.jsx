import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'
const Contact = () => {
  return (
    <section id='contact' className="contact-wrapper">
        <div className="paddings innerWidth flexCenter contact-container">
            {/* left side */}
            <div className="flexColStart contact-left">
              <span className='orangeText'>Our Contacts</span>
              <span className='primaryText'>Easy to contact Us</span>
              <span className='secondaryText'>We are always ready to help you providing the best service for you. We believe a good place to leave can make your life better</span>

              <div className="flexColStart contactMode">
                {/*Call first row */}
                <div className="flexStart row">
                  <div className="flexColStart mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <MdCall size={25} />
                      </div>
                      <div className="flexColStart details">
                        <span>Call</span>
                        <span className='secondaryText'>+233 591 130 145</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                  </div>

                {/* Chat second button  */}
                <div className="flexColStart mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25} />
                      </div>
                      <div className="flexColStart details">
                        <span>Chat</span>
                        <span className='secondaryText'>+233 591 130 145</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Chat</div>
                  </div>
                </div>
                {/* Video second row */}
                <div className="flexStart row">
                  <div className="flexColStart mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <MdCall size={25} />
                      </div>
                      <div className="flexColStart details">
                        <span>Video Call</span>
                        <span className='secondaryText'>+233 591 130 145</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Video Call Now</div>
                  </div>

                {/*Message second button  */}
                <div className="flexColStart mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter size={25} />
                      </div>
                      <div className="flexColStart details">
                        <span>Message</span>
                        <span className='secondaryText'>+233 591 130 145</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Message Now</div>
                  </div>
                </div>
              </div>


            </div>
            {/* right side */}
            <div className="contact-right">
              <div className="image-container">
                <img src="./contact.jpg" alt="contact" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact