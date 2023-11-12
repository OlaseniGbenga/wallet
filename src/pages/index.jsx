import { Fragment } from "react";
import { useSelector} from 'react-redux';







import MainLayout from "@/layout/MainLayout";
import SignIn from "@/components/authetication/signIn";
import User from "./user";
import HomePage from "@/components/homepage";



export default function Home() {
  const userName = useSelector((state) => state.userAuth);
 

  return (
    <Fragment>
      <title>Wallet</title>
      <MainLayout>
{userName? <User/>: <HomePage/>}
      
      

      </MainLayout>
     
    
    
    </Fragment>
  );
}
