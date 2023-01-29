import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="subscribeDiv">
            <div className="subscribeLeft">
                <h2 className="subscribeTitle">By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                <span className='subscribeDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magnam deleniti dolores ut ipsum suscipit.</span>

                <form>
                    <div className="subscribeFormGroups">
                        <div className="subscribeFormGroup">
                            <input type="text" placeholder='Your Name' required/>
                            <input type="text" placeholder='Your Email Address' required/>
                            <button><FaPaperPlane /></button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="subscribeRight">
                <div className="subscribeRightLeft">
                    <div>
                        <h4>Store Location:</h4>
                        <span>Serbia, 34000 Kragujevac</span>
                    </div>
                    <div>
                        <h4>Phone:</h4>
                        <span>+381/0000000</span>
                    </div>
                    <div>
                        <h4>Office Location:</h4>
                        <span>Street BB, 34000 Kragujevac</span>
                    </div>
                </div>
                <div className="subscribeRightRight">
                    <div>
                        <h4>Work Hours:</h4>
                        <span>07:30 AM - 9:30 PM Daily</span>
                    </div>
                    <div>
                        <h4>Email:</h4>
                        <span>ricpewebcode@gmail.com</span>
                    </div>
                    <div>
                        <h4>Social Media</h4>
                        <span>Facebook, Instagram, Linkedin, Twitter, YouTube</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe