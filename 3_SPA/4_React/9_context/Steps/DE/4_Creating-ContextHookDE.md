
#  Erstellen eines Custom-Context-Hooks

*(custom = beuntzerdefiniert)*
  
Wir verbrauchen den Context im  Navbar-Component. Die Art unseres Verbrauchs ist vollkommen in Ordnung. Wir können das auch weiterhin tun, wenn wir wollen.

Was ich jedoch gerne mache, ist, meinen **Context-Consumer** (-Verbraucher) in ein **Custom-Hook** zu wrappen, und das wird zwei Dinge für uns tun:

* Erstens, reduziert es die Menge an Code, die wir in unserem Component schreiben, wenn wir den Context verwenden.

* Zweitens, wird es uns ermöglichen, zusätzliche Funktionen innerhalb des Hooks hinzuzufügen.

Erstellen wir einen neuen Hook in unserem *hooks* Ordner und denkt daran, dass der Hook-Name mit ***use*** beginnen muss, also nennen wir ihn ***useTheme.js***.

Innerhalb dieser Datei können wir nun diesen Custom-Hook erstellen:


```js
import  { useContext }  from  "react";

import  { ThemeContext }  from  "../context/ThemeContext";

  
export  const  useTheme  =  ()  =>  {

// Wir erhalten wieder den Context, aber da wir nur ein Ergebnis haben, brauchen wir es nicht destrukturieren.

const  context  =  useContext(ThemeContext);
  
// Jetzt wird der Context undefined sein, wenn wir versuchen ihn außerhalb seines Scopes zu verwenden.

// Stellt euch vor, anstatt des kompletten App-Components, haben wir mit dem Theme-Provider nur ein, zwei Components gewrappt.

if (context  ===  undefined) {

throw  new  Error("useTheme() must be used inside a ThemeProvdider");

}

  
return  context;

};
```


Jetzt können wir diesen Hook überall verwenden und brauchen nur einen einzigen Import UND wir haben eine zusätzliche Fehlerprüfung, nice.

Gehen wir zurück zur NavBar und ändern die Dinge:


```jsx
// Vergesst nicht, zu importieren:

import  { useTheme }  from  "../hooks/useTheme";



export  default  function  Navbar()  {

const  {  color  }  =  useTheme();
```


Und die Navbar ist immer noch hosamPink 💘

Als nächstes werden wir **Reducer** kennenlernen. *aka React Souls*
