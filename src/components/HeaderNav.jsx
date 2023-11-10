import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const HeaderNav = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    setOpen(true);
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    setOpen(false);
  };

  const router = useRouter();

  // Initialize the state for each page
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isCommunitiesActive, setIsCommunitiesActive] = useState(false);
  const [isEventsActive, setIsEventsActive] = useState(false);
  const [isAboutUsActive, setIsAboutUsActive] = useState(false);
  const [isBlogActive, setIsBlogActive] = useState(false);

  // Function to set the active state for each page
  const setActiveState = (page) => {
    setIsHomeActive(page === "/");
    setIsCommunitiesActive(page === "/communities");
    setIsEventsActive(page === "/events");
    setIsAboutUsActive(page === "/about_us");
    setIsBlogActive(page === "/blog");
  };

  useEffect(() => {
    setActiveState(router.pathname);
  
  }, [router.pathname]);

  return (
    <header className="lg:px-20 bg-[#FFFEF5] px-4 flex justify-between lg:py-12 py-6  border-b border-[#686764]">
      <div className="flex">
        <img src="./images/logo.png" alt="" />
        <p className="my-auto sm:hidden ml-4 text-lg">Ethereum Nigeria</p>
      </div>
      <div className="lg:w-[50%] flex justify-between">
        <div className="my-auto  lg:flex hidden justify-evenly items-center  w-full">
          <Link href={"/"}>
            <p
              onClick={() => setActiveState("Home")}
              className={`my-auto text-base rounded-lg hover:bg-[#9DCB99] hover:border-solid hover:p-2 ${
                isHomeActive ? "navside" : ""
              }`}
            >
              Home
            </p>
          </Link>

          <Link href="/communities">
            <p
              onClick={() => setActiveState("Communities")}
              className={`my-auto text-base rounded-lg  hover:bg-[#9DCB99] hover:border-solid hover:p-2 ${
                isCommunitiesActive ? "navside" : ""
              }`}
            >
              Communities
            </p>
          </Link>

          <Link href={"/events"}>
            <p
             onClick={() => setActiveState("events")}
             className={`my-auto text-base rounded-lg  hover:bg-[#9DCB99] hover:border-solid hover:p-2 ${
               isEventsActive ? "navside" : ""
             }`}
            >Events</p>
          </Link>

          <Link href={"/about_us"}>
            <p 
             onClick={() => setActiveState("about_us")}
             className={`my-auto text-base rounded-lg  hover:bg-[#9DCB99] hover:border-solid hover:p-2 ${
               isAboutUsActive ? "navside" : ""
             }`}
            >About Us</p>
          </Link>

          <Link href={"/blog"}>
            <p 
            onClick={() => setActiveState("blog")}
            className={`my-auto text-base rounded-lg  hover:bg-[#9DCB99] hover:border-solid hover:p-2 ${
              isBlogActive ? "navside" : ""
            }`}
            >Blog</p>
          </Link>
        </div>
        <div className="my-auto ml-8 flex ">
          <img
            className="lg:w-10 w-8 my-auto cursor-pointer"
            src="./images/sun.png"
            alt=""
          />

          <img
            onClick={() => openNav()}
            src="./images/icons/icons8-hamburger.svg"
            className="w-6 ml-5 cursor-pointer lg:hidden block my-auto"
            alt=""
          />
        </div>

        <div id="mySidenav" className="sidenav">
          <div className="w-[90%] mx-auto">
            <p
              onClick={() => closeNav()}
              className="float-right text-4xl cursor-pointer"
            >
              &times;
            </p>
            <div className="pt-20"></div>
            <Link href={"/"}>
              <p className="my-5 text-base">Home</p>
            </Link>

            <Link href={"/communities"}>
              <p className="my-5 text-base">Communities</p>
            </Link>

            <Link href={"/"}>
              <p className="my-5 text-base">Events</p>
            </Link>

            <Link href={"/about_us"}>
              <p className="my-5 text-base">About Us</p>
            </Link>

            <Link href={"/blog"}>
              <p className="my-5 text-base">Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
