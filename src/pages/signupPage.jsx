import { Fragment } from "react";







import MainLayout from "@/layout/MainLayout";
import SignUp from "../components/authetication/signup";

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
