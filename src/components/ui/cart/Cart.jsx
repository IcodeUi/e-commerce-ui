import React from "react";
import "../style/Cart.scss";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import not from "../../../assets/img/graham-mansfield-wp9ggFHgsAI-unsplash.jpg";
import { motion } from "framer-motion";
import CartData from "./data/CartData";
function Cart({ handleCart, cart }) {
  return (
    <div class="--t-cart-container">
      <div className="-t-overlay" onClick={handleCart}></div>
      <motion.div
        className="--t-cart-content"
        initial={{
          opacity: 0,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      >
        <span className="-t-close" onClick={handleCart}>
          <AiFillCloseCircle size={24} />
        </span>
        {/* <div className="--t-cart-empty">
          <img src={not} alt="" />
          <small className="text-[2em]"> oops! 🙄</small>
          <h2 className="text-sm"> your cart is currently empty</h2>
          <Link to="/shop" className="capitalize text-blue-900">
            shop now
          </Link>
        </div> */}
        <CartData />
        <div className="-t-footer-checkout">
          <p>checkout</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Cart;
