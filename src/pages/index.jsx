import { Fragment } from "react";







import MainLayout from "@/layout/MainLayout";
import SignIn from "@/components/authetication/signIn";
import User from "./user";

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
