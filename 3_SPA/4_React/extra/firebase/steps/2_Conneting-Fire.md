# Connecting to Firebase

We've created a Firebase project, which is going to act as the backend to our React application.

Now the frontend is the React application we've been working on before(recipe-app).

Le Cook and what we need to do is connect our front end application with the backend Firebase project so they can communicate and we can reach out to the database and grab the data. So the first step in doing that is to install the Firebase package locally into our React project.

So to do that, open up a terminal.
Now we're going to install a specific version of Firebase. Make sure your version is the same as mine.(Firebase is currently at 9 but we don't have much time left so we will use the one i know)
Make sure you're in the correct directory at the root of the project and then type:
```bash
npm install firebase@8.5
```

If you want to use version nine, you can do, but it is going to be slightly different because it has a more modular approach. So read docs? or ask chatgpt.


So whilst it's installing, we need to get our project configuration object for the project that we set up on Firebase.

This configuration object includes a Project ID so we can connect to this specific backend Firebase project. If you want them hidden use .env react comes with it from scratch. but for now, we need to register a new frontend app for this project to get that configuration object.

So to do that, just click on the react fragment looking icon(</>) when you hover tooltip will call it _Web_, and it's going to ask for a name for the web app.

Now, this name is not the same thing as the name for the Firebase Project. We've already given that name.

What this is asking for is a name of the frontend application that we're going to connect now to our Firebase project.

So you can call it whatever you want. I'm going to call it El Cooker React App, also We will not check the to set up Firebase hosting. We can do that later. 

Click Register App.

After we've done that, it should show us how to use Firebase in the frontend now.

We have already installed so next we see is all the config object that we're going to need later on. But don't do anything with this just yet. Just click on continue to console. And you can see now that we have one app right at the very top registered for this backend.

So if we click on that and then go to the cog icon over to the right, then scroll down a bit we will find the same object we need. Click on config radial check then copy it.

So now we can use that config object to connect from our application over to the backend.

Now, in order to do this, what I like to do is in the source(src) folder, create a new folder called firebase

inside that create a new file called config.js

Inside the config.js , we have to import Firebase that we just installed:

```js
import firebase from "firebase/app";
import "firebase/firestore";
```

next paste in the config you copied from firebase:

```js
const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,

  appId: process.env.REACT_APP_APPLICATION_ID

};

```

next below that we will initialize firebase:

```js
// init firebase

firebase.initializeApp(firebaseConfig);
```

So this method that connects to our Firebase backend for us.

And then after that, once it has made that connection, we can use any services that we want like the firestore.

We also have to initialize those services.

So let's do another initialize services for firestore like so: 

```js
// init services

const recipeStore = firebase.firestore();
```

The next thing we're going to do is export from this file and we might use in another file in the future:

```js
//export

export { recipeStore };
```

So when our application runs, this __firebase.initializeApp(firebaseConfig);__ is going to connect us to our Firebase backend. And once it's done that, we also have the __firebase.firestore();__ service initialized and we use it's constant in the future in all the files to interact with the firestore or database.