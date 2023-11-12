import React, { useState } from "react";

import { app } from "../../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// firestore
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";

// redux
import { useDispatch } from "react-redux";
import { actions } from "../../store/index";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  const isFormValid = () => {
    return (
      email.trim() !== "" &&
      password.trim() !== "" &&
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      phoneNumber.trim() !== ""
    );
  };

  const auth = getAuth(app);
  const db = getFirestore(app);

  const dispatch = useDispatch();
  const signup = async (e) => {
    e.preventDefault();
    try {
      // Check if all fields are filled before proceeding
      if (!isFormValid()) {
        alert("Please fill in all fields");
        return;
      }
      //create new user with email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with additional details
      await updateProfile(auth.currentUser, {
        displayName: firstName,
      });

      dispatch(actions.setUserSignIn(user.displayName));

      // Save additional user details to Firestore
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });

      alert("successfully signed");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4 flex flex-col md:items-center my-20">
      <div className="w-full md:w-[30rem] flex flex-col   gap-y-4 ">
        <p className="font-bold text-2xl">Sign-up</p>
        <form onSubmit={signup} className="flex flex-col gap-y-4">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="pb-1 border-solid border-DBlue border-x-0 border-2 border-t-0  focus:outline-none"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="pb-1 border-solid border-DBlue border-x-0 border-2 border-t-0  focus:outline-none"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="pb-1 border-solid border-DBlue border-x-0 border-2 border-t-0  focus:outline-none"
            type="text"
            placeholder="Phone no"
          />
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
