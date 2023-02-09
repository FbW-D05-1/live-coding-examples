import { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  //An art from clean up if the user changed form sign up to sign in without sending the data
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  /** A Function to send the user data to the db */
  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      //createUserWithEmailAndPassword is form Firebase to create a user with the Email and password |https://firebase.google.com/docs/auth/web/password-auth|
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      /** a check if the response from the server is empty */
      if (!res) {
        throw new Error("Could not complete signup");
      }
      //Path to where or Pictures will be saved
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;

      /** put will edit the user Info and add a new one if there is nothing */
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      //https://firebase.google.com/docs/storage/web/download-files for more info
      const imgUrl = await img.ref.getDownloadURL();

      await res.user.updateProfile({ displayName, photoURL: imgUrl });
      // A new Collection will be created when we push the data to Firebase
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      //Dispatch type and payload for the useAuthContext
      dispatch({ type: "LOGIN", payload: res.user });

      //If the user cancelled the signup by going to other pages the process will be cancelled
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (isCancelled) {
        setIsPending(false);
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
