# Creating our first server with Express


let's create a new file and call it server.js
and then let's open our terminal and now initialize with npm:
```bash
npm init
```

Now we have our package.json and server.js

Next we will install express, always check [docs](https://expressjs.com/en/starter/installing.html) since stuff can change:
```bash
npm i express
```

Once it's done there should be node_modules and express "dependencies" in package.json

Next head to server.js and read the comments there

## Cannot Get /

Why do we get "CANNOT GET /":

Well, it means that when our browser is trying to get in touch with our server on the port 3000, it's not able to get anything back. Now we have to figure out how can we write some code so that our server responds when a browser is making a request to our server. We have to send the browser some information, right, to display. We will do that next.