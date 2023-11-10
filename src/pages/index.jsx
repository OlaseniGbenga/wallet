import { Fragment } from "react";





import User from "./user";

import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <Fragment>
      <title>Wallet</title>
      <MainLayout>
      <User/>
      </MainLayout>
     
    
    
    </Fragment>
  );
}
