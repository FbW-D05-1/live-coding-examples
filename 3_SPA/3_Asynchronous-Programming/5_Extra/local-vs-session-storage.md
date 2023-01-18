# Local vs Session - Storage


## The Main Differences
localStorage and sessionStorage are both types of web storage that allow you to store key-value pairs of data in a user's browser. However, they have some differences in terms of how the data is stored and the lifetime of the data:

    localStorage stores data indefinitely, until it is explicitly removed by the application or the user. This means that data stored in localStorage will persist even if the user closes the browser or restarts their computer.

    sessionStorage, on the other hand, stores data for a single session (i.e. until the browser is closed). When the user closes the browser, the data stored in sessionStorage is deleted.

Another difference is that localStorage and sessionStorage are separate, so data stored in localStorage under a specific key is not accessible in sessionStorage and vice versa.

Both localStorage and sessionStorage can be used to store strings and JavaScript objects can be stringified and parsed to store objects. And the size limit per domain is around 5-10mb. Fun Fact: In JS strings are Always 2 bytes per character.

So a common use case for localStorage might be to store a user's preferences or settings, which you want to persist even if the user closes the browser. sessionStorage might be used for temporary data that you only need to store for the duration of a single browsing session, such as a shopping cart for an online store.


## Use Cases and Examples

Here are some examples of how localStorage and sessionStorage might be used in a web application:

localStorage example:

    A user logs into a web-based email application and is presented with a theme picker. They select a theme and then close the browser. The next time they open the browser and log back into the email application, the same theme is still applied. This is because the theme selection is stored in localStorage.

    A to-do list application stores the list items in localStorage so that when the user closes the browser and comes back later, the list items are still there and the user can pick up right where they left off.

sessionStorage example:

    A user is shopping on an e-commerce website and adds items to a shopping cart. The items in the cart are stored in sessionStorage so that if the user closes the browser or navigates away from the website, the items in the cart will be deleted.
    When a user logs into a site, the token is stored in session storage and the server checks that token on each request, to see if the user is logged in or not. And when the user logouts or closes the tab, the sessionStorage is destroyed, so the user would need to login again.

Both localStorage and sessionStorage can be accessed and modified via the localStorage and sessionStorage objects, respectively, which are properties of the window object in JavaScript.

For example, to store a key-value pair in localStorage, you can use code like this:
```js
localStorage.setItem("key", "value");
```
And to retrieve a value from localStorage:
```js
let value = localStorage.getItem("key");
```
similar methods are available for sessionStorage, like setItem() and getItem().


### Storing data in localStorage:

```js
// Store a key-value pair in localStorage
localStorage.setItem("username", "JohnDoe");

// Retrieve a value from localStorage
let username = localStorage.getItem("username");
console.log(username); // "JohnDoe"

// Storing an object in localStorage
let user = {
    name: "JohnDoe",
    age: 30
};
localStorage.setItem("user", JSON.stringify(user));

// Retrieve the object from localStorage
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser); // {name: "JohnDoe", age: 30}
```

### Storing data in sessionStorage:

```js
// Store a key-value pair in sessionStorage
sessionStorage.setItem("cart", "[{'product':'book','quantity':3}]");

// Retrieve a value from sessionStorage
let cart = sessionStorage.getItem("cart");
console.log(cart); // "[{'product':'book','quantity':3}]"

// Storing an object in sessionStorage
let purchase = {
    product: "book",
    quantity: 3
};
sessionStorage.setItem("purchase", JSON.stringify(purchase));

// Retrieve the object from sessionStorage
let storedPurchase = JSON.parse(sessionStorage.getItem("purchase"));
console.log(storedPurchase); // {product: "book", quantity: 3}
```

## What can be stored

It is important to keep in mind that localStorage and sessionStorage can only store strings, so you will need to use JSON.stringify() to convert JavaScript objects to strings before storing them and JSON.parse() to convert them back to objects after retrieving them.
Also, it is a good practice to check for the support of web storage before using it in older browsers and also check for browser's private mode.

Example storing Array into our localStorage and retrieving it back:

```js
const names = ['Ali', 'John', 'Svenjamin'];

localStorage.setItem("names", JSON.stringify(names));

//Retrieving
const storedNames = JSON.parse(localStorage.getItem("names"));

console.log(storedNames) //['Ali', 'John', 'Svenjamin']
```


## Bracket and Dot - Notation

Since local-session Storage are Objects you can access your values via bracket and/or dot notation

```js
const userName = 'Svenjamin';
localStorage.setItem("name", userName);

// both of these will return our values
console.log(localStorage.name); //'Svenjamin'
console.log(localStorage['name']); //'Svenjamin'

// same with session
sessionStorage.setItem("name", userName);

console.log(sessionStorage.name);//'Svenjamin'
console.log(sessionStorage['name']);//'Svenjamin'
```