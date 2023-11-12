import React, { useState } from "react";
import Link from "next/link";
import { app } from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { actions } from "../../store/index";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const auth = getAuth(app);

  const dispatch = useDispatch();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      //create new user with email and password
      const signedIn = await signInWithEmailAndPassword(auth, email, password);
      dispatch(actions.setUserSignIn(signedIn.user.displayName));

      alert("successfully signed in");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4 flex flex-col md:items-center my-20">
      <div className="w-full md:w-[30rem] flex flex-col   gap-y-4 ">
        <p className="font-bold text-2xl">Sign-In</p>
        <form onSubmit={signIn} className="flex flex-col gap-y-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="pb-1 border-solid border-DBlue border-x-0 border-2 border-t-0  focus:outline-none"
            type="email"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            className=" pb-1 border-solid border-DBlue border-x-0 border-2 border-t-0  focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="text-white bg-DBlue rounded py-4 px-6 font-bold">
            Sign In
          </button>
        </form>
        <Link href={"/signupPage"}>
          <p className="">Don't have an account? signup here</p>
        </Link>
      </div>
    </div>
  );
}
