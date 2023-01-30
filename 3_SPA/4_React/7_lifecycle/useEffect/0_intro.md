## First steps

(if in CRA)remove everything unecessary duh

then we will use JSON server package since we want our own API but can't yet create one since we don't really know backend currently.

global installation for JSON server

```bash
npm install -g json-server
```

## Step two create JSON File
somewhere in root create our json file it will act as our local database

in root create folder data
add a file named db.json
inside paste this so we have some data to fetch

```json
{
    "trips": [{
            "title": "2 Night Stay in Bangkok",
            "price": "$180"
        },
        {
            "title": "3 Night Stay in New York",
            "price": "$290"
        },
        {
            "title": "5 Night Stay in Poland",
            "price": "$420"
        },
        {
            "title": "3 Night Stay in DifneyLand",
            "price": "$3252"
        }
    ]
}
```

## Run json server
we will run the server so we can fetch with command named
(make sure you're in project dir)

```bash
json-server --watch ./data/db.json
```
or if you're already inside your data folder
```bash
json-server --watch db.json
```

so now if we open it in browser or postman we will get fetch results


## Env's and how to secure our api endpoints and keys
React already has everything preinstalled for our enviromentals

Firstly in our Root we will create a file called .env , yes with a dot.
Inside now we can store multiple variables.

Rules for setting env variables:
1. Everything must be uppercase
2. Snake_Case
3. Value comes after equals(=) sign
4. Strings don't start and end in quotations

For example it will loke something like this:
* API_BASE_URL=http://localhost:3000
* API_KEY=1wdsadcsacc2145
* FIREBASE_CONNCETION_KEY=12443253qweq


Now if we use Vite our enviromentals have to start with => VITE_

Example:
* VITE_API_BASE_URL=http://localhost:3000

If we use CRA our enviromentals have to start with => REACT_ 

Example:
* REACT_API_BASE_URL=http://localhost:3000

### How to use env's in our code
Our env's will be globally available across every file so you can store it in a new variable or just use it with special command for example:

VITE
1. const url = import.meta.env.VITE_API_BASE_URL;

* like this we can use url our localhost:3000

2. or directly in **await fetch(import.meta.env.VITE_API_BASE_URL)**

CRA
1. const url = process.env.REACT_API_BASE_URL;

* like this we can use url our localhost:3000

2. or directly in **await fetch(process.env.REACT_BASE_URL)**

**WARNING: If you use npm run build all of your keys will be converted and publicly available so if you really wan't to build your app to vanilla html and js please beware**

Incase you publish your CRA application don't worry if you're using vercel or any other provider you can manually set up all of your env's there

With Vite on the other hand read mf docs since I haven't yet personally published any Vite Apps

## Why we need useEffect ?

it's a special hook for fetching

first we fetch without hook

```jsx
import { useState } from "react";

export default function VanillaTripList() {
  const [trips, setTrips] = useState([]);

  console.log(trips);
  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((json) => setTrips(json));
  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}
```
With this example we will Get infinite Loop and it will just keep fetching over and over and over...
The problem is how React works when we set it to State the component gets reavulated / reruns

this is why we need useEffect

useEffect is a hook that allows us to perform component side effect => which doesn't mean that we want to rerun our component each time

We don't need to store it we can just invoke it since we are using "Promises", the empty array is called dependency array we will talk about it later on. For now if you don't pass it it will be infinite loop again

```jsx
 useEffect(() => {
    fetch("http://localhost:3000/trips")
       .then((response) => response.json())
       .then((json) => setTrips(json));
   }, []);
```

async await version

```jsx
const fetchTrips = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTrips(data);
    } catch (e) {
      console.log(e, e.message);
    }
  };

  useEffect(() => {
    fetchTrips();
    console.log(trips);
  }, []);
```

Or IIFE

```jsx
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrips(data);
      } catch (e) {
        console.log(e, e.message);
      }
    })();
    console.log(trips);
  }, []);
```