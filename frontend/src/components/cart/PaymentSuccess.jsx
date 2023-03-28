import React from "react";
import { Link } from "react-router-dom";
import '../../styles/paymentsuccess.scss'

import { motion } from "framer-motion";

const PaymentSuccess = () => {
  return (
    <section className="paymentsuccess">
      <main>
        <motion.h1
        initial={{
            y:"90vw",
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1
        }}
        >Order confirmed</motion.h1>
        
        
        <p>Order Placed Successfully, You can check order status below</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
