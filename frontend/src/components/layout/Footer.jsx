import React from 'react'
import {AiFillGithub, AiFillLinkedin ,AiFillInstagram} from 'react-icons/ai'
import '../../styles/footer.scss'
import { motion } from "framer-motion";
const Footer = () => {

    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };

  return (
   <footer>
    <div>
        <h2 >MBA Burger Wala</h2>
        <p>We are trying to give you the best taste possible.</p>

        <em>order your food anytime, anywhere with just couple of clicks</em>

        <strong>All right reserved @mbaburgerwala</strong>
    </div>

    <motion.aside {...options}>
        <h4 >Connect</h4>
        <motion.a href="https://github.com/prajwalchitode" {...options}><AiFillGithub /></motion.a>
        <motion.a href="https://www.linkedin.com/in/prajwal-chitode-3b4a611a5/"><AiFillLinkedin /></motion.a>
        <motion.a href="https://instagram.com/prajwalchitode"><AiFillInstagram /></motion.a>
    </motion.aside>
   </footer>
  )
}

export default Footer
