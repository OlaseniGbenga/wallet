import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex  flex-col lg:flex-row lg:px-32 px-4  text-DBlue  items-center">
      <div>
        <img
          className="lg:w-[600px] md:w-[400px] sm:w-[300px]"
          src="Banner.png"
          alt=""
        />
      </div>
      <div className="sm:self-stretch">
        <p className="text-[1rem]  font-bold">Monitor Balance</p>
        <p className="text-[1rem] font-bold ">Control Smart Life</p>
        <p className="text-[1rem] font-bold">
          When life demands too much, let peyme save you with easier payment.
        </p>
        <div className="flex flex-row mt-4">
          <Link href={"/signupPage"}>
            <p className="p-3 sm:mt-3 sm:w-full rounded-md bg-DBlue lg:ml-2  px-6 text-white">
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
  );
}
