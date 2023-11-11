import { Fragment } from "react";
import React from 'react';
import { app } from '../../config/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function LogOff({ className }) {
  const Auth = getAuth(app);
  const router = useRouter();

  const logOff = async () => {
    try {
      await signOut(Auth);
      alert('You have logged off.');
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <button className={className} onClick={logOff}>Log Off</button>
      </Fragment>
  );
}



