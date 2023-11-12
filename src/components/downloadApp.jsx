import React from "react";
import Link from "next/link";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faAppStore } from "@fortawesome/free-brands-svg-icons";

export default function DownloadApp() {
  return (
    <div className="flex flex-col  items-center mt-[6rem] lg:px-32 px-4">
      <p className="text-center text-[2rem] font-bold mb-[1rem]'>Get App On Apple Store or Play Store">
        {" "}
        Download App On Apple Store or Play Store
      </p>
      <div className="flex md:flex-row flex-col md:justify-center sm:w-full">
        <Link href={"/"}>
          <p className="p-3 sm:mt-3 sm:w-full rounded-md bg-DBlue lg:ml-2 text-center px-6 text-white">
            <FontAwesomeIcon className="text-2xl text-white" icon={faPlay} />{" "}
            PlayStore
          </p>
        </Link>
        <Link href={"/"}>
          <p className="p-3 sm:mt-3 sm:w-full rounded-md bg-DBlue md:ml-4  px-6 text-white  text-center">
            <FontAwesomeIcon
              className="text-2xl text-white text-center"
              icon={faAppStore}
            />{" "}
            Apple Store
          </p>
        </Link>
      </div>
    </div>
  );
}
