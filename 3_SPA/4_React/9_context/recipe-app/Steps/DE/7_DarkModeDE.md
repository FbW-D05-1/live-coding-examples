#  Light && Dark Mode Selector


[From Google Icons](https://fonts.google.com/icons) Wir nehmen das Brightneess 4 oder 6 Icon und verwenden es als unser Button. Wir können die svg herunterladen. Als Nächstes erstellen wir den Ordner assets in unserem src und fügen sie dort ein.

Aber jetzt müssen wir erst einmal die erstellte ThemeContext.js aufrufen und die

  
##  Funktionalität des Light- und Dark Modes

  
Wir werden also zunächst eine zusätzliche Property zum initialen State-Object des useReducers in der ThemeProvider-Function hinzufügen:

  
```jsx
export  function  ThemeProvider({  children  })  {

const  [state,  dispatch]  =  useReducer(themeReducer, {

color:  "hotpink",

// Wenn du willst, kannst du deinen Ausgangswert hell machen

mode:  "dark",

});
```


Jetzt wollen wir auch eine Funktion erstellen, wie wir die changeColor haben, aber dieses Mal für changeMode:

  
```jsx
const  changeMode  =  (mode)  =>  {

dispatch({ type:  "CHANGE_MODE",  payload:  mode });

};
```


Als nächstes brauchen wir in unserer themeReducer-Action einen neuen Fall für mode:


```jsx
const  themeReducer  =  (state,  action)  =>  {

switch (action.type) {

case  "CHANGE_COLOR":

return { ...state,  color:  action.payload };

  
  
case  "CHANGE_MODE":

return { ...state,  mode:  action.payload };

default:

return  state;

}

};
```

  
Auch hier wollen wir den aktuellen State, den wir einnehmen, verbreiten, denn wenn wir das nicht tun und einfach ein neues Object zurückgeben und sagen, dass der Modus das ist, was auch immer der Payload ist, dann wird dies das neue State-Object. Und dann gibt es keine Color-Property mehr dafür. Wir werden also die Color-Property in keinem Component erhalten, das diesen Context verbraucht. Wir müssen also zunächst den aktuellen State verbreiten, um sicherzustellen, dass wir die Color-Property weiterhin erhalten.

Es gibt noch eine Sache, die wir tun müssen.

Und das ist nur eine Übergabe der changeMode-Function in die Value-Prop:


```jsx
<ThemeContext.Provider value={{  ...state,  changeColor,  changeMode  }}>
```

  
Als Nächstes wollen wir also die Funktion changeMode in unserer ThemeSelector.jsx verwenden:


import Icon


```jsx
import  iconSun  from  "../assets/sun.svg";
```


Wir werden dafür ein neues Div über den Themenbuttons erstellen:


```jsx
<div  className="mode-toggle">

<img  src={iconSun}  alt="dark mode toggler icon"  />

</div>
```

  
Als Nächstes erstellen wir also eine Funktion, aber diesmal nicht inline, da wir mehr zu tun haben:

Zuerst müssen wir unser useTheme umstrukturieren:


```jsx
const  {  changeColor,  changeMode,  mode  }  =  useTheme();
```


jetzt die Funktion selbst:

  
```jsx
const  toggleMode  =  ()  =>  {

changeMode(mode  ===  "dark"  ?  "light"  :  "dark");

};
```


Lasst uns ein dynamisches Symbol erstellen, um zu sehen, ob alles funktioniert und wir es später gestalten können:


```jsx
<img

src={mode  ===  "dark"  ?  iconSun  :  iconMoon}

onClick={toggleMode}

alt="dark/light mode toggler icon"

/>
```


Die Symbole wechseln jetzt, aber wir müssen eines etwas heller machen, wenn der Modus wechselt, also lasst uns die Symbole in ThemeSelector.css gestalten:


```css
.mode-toggle  {

margin-right:  auto;

}


.mode-toggle  img  {

width:  24px;

height:  24px;

cursor:  pointer;

}
```


```jsx
<img

src={mode  ===  "dark"  ?  iconSun  :  iconMoon}

onClick={toggleMode}

alt="dark/light mode toggler icon"

  

style={{  filter:  mode  ===  "dark"  ?  "invert(100%)"  :  "invert(20%)"  }}

/>
```


##  Styling Time

  
Wir müssen also unseren Mode-Wert nehmen und sie in verschiedene Components injizieren und mit einer Bedingung stylen. Leggo

In App.jsx:


```jsx
const  {  mode  }  =  useTheme();


<div  className={`App ${mode}`}>
```


Jetzt in App.css:


```css
.App.dark  {

background-color:  #333;

}
```


Yay BUTTTT unsere Rezepte haben sich nicht geändert, also **gehen wir zum RecipeList.jsx-Component**:

  
```jsx
const  {  mode  }  =  useTheme();

// Rest des Codes


<div  key={recipe.id}  className={`card ${mode}`}>
```


CSS:


```css
/* dark mode */

.recipe-list  .card.dark  {

background:  #555

}

.recipe-list  .card.dark  p,

.recipe-list  .card.dark  h3,

.recipe-list  .card.dark  div  {

color:  #e4e4e4

}
```


Fantastisch, jetzt haben wir einen Light & Dark Mode!

![hol up](../images/but-wait.jpg)

Wenn wir auf jedes Recipe.jsx mit dunklem Modus klicken, sieht es hässlich aus, also ändert das auch schnell selbst.
  
 
```jsx
<div  className={`recipe ${mode}`}>
```


```css
.recipe.dark  {

background:  #555;

color:  #e4e4e4;

}
```


gj ✨
