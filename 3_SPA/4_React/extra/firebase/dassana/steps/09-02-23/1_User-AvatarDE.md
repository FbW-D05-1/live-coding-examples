#  User-Avatar hinzufügen:

  
Um das Profilbild und den Usernamen in der Sidebar anzuzeigen, erstellen wir ein neues Component, namens **Avatar.jsx**. Durch die Erstellung eines separaten Components dafür, können wir es einfach in anderen Teilen unserer Application wiederverwenden, was die Konsistenz und Effizienz unseres Codes verbessert, nice.


  

```jsx

import  "./Avatar.css";

  

export  default  function  Avatar({  src  })  {

return (

<div  className="avatar">

<img  src={src}  alt="user avatar"  />

</div>

);

}

  

```

```css

.avatar  {

display:  inline-block;

width:  50px;

height:  50px;

border-radius:  50%;

overflow:  hidden;

}

  

.avatar  img  {

width:  100%;

height:  100%;

}

```
Jetzt kehren wir zum Sidebar-Component zurück. Durch die Einbindung des Avatar-Components können wir das visuelle Erscheinungsbild und die Funktionalität der Sidebar für unsere User verbessern.

  

```jsx

import  Avatar  from  "./Avatar";

import  { useAuthContext }  from  "../hooks/useAuthContext";

```

  

```jsx

const  {user}  =  useAuthContext()

```

  
  

```jsx

<div  className="user">

<Avatar src={user.photoURL}  />

<p>Hey {user.displayName}!</p>

</div>

```
