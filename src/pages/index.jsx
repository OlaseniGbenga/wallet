import { Fragment } from "react";
import { useSelector } from "react-redux";

import MainLayout from "@/layout/MainLayout";

import User from "./user";
import HomePage from "@/components/homepage";
import Testimonial from "@/components/testimonial";
import DownloadApp from "@/components/downloadApp";

export default function Home() {
  const userName = useSelector((state) => state.userAuth);

  return (
    <Fragment>
      <title>Wallet</title>
      <MainLayout>
        {userName ? (
          <User />
        ) : (
          <>
            <HomePage />
            <Testimonial
              img1="banner"
              img2="./banner"
              img3="./banner"
              img4="./banner"
            />
            <DownloadApp/>
          </>
        )}
      </MainLayout>
    </Fragment>
  );
}
