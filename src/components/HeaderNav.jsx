import Link from "next/link";
import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config/firebase";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LogOff from "./authetication/logoff";

export default function HeaderNav() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isMavVisible, setMavVisibility] = useState(true);

  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
    setMavVisibility(!isMavVisible);
  };

  const auth = getAuth(app);
  //check if a user  is signed in to display signin or logoff nav
  const [signed, setSigned] = useState(null);

  useEffect(() => {
    const isSignedIn = async () => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setSigned(user);
          } else {
            setSigned(null);
          }
        });
      } catch {}
    };
    isSignedIn();
  }, [signed]);

  return (
    <header className="">
      <div className="">
        {/* nav for lg screen */}
        <div className="  hidden   bg-LBlue  md:flex justify-between lg:px-32 px-4 py-6 md:py-12">
          <Link href={"/"}>
            <img
              className="w-[5rem] md:w-[7rem]"
              src="./favicon.png"
              alt=""
            ></img>
          </Link>
          <ul className=" text-Black flex  gap-x-6   ">
            <li className=" ">
              {/* conditionally displaying signin and log off */}
              {!signed ? (
                <Link href={"signinPage"}>
                  <p className="text-xl font-bold text-DBlue">Sign In</p>
                </Link>
              ) : (
               <LogOff  className="text-xl font-bold text-DBlue"></LogOff>
                  // <p onClick={LogOff} className="text-xl font-bold text-DBlue">Log Off</p>
              
              )}
            </li>
            <li className=" ">
              <Link href={"/aboutus"}>
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
          <div className="md:hidden  flex justify-between lg:px-32 px-4 py-8  bg-LBlue">
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
          <div className=" md:hidden  z-10 fixed top-0 left-0  h-screen w-full bg-LBlue lg:px-32 px-4">
            <span onClick={toggleNavVisibility} className="">
              <FontAwesomeIcon className="text-[2rem]" icon={faXmark} />
            </span>
            <ul className=" text-Black flex flex-col  gap-x-3  h-screen w-full  ">
            <li className=" ">
                <Link href={"/"}>
                  <p className="text-xl font-bold text-DBlue">Contact</p>
                </Link>
              </li>
              <li className=" ">
                <Link href={"/signinPage"}>
                  <p className="text-xl font-bold text-DBlue">Sign In</p>
                </Link>
              </li>
              <li className=" ">
                <Link href={"/aboutus"}>
                  <p className="text-xl font-bold text-DBlue">About Us</p>
                </Link>
              </li>
             
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
