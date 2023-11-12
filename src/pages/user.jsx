import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector} from 'react-redux';



import {
  faUser,
  faShield,
  faEye,
  faIdBadge,
  faMoneyBillTransfer,
  faBuildingColumns,faSquarePhone,faSignal,faBaseball, faTelevision, faChessKing, faRefresh, faLightbulb, faChildren
} from "@fortawesome/free-solid-svg-icons";


export default function User() {

    const userName = useSelector((state) => state.userAuth);
    console.log("user name ", userName);
  return (
    <Fragment>
      <title>Wallet</title>
      
      <div className="mt-[3rem] flex flex-col mx-6 sm:mx-1  items-center">
        <section className="flex flex-row justify-between lg:w-[40rem] w-full ">
          <p className="sm:text-xl">
            {" "}
            <FontAwesomeIcon className="mr-[1rem] text-DBlue" icon={faUser} />
            Hi {userName}
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
            <FontAwesomeIcon
              className="text-[2rem] text-DBlue mb-2 "
              icon={faIdBadge}
            />
            <p>To Peyme</p>
          </div>

          <div className="flex flex-col">
            <FontAwesomeIcon
              className="text-[2rem] text-DBlue mb-2 "
              icon={faBuildingColumns}
            />
            <p>To Bank</p>
          </div>

          <div className="flex flex-col">
            <FontAwesomeIcon
              className="text-[2rem] text-DBlue mb-2"
              icon={faMoneyBillTransfer}
            />
            <p> Withdraw</p>
          </div>
        </section>

        <section className=" mt-6 py-4  px-8  sm:px-2 rounded flex flex-col  justify-between lg:w-[40rem] w-full bg-LBlue gap-y-8">
          <p className="font-bold text-lg">Coming soon</p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2 "
                icon={faSquarePhone} />
              <p>Airtime</p>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2 "
                icon={faSignal}
              />
              <p>Data</p>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2"
                icon={faBaseball}
              />
              <p> Betting</p>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2"
                icon={faTelevision}
              />
              <p> TV</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2 "
                icon={faChildren}
              />
              <p>Play4aChild</p>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2 "
                icon={faChessKing}
              />
              <p>Invest</p>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2"
                icon={faRefresh}
              />
              <p> Refer & Earn</p>
            </div>

            <div className="flex flex-col">
              <FontAwesomeIcon
                className="text-[2rem] text-DBlue mb-2"
                icon={faLightbulb}
              />
              <p> More</p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
