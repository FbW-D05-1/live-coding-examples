import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/config";
/** Real time dynamic fetch with sort(where) and ordering args: (collection string, query array, orderBy array) */
export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  // we put the array in useRef so we can use ist as an dependency array in useEffect
  const query = useRef(_query).current;

  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    // query
    if (query) {
      //...quary = ["user.id", "==", "project.assignedTo.id"] when we use it in where() method
      ref = ref.where(...query);
    }
    // ...orderBy = ["byTimestamp","decending"]
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    // order
    //Clean up so the useEffect will not stack over and over and will clean if the user was to fast with changing the Pages || onsnapshot realtime data base thats why it is in UseEffect nisted
    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        //Doc is the user Object in the db
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (err) => {
        setError("Could not fetch the data");
      }
    );
    return () => unsub();
  }, [collection, query, orderBy]);
  return { documents, error };
};
