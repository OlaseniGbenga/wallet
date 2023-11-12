import { Fragment } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import MainLayout from "@/layout/MainLayout";

export default function AbouUsome() {


  return (
    <Fragment>
      <title>Wallet</title>
      <MainLayout>
        <div className="flex  flex-col lg:flex-row lg:px-32 px-4  text-DBlue  items-center">
          <div>
            <img
              className="lg:w-[600px] md:w-[400px] sm:w-[300px]"
              src="Banner.png"
              alt=""
            />
          </div>
          <div className="sm:self-stretch">
           

            <p className="text-[1rem]  font-bold">Welcome to Peyme, where convenience meets security in the world of digital payments. We understand that in today's fast-paced life, time is of the essence, and simplicity is key. </p>
            <p className="text-[1rem]  font-bold">That's why we've created Peyme, a revolutionary payment app designed to make your transactions seamless and secure.
            </p>
            <div className="flex  mt-4 items-center justify-center ">
              <Link href={"/signupPage"}>
                <p className="p-3 sm:mt-3 sm:w-full rounded-md bg-DBlue lg:ml-2  px-6 text-white ">
                  Get Started
                </p>
              </Link>

              <Link href={"/aboutus"}>
                <p className="p-3 sm:mt-3 sm:w-full rounded-md bg-DBlue lg:ml-2  px-6 text-white ml-4">
                  Learn More
                </p>
              </Link>
              
            </div>
          </div>
        </div>
      </MainLayout>
    </Fragment>
  );
}
