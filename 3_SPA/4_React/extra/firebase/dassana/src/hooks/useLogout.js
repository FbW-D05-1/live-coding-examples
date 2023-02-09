import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  //a state to check if the data is waiting for the data
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // log out request
  /** A Function to check if the user Loggedin and saved in the db or not */
  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // To get the current user id
      const { uid } = projectAuth.currentUser;
      // to update the user stauts on the db
      await projectFirestore.collection("users").doc(uid).update({
        online: false,
      });

      //Signs out the current user form firebase, if logged out the user at the start, we will not get the user uid
      await projectAuth.signOut();
      //assign the dispatch for the useAuthContext
      dispatch({ type: "LOGOUT" });

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

  return { logout, error, isPending };
};
