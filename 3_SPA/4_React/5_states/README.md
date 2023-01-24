# Intro to State & useState

## What is State?

Component data which may change over time.
For example we have a To Do list on our web page and the list of To Do's might be a react component, so React would be outputting the To Do's in the component template and those To Do's would essentially be data that the component uses. Now if we were to add a new To Do, then the To Do's data inside this component changes and react responds to that change in data by adding the new To Do to the template that is rendered to the DOM. Likewise, if we were to delete a To Do by clicking a button, then again, the To Do's data in that Component would change and again, React would respond to that change by removing that To Do from our template.
So in this example, the To Do's data inside the component would be known as component states.

TL;DR => That is data inside the component, which is always **_CHANGING_**, and you could call that bit of state something To Do's

Another examples might be Dropdown, Input, Loading

states or better said initial states could be: **empty string, boolean, number or any other data types including arrays and objects**