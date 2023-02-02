  
#  The Route Component


Im Intro haben wir gesehen, dass es seit Router V6 viele Probleme, wegen Änderungen, gibt.
  

##  Beginnen wir also mit dem Korrigieren dieser Probleme:


Bevor wir irgendetwas machen, müssen wir alles auskommentieren, wo wir verschachtelte (nested) Routes verwenden, denn, wie wir gesehen haben, sind einige der Bereiche erst durch die verschachtelten Routes selbst verursacht worden.
Also kommentieren wir sie jetzt aus, damit wir keinen Errors im Browser begegnen. 

Wir haben verschachtelte Routes in:

> **ProductDetailsScreen.jsx**

Hier kommentieren wir **useRouteMatch** aus, unten in der verschachtelten Route kommentieren wir's ebenfalls aus. 
Den Import für **routeMatch** löschen wir am Ende auch.

> **AboutScreen.jsx**

Und hier kommentieren wirdie verschachtelte Route ganz unten auch aus.

Wir werden zwar immer noch eine Warnung erhalten, aber unsere Page wird geladen, so dass wir wenigstens etwas sehen können. *Yay~*

Nachdem das nun geklärt ist, möchte ich darüber sprechen, wie wir die Route-Components in V6 in App.jsx verwenden.
Doch zunächst möchte ich kurz auf das Switch-Component eingehen, das wir bereits kennen.  

Short Switch Recap:
>*Normalerweise platzieren wir alle unsere Routes innerhalb des Switch-Components, was bedeutet, dass immer nur eine Route innerhalb des Switch-Components matchen (übereinstimmen) kann, weswegen wir nicht mehrere verschiedene Pages gleichzeitig auf dem Bildschirm sehen. Geht ruhig zurück und schaut es euch an, falls ihr's vergessen habt.*

**In React Router V6 haben wir kein Switch-Component mehr** *bye felicia*, wodurch für uns ein Error entsteht, weil unser Leben ohne Switch keinen Sinn mehr macht. *literally dies*

Wir nehmen Abschied von Switch *press F to pay respects* und löschen es aus unserer App.jsx (den Import auch).

 Anstelle von **Switch**,  gibt es seit **V6** ein sogenanntes ***Routes-Component*** *omoshiroi desu~*:
  

```jsx

// Vergesst nicht zu importieren!

// Das ist unser neues Switch:

<Routes>

<Route exact  path="/"  component={Home}  />

<Route path="/about">

<About />

</Route>

<Route path="/products/:id">

<ProductDetails />

</Route>

<Route path="/products">

<Products />

</Route>

</Routes>

```


Wenn wir also React Router V6 verwenden, müssen wir alle unsere Routes innerhalb eines ***Routes-Components*** platzieren, wenn wir eine Route registrieren wollen. Wenn wir dieses Component nicht hätten, würde es nur zu Fehlermeldungen, Errors und schlaflosen Nächten führen.  *dies again*

Wir müssen alle Route-Components in ein ***Routes-Component*** verschachteln. Einfach gesagt, gab es ein *good ol' Switcheroo* zwischen **Switch** und ***Routes***. Switch wurde also einfach mit Routes ersetzt.

*Switcheroo <=> SwitchRoutes, sounds samey... coincidence??? I think not! Killuminati cumfirmed* 😱

*Spaß beiseite, ich weiß, dass das sehr verwirrend klingt, aber ich kann nichts dafür, dass die von React diesen Bullshit genauso genannt haben wie die verschachtelten Routes...*

Achtet einfach immer ob das ***s*** am Ende von ***Route*** steht oder nicht, anders gesagt:

>***Routes*** ist der Daddy aller Routes &nbsp; :^)

![heard you like routes](../images/you-like-routes.png)

Das ist also der erste große Unterschied von **V6** im Gegensatz zu **V5.1**.


##  Lasst uns nun über Routes-Components sprechen 😂
  

Ich weiß, dass die Namensgebung verwirrend ist, aber stellt euch vor euer Vater heißt Gerd und hat euch auch Gerd genannt und jedesmal, wenn ihr bei einer Familienfeier seid und jemand nach "Gerd" ruft, wirst du *sus*,
weil du nicht weißt wer gemeint ist. *thanks react I guess...*

Im Grunde sprechen wir ab hier erstmal über die innere/n, verschachtelte/n Route/s.

Als wir V5.1 verwendeten, registrierten wir unsere Paths, wie folgt:


```jsx

<Route exact  path="/">

<Home />

<Route>

```

oder

```jsx

<Route path="/"  component={Home}  />

```

Als Erstens brauchen wir ***exact*** nicht mehr, da unsere Route-Components das in V6 von sich aus schon machen. Ihr Default-Behaviour (Standardverhalten) ist es also automatisch exakt zu matchen.

Also entfernen wir exact: *you won't be missed~*
  

```jsx

<Route path="/">

<Home />

<Route>

```


Der zweite Unterschied ist, wie wir tatsächlich registrieren, welche Components oder JSX wir für eine bestimmte Route anzeigen möchten. Wir nesten (verschachteln) sie nicht als Children (Kinder), sondern übergeben sie als Prop, wie im zweiten Beispiel.

Nur, dass wir statt Component zu schreiben,  es als ***element Prop*** übergeben. Da wir hier keine Referenz, sondern ein vollständiges JSX-Component übergeben, müssen wir Tags verwenden.
  

```jsx

<Route path="/"  element={<Home />}  />

```


**Wir ersetzen also das verschachtelte Component durch das element Prop und setzen es gleich dem JSX, das wir für den jeweiligen Route-Path anzeigen wollen**.

Aktualisieren wir also alle diese Elemente...

Nachdem wir das getan haben, sollte unsere Page leicht zu laden sein, richtig?

Wenn wir nun versuchen würden, diese verschachtelten Routes innerhalb von unseren Pages zu verwenden, würde es natürlich nicht funktionieren. *derp~*

Die andere Sache, die ich euch zeigen wollte, ist, dass wir...


##  Eine JSX-Vorlage innerhalb des element Props einfügen können


Fun Fact: Wenn du eine ganze Page innerhalb deines Route-Components erstellen möchtest, kannst du das jetzt tun. 🤔

*Wofür auch immer das gut sein soll, shrug~*

Du musst Klammern innerhalb deines Elements verwenden und eine komplett neue Page erstellen

Beispiel:
  

```jsx

<Route path="/test"  element={(

<div>

<h2>Why on earth would you do this?</h2>

<p>Seriously what's wrong with you</p>

</div>

)}  />

```


##  Zusammenfassung


> Switches <=> Routes | Routes ist das neue Switch  in V6.
> 
> Jedes Route-Component ist in einem selbstschließenden Tag und hat ein element Prop, in dem wir das JSX ausgeben.
> 
> Exact ist verschwunden und wir vermissen es nicht.  
> 
> Inline-Pages...
> Verwendet sie nur, wenn ihr eure humanity rejecten wollt.
> Nein ernsthaft, verwendet sie nicht!

Wir sehen uns in der ***Redirects und useNavigate*** Lektion wieder, meine kleinen pogChamps. 🥰
