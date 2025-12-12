import React from 'react'
import styles from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header_container}>
          {/* logo and delivery section */}
          <div className={styles.logo_container}>
            {/* amazon logo */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div className={styles.delivery}>
              {/* location icon */}
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search bar section */}
          <div className={styles.search}>
            {/* Category dropdown */}
            <select name="" id="">
              <option value="">All</option>
            </select>

            {/* Search input */}
            <input type="text" />

            {/* Search icon */}
            <BsSearch size={25} />
          </div>
          {/*Language,Account,Orders,Cart */}
          <div className={styles.order_container}>
            {/* Language selector */}
            <a href="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/960px-Flag_of_the_United_States.svg.png?20240524035322"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <div>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* Orders section */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* Cart section */}
            <a href="/cart" className={styles.cart}>
              <BiCart size={35} /> {/* Cart icon */}
              <span>0</span> {/* Item count */}
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header