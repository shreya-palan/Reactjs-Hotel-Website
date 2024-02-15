import React, { useState } from 'react'
import '../Contact/contact.css';

const ContactForm = () => {
    const [fname, setFname] = useState('')

    const [allValue,setAllValue] = useState([])
    const formSubmit = (e) =>{
        const newValue = {fname}
        setAllValue([...allValue, newValue])
    }
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
            <div className="main-content">
                <h2>Contact Form</h2>
                <p>Fill out the form below, we will get back to you soon.</p>

                <form onSubmit={formSubmit}>
                    <div className="grid1">
                        <div className="input">
                            <span>
                                First Name <label>*</label>
                            </span>
                            <input type="text" name='fname' value={fname} onChange={(e) => setFname(e.target.value)}/>
                        </div>
                    </div>
                    <button className='primary-btn'>Submit Now</button>
                </form>
            </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue) => {
            const { fname } = currentValue
            return (
                <div className="sing-box">
            <h1>Send Successfully</h1>
            <h3>
                First Name : <p></p>
            </h3>
        </div>
            )
        })}
        
      </section>
    </>
  )
}

export default ContactForm
