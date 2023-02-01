#  Wie man Routes einrichtet und benutzt:


Wir werden also unsere verschiedenen Pages und den React-Router einrichten.
 
Als erstes möchte ich drei Page-Components erstellen, eine für die *Homepage*, eine für die *AboutPage* und eine für die *ContactPage*.

Wenn ich nun mehrere verschiedene Pages habe, mache ich gerne folgendes:

Ich erstelle **INNERHALB** des **src** (Source) Ordners einen Pages-Ordner, manche Developer nennen sie auch **Screens**, die Components heißen dann zum Beispiel: *HomeScreen.jsx* statt *HomePage.jsx*. Es ist euch überlassen, welchen Namen ihr wählt, aber benutzt bei eurem Job das, was man euch sagt.

Wenn ich nun alle Pages erstellt habe, die ich brauche:

*HomePage.jsx -  AboutPage.jsx - ContactPage.jsx*

Werde ich in jeder Page das **rfc** Shortcut anwenden. Danach erstelle ich in jeder Page eine h2-Überschrift, schreibe den Namen der Page hinein und erstelle vorest einen p-Tag mit Lorem Ipsum als Platzhalter.

  
```jsx

// Innerhalb der HomePage:

return  (

<div>

<h2>HomePage</h2>

<p>lorem ipsum...</p>

</div>

);

// Innerhalb der AboutPage:

return  (

<div>

<h2>AboutPage</h2>

<p>lorem ipsum...</p>

</div>

);

// Innerhalb der ContactPage:

return  (

<div>

<h2>ContactPage</h2>

<p>lorem ipsum...</p>

</div>

);

```

  
Jetzt haben wir also unsere drei Pages eingerichtet.

**Zur Erinnerung**: Falls ihr es in *0_introDE.md* verpasst habt, ihr müsst ein Package installieren, da sonst die Routes nicht funktionieren.

Jetzt müssen wir das React-Router-Package installieren, damit wir auf diese drei verschiedenen Pages verlinken können. Geht also zurück und installiert den React-Router.

Nachdem alles erledigt ist, können wir nun zurück zu App.jsx/js gehen und einige Packages aus React-Router-Dom importieren.

In App.jsx:

  
```jsx

import  { BrowserRouter,  Route }  from  "react-router-dom";

```


Der Browser-Router wird, wie ein Wrapper, alles innerhalb des App Components wrappen. tatsächlich wrappt der Browser-Router die gesamte App, mitsamt allter Routes.

Und dann ist das Route-Package etwas, was wir verwenden werden, um eine Route zu erstellen.

zur Verdeutlichung:


```jsx

homepage == localhost:3000/

contactpage == localhost:3000/contact

aboutpage == localhost:3000/about

```


Was ich also zuerst tun werde, ist, nach ***div className = App*** das Browser-Router-Component so zu verwenden:
  

```jsx

return  (

<div  className="App">

<BrowserRouter>

<nav>

<h1>My Articles</h1>

</nav>

</BrowserRouter>

</div>

);

```


Jetzt haben wir also ein **Browser-Router-Component**, das unsere **nav** und **h1** wrapped (umgibt). Es wird auch alles, was die Route verwendet, wrappen. Alles, womit wir Links oder Route-Components anzeigen lassen, wrapped es ebenso.

Das Browser-Router-Component *umhüllt / umgibt / umfasst / umschließt* also **alles**.

Sofern das getan ist, müssen wir in unserem Beispiel also drei verschiedene Routes generieren (erstellen).

Sagen wir, ich möchte eine Route, die nur aus einem **Slash (/)** besteht und das Home-Component lädt, dann "Über uns" (/**about**) und schließlich "Kontakt" (/**contact**).

Lasst uns diese also innerhalb von **BrowserRouter** erstellen:


```jsx

<BrowserRouter>

<nav>

<h1>My Articles</h1>

</nav>

{/* Hier drin verwenden wir ein Prop namens path und setzen den Slash (Schrägstrich) */}

<Route path="/">

{/* Und dann würden wir unser Home-Component genau hier nesten. Vergesst nicht, dass wir das importieren müssen. */}

<HomePage />

</Route>

</BrowserRouter>

```

  
Also machen wir das Gleiche für die anderen beiden Pages. Und vergesst nicht zu **importieren**!!! 💀


```jsx

<BrowserRouter>

  

<Route path="/">

<HomePage />

</Route>

  

<Route path="/about">

<AboutPage />

</Route>

  

<Route path="/contact">

<ContactPage />

</Route>

  

</BrowserRouter>

```

  
Wenn wir also in der Adresszeile im Browser zum Slash gehen, schaut sich unser React genau diesen Pfad an. Dann gleicht React den Pfad mit dem Component ab und sagt, quasi: "OK, für diese Route werde ich die Home-Component in den Browser laden. Dasselbe gilt für alle anderen Pfade, probiert es im Browser aus und schaut nach.

Du hast nun bemerkt, dass unsere HomePage immer sichtbar ist, was ein wenig seltsam ist. Wir werden das in der nächsten README in Angriff nehmen :^)
