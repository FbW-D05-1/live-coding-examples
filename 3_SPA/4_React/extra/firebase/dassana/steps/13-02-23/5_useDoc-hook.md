will be very similar to useCollection we will get single documents instead of full collection

create new hook useDocument.js

imports:

```js
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
```

```js
export const useDocument = (_collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // realtime data for individual document
  useEffect(
    () => {
      const ref = projectFirestore.collection(_collection).doc(id);

      //realtime db and each document as snapshot
      const unsub = ref.onSnapshot(
        (snapshot) => {
          //check if document exists
          if (snapshot.data()) {
            // firebase method to get data and get the id
            setDocument({ ...snapshot.data(), id: snapshot.id });
            setError(null);
          } else {
            setError("Project doesn't exist");
          }

          // getting the error
        },
        (err) => {
          setError(err.message);
        }
      );
      //cleanup function
      return () => unsub();
    },
    // we want to update when/if the collection or id changes
    [_collection, id]
  );

  //finally return values we need
  return { document, error };
};

```