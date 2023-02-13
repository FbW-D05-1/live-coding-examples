
#  Projekterstellung:

  
Um neue Projekte zu unserer Application hinzuzufügen, gehen wir zunächst zum **Create.jsx-Component**. Dieses Component wird das nötige Interface für den Input der User bereitstellen, über den besagte User neue Projektinformationen übermitteln können. *~ Die Technik Thaddäus! Die Technik! ~*

  

```jsx

import  { useState }  from  "react";

  

//styles

import  "./Create.css";

  

export  default  function  Create()  {

const  [name,  setName]  =  useState("");

const  [details,  setDetails]  =  useState("");

const  [dueDate,  setDueDate]  =  useState("");

const  [category,  setCategory]  =  useState("");

const  [assignedUsers,  setAssignedUsers]  =  useState([]);

  

const  handleSubmit  = (e) => {

e.preventDefault();

console.log(name,  details,  dueDate);

};

return (

<div  className="create-form">

<h2  className="page-title">Create a new project</h2>

<form  onSubmit={handleSubmit}>

<label>

<span>Project Name:</span>

<input

type="text"

required

onChange={(e)  =>  setName(e.target.value)}

value={name}

/>

</label>

<label>

<span>Project Details:</span>

<textarea

type="text"

required

onChange={(e)  =>  setDetails(e.target.value)}

value={details}

/>

</label>

<label>

<span>Set due date:</span>

<input

type="date"

required

onChange={(e)  =>  setDueDate(e.target.value)}

value={dueDate}

/>

</label>

<label>

<span>Project Category:</span>

{/* category select later */}

</label>

<label>

<span>Assigned to:</span>

{/* assignee select later */}

</label>

<button  className="btn">Add new Project</button>

</form>

</div>

);

}

  
  

```

  

```css

.create-form  {

max-width:  600px;

}

```

  

##  Using Select

  
Um den Usern eine mühelos und intuitiv bedienbare Möglichkeit zur Auswahl von Optionen zu bieten, verwenden wir das "Select"-Element. Dazu installieren wir zunächst die erforderlichen Packages oder Libraries:

  

```bash

npm i  react-select

```

  

import:

```jsx

import  Select  from  "react-select"

```

Neues Array mit Kategorien:

  

```js

const  categories  =  [

{value:  'development',  label:  'Development'},

{value:  'design',  label:  'Design'},

{value:  'sales',  label:  'Sales'},

{value:  'marketing',  label:  'Marketing'},

]

```

  
Jetzt konzentrieren wir uns darauf, die Kategorieoptionen innerhalb des **Create.jsx-Components** zu modifizieren. Das wird den Usern erlauben, ihre Projekte einfach zu kategorisieren und sicherzustellen, dass sie innerhalb der Application ordnungsgemäß organisiert sind.

  
  

```jsx

<label>

<span>Project Category:</span>

<Select

options={categories}

onChange={(option)  =>  setCategory(option)}

/>

</label>

```

  

```js

console.log(name, details, dueDate, category.value);

```

  

##  User zuweisen:

  
Um User zu Projekten in unserer Application zuzuweisen, müssen wir den **useCollection-Hook** importieren. Dadurch können wir Userdaten bequem und effizient aufrufen und manipulieren, wenn wir Projektaufträge zuweisen:
  

```jsx

import  {useCollection}  from  "../../hooks/useCollection"

```

  

```jsx

const  {  documents  }  =  useCollection("users");

console.log(documents);

```

  
Um den Wert und das Label für jeden User bei der Zuweisung von Projektaufträgen richtig darzustellen, nutzen wir den **useState-Hook**. Durch diesen können wir sicherstellen, dass unser Component während jedem Schritt des Prozesses eine klare und präzise Darstellung des aktuellen States beibehält.


  

```jsx

const  [users,  setUsers]  =  useState([]);

```

  
Um die Userliste dynamisch bei Änderungen in der Userkollektion zu aktualisieren, **mappen wir die Userdaten innerhalb des useEffect-Hooks**. Auf diese Weise kann unser Component auf Änderungen in der Userkollektion reagieren und diese Updates in Echtzeit anzeigen.



```jsx

  

useEffect(()  =>  {

if (documents) {

const  options  =  documents.map((user) => {

return { value:  user,  label:  user.displayName };

});

setUsers(options);

}

},  [documents]);

  

```

  

```jsx

<label>

<span>Assigned to:</span>

<Select

options={users}

onChange={(option)  =>  setAssignedUsers(option)}

isMulti

/>

</label>

```


```js

console.log(name, details, dueDate, category.value, assignedUsers);

```

Fin. Gute Arbeit 🌞
