#  Reducers && useReducer


Derzeit funktioniert es mit unserem Context so, dass jedes Mal, wenn wir einen neuen Wert übergeben, jedes Component neu gerendert werden muss. *Das ist no bueno.*

Oftmals ist es so, dass wenn wir mit Context, Context-State und State-Updating arbeiten, wir wahrscheinlich lieber zu einem Reducer greifen wollen.
  

##  Reducer


Ein Reducer ist nur eine Funktion und ein Weg, mit States zu arbeiten. Genauso wie useState. Im Gegensatz zu useState aber, reduziert es; macht es einfacher, mit mehreren Bits zusammenhängender States zu arbeiten, die auf verschiedene Arten aktualisiert werden können.

Ein Beispiel könnte ein Array von Daten sein, das man aktualisieren kann:

> hinzufügen
> 
> daraus löschen
> 
> ein Element darin aktualisieren
> 
> es sortieren
> 
> es filtern
> 
> und so weiter...

Es kann viele Möglichkeiten geben, diesen State zu aktualisieren, und dafür benötigst du möglicherweise unterschiedliche Logiken.

Nun könnte man das mit dem useState-Hook und mehreren verschiedenen Funktionen innerhalb des Components machen, um den State zu aktualisieren, abhängig davon, was wir damit machen wollen. Aber dann wird unser Component mit vielen Funktionen aufgebläht, und je komplexer unsere Logik wird, desto schwieriger wird es, sie zu verwalten.

Außerdem möchtest du vielleicht mehrere State-Änderungen gleichzeitig durchführen und findest dich in einer Situation wieder, wo du mehrere Funktionen gleichzeitig callen musst. Und das widerum eskaliert die Hürden des Managements in React. AYußerdem werden unsere State-Updates weniger zuverlässig und weniger vorhersehbar. *oh nyoo~*

Wir können eine Reducer-Funktion verwenden; eine einzige Funktion, die die gesamte Logik einkapselt.

Jetzt wirst du vielleicht denken, dass unser State ein Object mit einer Color-Property nicht gerade komplex ist, und du hast Recht, das ist es nicht. Lasst mich in Ruhe. Wir beenden diese Lektion, tschüss. 🤬

*Für Leute, die sich selbst geißeln bzw. tatsächlich Reducer lernen wollen:*


##  Beginnen wir mit der Verwendung von Reducer


Gehen wir also zu unserer ThemeContext.js und importieren unseren useReducer:

  
```jsx
import  { createContext,  useReducer }  from  "react";
```
  

Damit können wir eine Reducer-Function spezifizieren, die für das Updaten unseres States verantwortlich ist und die gesamte Update-Logik an einem Ort zusammenhält. Außerdem erlaubt es uns die Spezifikation eines Initial-State-Werts.

Innerhalb unseres Components benötigen wir also zunächst eine Funktion für den Reducer, bevor wir ihn übergeben können:


```js
const  themeReducer  =  ()  =>  {

console.log("dies werden wir später tun");

};
```

 
Wir können es vorerst leer lassen. Dann erstellen wir den **useReducer**:


```js
// Wir übergeben den Namen der Funktion:

useReducer(themeReducer);
```


Als zweites Argument übergeben wir den Initial-State, den wir verwenden wollen. In unserem Fall wird das ein Object mit der Color-Property und dem Wert sein:


```js
useReducer(themeReducer,  {

color:  "hotpink"

});
```


Genau wie der useState-Hook kehrt er zu Werten innerhalb eines Arrays zurück, sodass er sie auf dieselbe Weise erfassen kann.
  

```js
const  [state,  dispatch]  =  useReducer(themeReducer,  {

color:  "hotpink"

});
```
  

Bei diesen beiden Werten handelt es sich um den State, der zunächst der von uns festgelegteInitial-State sein wird, und daneben um eine sogenannte **Dispatch-Function**.

Mit der Dispatch-Function können wir jede Änderung unseres States an die Reducer-Function weiterleiten. Wenn wir also in Zukunft diese Funktion callen wollen, um unseren State zu ändern, tun wir das einfach mit der Dispatch-Function.


