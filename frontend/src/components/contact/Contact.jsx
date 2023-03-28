import React from 'react'

import { motion } from "framer-motion";

import "../../styles/contact.scss"

import burger2 from '../../assets/burger2.png'


const Contact = () => {
  return (
    <section className='contact'>
        <motion.form action='https://formspree.io/f/xqkjbjpy' method='POST' name='username' required autoComplete='off'
        initial={{
            x:"-100vw",
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}

        transition={{delay:0.1}}
        >
<h2>Contact Us</h2>

<input name='username' type="text" placeholder='Name'/>
<input name='email' type="email" placeholder='Email' />
<textarea name='Message' placeholder='Message....' cols="30" rows="10" required></textarea>
<button type="submit">Send</button>

        </motion.form>

        <motion.div className='formBorder'
        initial={{
            x:'100vw',
            opacity:0
        }}

        animate={{
            x:0,
            opacity:1
        }}


        transition={{delay:0.1}}
        >
            <motion.div 
            initial={{
                y:'-100vh',
                x:'50%',
                opacity:0

            }}

            animate={{

                y:'-50%',
                x:'50%',
                opacity:1
            }}

            transition={{delay:1}}
            >
                <img src={burger2} alt="" />
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Contact
