#  Programmgesteuerte Weiterleitungen

  
Bevor wir mit dem neuen Thema beginnen, gefällt mir  ~~mein Leben~~ nicht, dass *My Articles* in unserer App.jsx nicht zur Home-Page zurückführt.

  
```jsx

<Link exact  to="/">

<h1>My Articles</h1>

</Link>

```
  

In unserem Hook setzen wir **setError** auf:


```jsx

setError(e.message);

```
  

==Auf diese Weise erhalten wir nicht X-Tausende von Fehlermeldungen in der Konsole, sondern nur "Not found".==
  

##  Jetzt leiten wir die User zurück zur Home-Page:

  
Unser Error-Melder ist funktionabel, also können wir es nutzen, um unsere User umzuleiten (redirect).

Als erstes bringen wir unseren *classy* **useEffect-Hook** zurück. Und nun verwenden wir unseren Error als Dependency.

  
```jsx

useEffect(()  =>  {

// Zuerst prüfen, ob Error eine Value hat und nicht null ist!

// Wir wollen nicht umleiten, wenn kein Error vorliegt!

if (error) {

// Redirect

}

},  [error]);

```

  
Und wie leiten wir jetzt um? Wir verwenden *einen anderen Hook*. 🗿

**useHistory** wieder von rrd (react-router-dom):


```jsx

import  { useParams,  useHistory }  from  "react-router-dom";

```
  

Rufen wir (Invoke) nun diesen Hook auf (ich persönlich nenne ihn immer _history_).

_history_ wird ein Object sein und hat Methods, die verwendet wird, um unsere User umzuleiten.

Eine Method ist zurück zu gehen:

**_history.goBack_**()

Sie bringt uns einen Schritt zurück in der History des Users. Es ist wie ein Button im Browser, aber das brauchen wir nicht, stattdessen wollen wir **_history.push()_** verwenden und das erlaubt es uns, den User auf eine andere Route umzuleiten.
  

```jsx

useEffect(()  =>  {

if (error) {

history.push("/")

// Es kann alles sein /about oder /contact, aber wir wollen zurück zur Home-Page leiten.

}

},  [error]);

```


Klingt, als wären wir fertig, aber es ist noch nicht ganz fertig, denn wenn wir auf eine Page für ein Article gehen, ist die _ID_ gültig. Nach dem Abruf erhalten wir also einen Error. Jetzt werden wir diesen Error nicht vorher sehen, dann leiten wir den User um, denn sobald der Error auftritt, leiten wir ihn eh sofort um.

Ich möchte dem User vielleicht zwei Sekunden Zeit geben, den Error zu lesen.
  

##  setTimeout time

  
```jsx

useEffect(()  =>  {

if (error) {

setTimeout(() => {

history.push("/");

},  2000);

}

},  [error]);

```

Hiermit wird der User nach 2 Sekunden zur Home-Page zurück geleitet. Wenn du setTimeout vergessen hast, too bad.

Jetzt gibt es nur noch eine Sache, die ich tun muss, und das ist, *history* als eine Dependency in useEffect hinzuzufügen.
 

```jsx

useEffect(()  =>  {

if (error) {

setTimeout(() => {

history.push("/");

},  2000);

}

},  [error,  history]);

```
 

Es wird das hier jetzt nicht mehr dazu triggern, sich zu wiederholen. Egal wann. Und selbst wenn, solange kein Error auftritt, werden wir den User safe umleiten. Wie ich schon sagte, hat das keinen Einfluss auf die Funktionsweise. Es ist nur eine andere Art und Weise. React wird uns eine Warnung in der Konsole geben: 
==look add history as an effect dependency.==

***TL;DR:*** Es wirkt sich auf nichts aus. Wir wollen nur keinen Error-Clusterfuck im Terminal oder der Browser-Konsole.

Und das war's mit dem Part, meine jungen Padawans. 🎈
