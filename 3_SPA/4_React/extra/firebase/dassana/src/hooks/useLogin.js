import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  //An art from clean up if the user changed form Login to any other thing without sending the data
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      // login
      //https://firebase.google.com/docs/auth/web/password-auth for the signInWithEmailAndPassword
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      await projectFirestore.collection("users").doc(res.user.uid).update({
        online: true,
      });
      // Dispatch type and payload for the Auth Context
      dispatch({ type: "LOGIN", payload: res.user });

      //If canceld the pending will be False and the Error will be null
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }

      // Catch if something went wrong or the User canceld the Login before the fetch is Finished
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
  return { login, isPending, error };
};
