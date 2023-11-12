import { Fragment } from "react";
import React from 'react';
import { app } from '../../config/firebase';
import { useRouter } from 'next/router';

// firebase
import { getAuth, signOut } from 'firebase/auth';

// redux
import { useDispatch } from 'react-redux';
import {actions} from '../../store/index';

export default function LogOff({ className }) {
  const Auth = getAuth(app);
  const router = useRouter();
  const dispatch = useDispatch();

  const logOff = async () => {
    try {
      await signOut(Auth);
      dispatch(actions.setUserSignOut())
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



