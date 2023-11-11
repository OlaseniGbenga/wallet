import { Fragment } from "react";







import MainLayout from "@/layout/MainLayout";
import SignUp from "@/components/authetication/signUp";

export default function Home() {
  return (
    <Fragment>
      <title>Wallet</title>
      <MainLayout>
      <SignUp/>
      </MainLayout>
     
    
    
    </Fragment>
  );
}
