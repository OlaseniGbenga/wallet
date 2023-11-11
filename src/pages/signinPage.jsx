import { Fragment } from "react";







import MainLayout from "@/layout/MainLayout";
import SignIn from "@/components/authetication/signIn";

export default function Home() {
  return (
    <Fragment>
      <title>Wallet</title>
      <MainLayout>
      <SignIn/>
      </MainLayout>
     
    
    
    </Fragment>
  );
}
