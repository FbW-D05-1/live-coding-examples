#  Color Theme Selector


Also, was wir jetzt tun werden, ist ein Theme Selector zu erstellen.

Erstellen wir eine neue Datei innerhalb des **components**-Ordners, nennen wir sie **ThemeSelector.jsx** und eine CSS-Datei dafür **ThemeSelector.css**:


```jsx
import  { useTheme }  from  "../hooks/useTheme";

//styles

import  "./ThemeSelector.css";

  

export  default  function  ThemeSelector()  {

return  <div></div>;

}
```


Also, was ich tun möchte, ist eine Option, um Farben auszuwählen und dann ändern wir die Hintergrundfarbe mit der ausgewählten Farbe.

Lasst uns also ein HexColor-Array erstellen:


```js
const  themeColors  =  ["#BFACAA",  "#9792E3",  "#BBA0B2"];
```

Nun wollen wir die Color-Theme erstellen und für jeden einen Button machen:


```jsx
return  (

<div  className="theme-selector">

<div  className="theme-buttons">

{themeColors.map((color)  =>  (

<div

key={color}

onClick={()  =>  changeColor(color)}

style={{  backgroundColor:  color  }}

/>

))}

</div>

</div>

);
```


Etwas Styling:


```css

.theme-selector  {

display:  flex;

justify-content:  flex-end;

align-items:  center;

max-width:  12000px;

margin:  20px  auto;

}

.theme-buttons  div  {

display:  inline-block;

width:  20px;

height:  20px;

cursor:  pointer;

margin-left:  15px;

border-radius:  50%;

}
```


So, alles ist fast fertig, jetzt müssen wir den Theme-Selector unter unserer Navbar in App.jsx importieren:


```jsx
<BrowserRouter>

<Navbar />

<ThemeSelector />

<Switch>
```


Jetzt können wir ein benutzerdefiniertes Thema nicht nur für die Navigationsleiste auswählen, sondern es überall hinzufügen, da unsere App das Child von ThemeProvider ist. *niceuuu~*
