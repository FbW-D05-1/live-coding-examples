# Wiederholung


### IIFE
Immediately invoked Function Expression aka Self-Executing Anonymous Function

```js
(function (){

// your code here

})()

(()=>{

 // your code here

})()

(async()=>{

// your code here

})()
```

### Selecting Single element from a document

```js

const elName = document.getElementById('idName');

const name = document.querySelector('.className');

```

### Element properties

```js

name.style.font = 'bold';

name.innerText = 'Hello, world';

elName.innerHTML = '<a>Ola</a>;

a.href = 'http://example.com'

img.src = 'http://example.'

const firstName = input.value;

elName.setAttribute('href', 'http://example.example')

elName.setAttribute('target', '_blank');

elName.removeAttribute("target");

elName.classList.add('active');

elName.classList.remove('active');

name.setAttribute('required');

```

### Events

```js
click
mousover
mouseleave
keyup
touch



change
keypressed
keydown
mousover
animationend
transitionend
```

### Promise States

* pending
* fullfilled
* rejected


### HTTP methods

* GET
* POST
* DELETE
* PUT




### Self Learning
> JavaScript Engines => V8, SpiderMonkey, Chakra

> What is the difference between native objects and host objects?

> IIFE