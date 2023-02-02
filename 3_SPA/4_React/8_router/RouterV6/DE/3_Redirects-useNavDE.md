
#  Redirects und useNavigate (nicht zu verwechseln mit Nav)
  

Schauen wir uns an, wie wir ein Redirect (eine Umleitung) für bestimmte Routes durchführen können und auch, wie man User programmatisch umleiten kann.

*Die Dinge haben sich geändert, aber Krieg, Krieg ändert sich nie. wipes gamer sweat off forehead~*

Früher haben wir immer, wie Betas, das 
```jsx 
<Redirect to="/" />
```
 Component benutzt.

Aber jetzt in V6 müssen wir das neue ***Navigate-Component*** verwenden.
>Nochmal: ***Navigate*** hat nichts mit Navigation, Nav, Navbar etc. zu tun!

Probieren wir's aus:


```jsx

// Importieren nicht vergessen!

// Wir behalten das: to=""

<Route path="/redirect"  element={<Navigate to="/"  />}  />

```
  

Wir können sogar bedingungsgebundene Umleitungen (conditional redirects) erstellen, basierend auf Kriterien, die wir voraussetzen.

Beispielsweise könnten wir eine Website mit einem Authentifizierungssystem haben, bei dem ein User an- oder abgemeldet sein kann. Wir wollen User, die abgemeldet sind, von geschützten Pages wegleiten.

Abhängig davon, ob ein User an- oder abgemeldet ist, können wir ihn auf eine andere Page umleiten, z. B. auf ein Anmeldeformular, oder wenn der Checkout in einem Webshop stattfindet und der User zur Rechnung umgeleitet wird.

Lasst uns also ein stark vereinfachtes Beispiel machen, das auf dem basiert, was ich gerade eben beschrieben habe.

Erstellen wir zunächst eine neue Bedingung (Condition) ganz oben:
  

```jsx

const  [cartIsEmpty]  =  useState(true);

```
  

Erstellen wir nun eine neue Route:


```jsx

<Route

path="/checkout"

element={

// Ist die Ternary-Abfrage true, wird umgeleitet, wenn nicht, wird das nächste Component gerendert:

cartIsEmpty  ?  <Navigate to="/products"  />  :  <p>Checkout</p>

}

/>

```
 

Ja, ich habe gesagt, dass du keine Inline-Pages verwenden sollst, aber ich werde nicht extra für euch eine komplett neue Page erstellen, also seid still. 😤


##  Programmatische Umleitung
  

In V5.1 haben wir den useHistory-Haken verwendet. *may he rest in pepe* :c

In V6 benutzen wir History leider nicht mehr.

Gehen wir also zu AboutScreen.jsx und sehen uns die neue Version an:


```jsx

// Zuerst importieren wir den useNavigate-Hook:

const  navigate  =  useNavigate();



// Dann erstellen wir einen Button am Ende der Paragraphen:

<button>See our Products</button>



// Und dort packen wir den "/products" Path hinein:

<button  onClick={()  =>  navigate("/products")}>See our Products</button>

```

Fin, for now 💖
