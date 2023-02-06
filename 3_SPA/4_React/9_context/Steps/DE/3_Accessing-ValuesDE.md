
#  Zugriff auf Context-Werte

  
Wir haben **ThemeContext** und einen **Provider** für den ThemeContext erstellt, der den **Context-Wert** für alle **Children-Components** bereitstellt.

Ich möchte euch nun zeigen, wie man in einem der Components auf diesen Context zugreift, und zwar innerhalb des NavBar.jsx-Components.
  
Zuerst müssen wir immer einen **speziellen Hook** importieren:


```jsx
import  { useContext }  from  "react";

import  { ThemeContext }  from  "../context/ThemeContext";
```

  
Nun können wir **diesen Hook im Component unten verwenden**, um einen bestimmten Context zu verwenden:

  
```jsx
export  default  function  Navbar()  {

// Innerhalb von useContext geben wir den Context an, auf den wir zugreifen wollen.

// Wir brauchen ThemeContext (nicht Provider. Provider wrapped die Kinder, wann immer er kann).

// In Curly-Brackets erhalten wir den Wert, den wir eingestellt haben:

const  {  color  }  =  useContext(ThemeContext);
```
  
  
Verwenden wir also jetzt diese Farbe:


```jsx
<div  className="navbar"  style={{  background:  color  }}>
```


Jetzt speichern und ausprobieren, jetzt haben wir eine schöne ***Hosampink-Navbar***. 🥵