##  Schauen wir uns kurz an, wie das funktioniert:
  

Nehmen wir an, wir wollen diesen Farbwert im State ändern. Wie machen wir das?

Nun, zunächst einmal werden wir eine Funktion namens changeColor unterhalb des useReducer erstellen:


```jsx
const  changeColor  =  (color)  =>  {

// Die Eigenschaft type beschreibt im Wesentlichen die Art der State-Änderung, die wir vornehmen wollen.

// Die Nutzlast (der Payload) sind alle Daten, auf denen die State-Änderung basieren soll.

dispatch({ type:  "CHANGE_COLOR",  payload:  color });
};
```


Jetzt rufen wir also die Dispatch-Function auf und geben das Action-Object mit zwei Properties ein.  (ja, **type** muss immer groß geschrieben werden).

Wenn wir nun die Dispatch-Function verwenden, schaut sich React die reducer-Function an, die mit dieser Dispatch-Function verbunden ist, und findet unsere **themeReducer-Function** und feuert dann diese Funktion, um die Änderung des States in ihr durchzuführen.

Nun aktualisieren wir unsere ThemeContext-Function, die wir leer gelassen haben:

(***HINWEIS: LETZTES MAL HABE ICH DIESE INNERHALB DER _ThemeProvider_ FUNKTION EINGESTELLT, SIE SOLLTE AUßERHALB DARÜBER SEIN!***)


```jsx
// Wir können also diese beiden Dinge verwenden, um den State zu aktualisieren.

const  themeReducer  =  (state,  action)  =>  {

// Wir müssen nur einen Wert zurückgeben, der den neuen State am Ende darstellt.

switch (action.type) {

case  "CHANGE_COLOR":

// Im Moment gibt es nur die Color-Property.
// In der Zukunft könnte es jedoch weitere Properties geben.
// Wir müssen alle diese Properties zum neuen State-Wert hinzufügen.
// Wenn wir das nicht tun, werden sie nach der Aktualisierung einfach nicht mehr existieren.

return { ...state,  color:  action.payload };

// Schließlich brauchen wir auch einen Default-Case im Switch-Statement, um einen Default-Wert zurückzugeben, falls keiner der Cases matched.

default:

// Und dieser Default-Wert wird einfach ein unveränderter State sein.

return  state;

}

};
```


Jetzt haben wir also den initialen State-Wert, der ein Object mit einer Color-Property ist, die zu Beginn auf Hotpink eingestellt ist, wenn wir diese Farbe in den States ändern wollen.

Wir können die Funktion changeColor aufrufen und eine neue Farbe übergeben, die den Dispatch auslöst, bei dem wir den Typ und die Nutzlast für das Aktionsobjekt angeben. Dies wiederum löst die themeReducer-Function aus, die den aktuellen Stateund die Action nimmt. Wir prüfen den Action-Type, und wenn er changeColor entspricht, geben wir ein neues State-Object mit einem neuen Wert zurück, der dann das State-Object aktualisiert, das wir vom useReducer zurückbekommen.

Jetzt müssen wir nur noch alle Werte in die Value-Prop des Providers übergeben, die wir unseren Components zur Verfügung stellen wollen, denn momentan übergeben wir nur dieses _{{color : 'hotpink'}}_ Object, das sich nie ändert.

Übergeben wir das State-Object :


```jsx
<ThemeContext.Provider value={{  ...state,  changeColor  }}>
```


##  Lasst uns versuchen, es innerhalb eines Components zu verwenden:


Da wir also einen hervorragenden Custom-Hook für changeTheme haben, müssen wir nichts umschreiben, sondern nur in Navbar.jsx umstrukturieren:


```jsx
const  {  color,  changeColor  }  =  useTheme();
```  


Dann fügen wir ein onClick-Ereignis für die Navigation selbst hinzu:


```jsx
<nav  onClick={()  =>  changeColor("red")}>
```
  

Und jetzt haben wir eine hässliche rote Navigationsleiste - herzlichen Glückwunsch! 🎉
