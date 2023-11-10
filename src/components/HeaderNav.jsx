import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faPinterest,
  faFacebookF,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function HeaderNav() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isMavVisible, setMavVisibility] = useState(true);

  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
    setMavVisibility(!isMavVisible);
  };

  return (
    <header className="">
      <div className="">
        {/* nav for lg screen */}
        <div className="  hidden   bg-LBlue  md:flex justify-between px-24 py-6">
          <Link href={"/"}>
            <img
              className="w-[5rem] md:w-[7rem]"
              src="./favicon.png"
              alt=""
            ></img>
          </Link>
          <ul className=" text-Black flex  gap-x-3   ">
            <li className=" ">
              <Link href={"/"}>
                <p className="text-xl font-bold text-DBlue">Login</p>
              </Link>
            </li>
            <li className=" ">
              <Link href={"/"}>
                <p className="text-xl font-bold text-DBlue">About Us</p>
              </Link>
            </li>
            <li className=" ">
              <Link href={"/"}>
                <p className="text-xl font-bold text-DBlue">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* nav for small screen */}
        {isMavVisible && (
          <div className="md:hidden  flex justify-between sm:px-1 py-8  bg-LBlue">
            <span>
              <img className="w-[5rem]" src="./favicon.png" alt="" />
            </span>
            <span onClick={toggleNavVisibility} className="text-2xl">
              <FontAwesomeIcon className="text-2xl text-DBlue" icon={faBars} />
            </span>
          </div>
        )}

        {/* toggled menue */}

        {isNavVisible && (
          <div className=" md:hidden  z-10 fixed top-0 left-0  h-screen w-full bg-LBlue">
            <span onClick={toggleNavVisibility} className="">
              <FontAwesomeIcon className="text-[2rem]" icon={faXmark} />
            </span>
            <ul className=" text-Black flex flex-col  gap-x-3  h-screen w-full  ">
              <li className=" ">
                <Link href={"/"}>
                  <p className="text-xl font-bold text-DBlue">Login</p>
                </Link>
              </li>
              <li className=" ">
                <Link href={"/"}>
                  <p className="text-xl font-bold text-DBlue">About Us</p>
                </Link>
              </li>
              <li className=" ">
                <Link href={"/"}>
                  <p className="text-xl font-bold text-DBlue">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
