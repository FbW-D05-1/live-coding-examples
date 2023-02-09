
#  Redirecting Route Guards


  Bevor wir loslegen ein paar Tipps:

>Versucht  nicht  zu  sehr  im  Detail  alles  zu  verstehen.  Es  kann  sich  etwas  überfordernd  anfühlen.
>
>Stattdessen  kopiert  den  Code  aus  den  Docs  einfach  Schritt  für  Schritt  nach,  schaut  es  euch  im  Browser  an.
>
>Schaut  euch  die  verschiedenen  Pages  des  Projekts,  die  Reihenfolge  der  Grundstruktur  ist  immer  gleich!
>
>Prüft  nach,  welcher  Teil  des  Codes,  welchen  Teil  der  Application  beeinflusst,  verändert,  aufbaut,  aktualisiert  etc.
>
>Erzeugt absichtlich Errors an verschiedenen Stellen des Codes und lasst sie in der Konsole loggen.
>
>Verändert den Code, personalisiert ihn, baut das Grundprojekt weiter aus, erweitert den Code.
><hr>
> Unterm Strich also: SPIELT MIT DEM CODE. Das Lernen geschieht dabei fast schon, wie von selbst. 😉

*Rom wurde schließlich auch nicht an einem Tag, oder einer Woche gebaut.* 😊
*Macht euch LoFi Beats 2 Study 2 auf Yeetube an, bringt mehr EXP beim lernen.* 

Jetzt, da wir die Authentifizierung eingerichtet haben, können wir sicherstellen, dass unsere Pages vor unregistrierten Usern geschützt sind. Und für diejenigen, die angemeldet sind, können wir alle erforderlichen Routen anzeigen, die sie aufrufen wollen.

Führt folgende Schritte aus:

In App.jsx:

  

```jsx

import  { BrowserRouter,  Routes,  Route,  Navigate }  from  "react-router-dom";

import  { AuthContext }  from  "./context/AuthContext";

```

  

Innerhalb der App-Function:

```jsx

const  {  user,  authIsReady  }  =  useAuthContext();

```

  

Dann:

  

```jsx

<div  className="App">

{authIsReady &&  (

<BrowserRouter>

<SideBar />

<div  className="container">

<NavBar />

<Routes>

<Route path="/"  element={<Dashboard />}  />

<Route path="/create"  element={<Create />}  />

<Route path="/login"  element={<Login />}  />

<Route path="/signup"  element={<SignUp />}  />

<Route path="/projects/:id"  element={<Project />}  />

</Routes>

</div>

</BrowserRouter>

)}

</div>

```

  
Jetzt konzentrieren wir uns auf die Absicherung der Routes (Stichwort: Security). Dadurch können nur berechtigte User bestimmte Pages innerhalb unserer Application aufrufen:

  

```jsx

<Routes>

<Route

path="/"

element={user  ?  <Dashboard />  :  <Navigate to="/login"  />}

/>

  

<Route

path="/create"

element={user  ?  <Create />  :  <Navigate to="/login"  />}

/>

// Wenn ein User eingeloggt ist, wollen wir diese verstecken:

<Route

path="/login"

element={!user  ?  <Login />  :  <Navigate to="/"  />}

/>

<Route

path="/signup"

element={!user  ?  <SignUp />  :  <Navigate to="/"  />}

/>

  

<Route

path="/projects/:id"

element={user  ?  <Project />  :  <Navigate to="/login"  />}

/>

</Routes>

```

 Und um die User-Erfahrung noch mehr zu verbessern, sollten wir die Sidebar für eingeloggte User ausblenden. Auf diese Weise sehen sie nur die erforderlichen Informationen und Navigationsoptionen für ihre aktuelle Sitzung.

And to further enhance the user experience, let's consider hiding the sidebar for logged-in users. This way, they will only see the necessary information and navigation options for their current session:

  

```jsx

{user  &&  <SideBar />}

```

  

In NavBar.jsx:

  

```jsx

const  {  user  }  =  useAuthContext();

```

  
Um die Navigation für unregistrierte User zu vereinfachen, stellen wir sicher, dass die Optionen zum Login und Signup nur für diejenigen angezeigt werden, die derzeit nicht eingeloggt sind:

  

```jsx

{!user  && (

<>

<li>

<Link to="/login">Login</Link>

</li>

<li>

<Link to="/signup">SignUp</Link>

</li>

</>

)}

```

  
Um es unseren eingeloggten Usern so angenehm, wie möglich zu machen, stellen wir sicher, dass die Logout-Option nur für diejenigen angezeigt wird, die bereits in ihr Konto eingeloggt sind:

  

```jsx

{user  && (

<li>

{!isPending &&  (

<button  className="btn"  onClick={logout}>

Logout

</button>

)}

{isPending &&  (

<button  className="btn"  disabled>

Logging out...

</button>

)}

</li>

)}

```
