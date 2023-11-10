import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import {
  faUser,
  faShield,
  faEye,
  faIdBadge,faMoneyBillTransfer,faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Fragment>
      <title>Wallet</title>
      <div className="mt-[3rem] flex flex-col mx-6 sm:mx-1  items-center">
        <section className="flex flex-row justify-between lg:w-[40rem] w-full ">
          <p className="sm:text-xl">
            {" "}
            <FontAwesomeIcon className="mr-[1rem] text-DBlue" icon={faUser} />
            Hi, User
          </p>
        </section>
        <section className="mt-6 py-4 px-8 sm:px-2 rounded bg-DBlue text-white flex flex-row justify-between lg:w-[40rem] w-full ">
          <div className=" flex flex-col gap-y-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faShield} /> Available Balance{" "}
              <FontAwesomeIcon icon={faEye} />
            </p>
            <p className="sm:text-2xl">$55.78</p>
          </div>
          <div className=" flex flex-col gap-y-3">
            <p>transactions</p>
            <button className="bg-white text-DBlue p-1 rounded-3xl">
              +Add Money
            </button>
          </div>
        </section>
        <section className=" mt-6 py-4  px-8  sm:px-2 rounded flex justify-between lg:w-[40rem] w-full bg-LBlue">
          <div className="flex flex-col">
            
            <FontAwesomeIcon className="text-[2rem] text-DBlue mb-2 " icon={faIdBadge} />
            <p>To Peyme</p>
          </div>

          <div className="flex flex-col">
            
          <FontAwesomeIcon className="text-[2rem] text-DBlue mb-2 " icon={faBuildingColumns} />
            <p>To Bank</p>
          </div>

          <div className="flex flex-col">
            
          <FontAwesomeIcon className="text-[2rem] text-DBlue mb-2" icon={faMoneyBillTransfer} />
            <p> Withdraw</p>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
