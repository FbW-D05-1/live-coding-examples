#  Context und Provider erstellen

 
Von nun an werden wir React-Context verwenden, um eine Art Themenauswahl zu erstellen, mit der ein User ein Farbthema für die Websites auswählen kann. Und unser Context wird diesen Farbwert speichern, auf den dann alle Components unserer Application zugreifen können.

Als Erstes müssen wir also einen Context und einen Context-Provider erstellen, der unsere Application umfasst und ihr den Context-Wert zur Verfügung stellt.

Um dies zu tun, erstellen wir eine brandneue Datei in einem neuen Ordner in unserem src.-Ordner.

> Ich werde meinen Ordner Context nennen und die Datei ThemeContext.js
> Auch hier gilt: Nennt sie, wie ihr wollt, aber es muss immer einen Sinn ergeben.

Und in dieser Datei können wir nun unseren Context und Context-Provider erstellen:

> Hinweis: Es ist möglich, mehrere Contexts zu haben!

  
```js
// Zuerst aus React importieren:

import  { createContext }  from  "react";

  

// Dies gibt dann ein neues Context-Object zurück, das nun in ThemeContext gespeichert ist.

export  const  ThemeContext  =  createContext();
```


Und auf diesem Context-Object befindet sich ein **Context-Provider-Component**, auf das wir dann wie folgt zugreifen können:

  
```jsx
<ThemeContext.Provider>

// Damit soll ein Component bereitgestellt werden, das ein beliebiges Teil
// unseres Component-Baums umschließt, und ihn mit dem Wert dieses Contexts versieht.

</ThemeContext.Provider>;
```

  
Gehen wir nun zu index.js:

  
```jsx
// Vergesst nicht, zuerst importieren:

import  { ThemeContext }  from  "./context/ThemeContext";


// Und dann ganz unten unsere App wrappen:

const  root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(

<ThemeContext.Provider>

<App />

</ThemeContext.Provider>
);
```


Der Context-Provider würde über die gesamte Application hinweg einen globalen Context-Wert zur Verfügung stellen, indem es das root App-Component umschließt. 
  
Wir könnten also einen **Value-Prop** zu **ThemeContext.Provider** hinzufügen und ein Object setzen.
Und im Object könnten wir eine Color-Property (Farbeigenschaft) haben:

  
```jsx
<ThemeContext.Provider value={{  color:  "hotpink"  }}>
```


Und nun können alle Components in unserer Application auf denselben Context zugreifen:

> {[  color:  "hotpink"  }}

Obwohl diese Art des Component-Wrappings völlig in Ordnung ist, wirst du feststellen, dass die meisten React-Developer einen etwas anderen Weg gehen. Der Grund dafür ist, dass es in Zukunft einfacher sein wird, Context-Werte, wie ***{{color: 'hotpink'}}*** zu aktualisieren, weil sich die Werte womöglich irgendwann ändern könnten.

Um euch einen besseren Weg zu zeigen, gehen wir zurück zu unserer **ThemeContext.js** Datei und erstellen dort eine Funktion, die wir **ThemeProvider** nennen, welches selbst nur ein React-Component sein wird:


```jsx
export  function  ThemeProvider({  children  })  {

return(

<ThemeContext.Provider value={{color:  "hotpink"}}>

{children}

</ThemeContext.Provider>

)

}
```


Kehren wir nun zu **index.js** zurück und wrappen es mit unserem neuen zukunftssicheren Provider:


```jsx
<ThemeProvider>

<App />

</ThemeProvider>
```


Ich hoffe, ich muss euch nicht erklären, warum wir das getan haben. 👁👄👁

*Als Nächstes: Wie können wir in unseren anderen Components im Projekt auf den Context-Wert zugreifen?*
