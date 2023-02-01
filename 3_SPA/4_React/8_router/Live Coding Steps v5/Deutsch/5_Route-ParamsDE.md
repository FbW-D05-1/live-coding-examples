#  Route Parameters

  
##  Was wir tun wollen

  
Was wir jetzt tun wollen, ist ein kleines **Read More** zu jedem der Articles hinzuzufügen, so dass, wenn ein User darauf klickt, er zu einer _dynamischen_ Detail-Page für genau dieses Article geleitet wird.

Wie würden also die Routes für diese Article-Page aussehen?

Zum Beispiel:


```

localhost:3000/articles/:id

```

  
Sie sehen wahrscheinlich so aus: **.../articles/:id** nach dem zweiten **/** ein veränderbarer ID-Platzhalter, der einfach die ID des Articles ist, das wir sehen wollen, wenn wir auf den zweiten Article klicken.
 
Zum Beispiel:


```

localhost:3000/articles/1

localhost:3000/articles/2

localhost:3000/articles/3

```  
  

Dieser **veränderbare Teil** der Route wird daher als **Route-Parameter** bezeichnet. Seine Struktur ist immer gleich.

Und wenn wir **eine dieser Routes aufrufen**, wollen wir **unabhängig von der ID** immer dieselben **Article-Detail-Components** laden. Wir wollen nur ein anderes Article abrufen, der in dieses Component für jeden Path abhängig vom **ID-Route-Parameter** angezeigt wird.
  

##  Schauen wir uns also an, wie wir das in unserem Projekt einrichten können:


Als erstes möchten wir eine Art Link von jedem Article innerhalb der Home-Page erstellen, so dass wir einen Router-Link erstellen können, der so etwas wie *Weiterlesen...* enthält:


```jsx

// Vergesst nicht, Link zuerst importieren!

  
<div  key={article.id}  className="card">

<h3>{article.title}</h3>

<p>{article.author}</p>

// Jetzt verwenden wir ein 'to' Prop anstelle von Path:

<Link to="/articles/id"  >Read more...</Link>

  

// Wie machen wir sie jetzt dynamisch und geben ihnen eine Article-ID?

<Link to={`/articles/${article.id}`}  >Read more...</Link>

</div>

```
  
  
OK, jetzt haben wir zwar diesen Link eingerichtet, uns fehlt aber noch eine Route dazu.

Vorher wollen wir aber sehen, ob jedes Article die richtige ID im Browser anzeigt und es korrekt funktioniert.

Wie schon gesagt, wenn wir zu einer dieser Routes gehen, sehen wir kein Cumponent, das hier injected wird. (lmao)
Das liegt daran, dass wir keine Route dafür innerhalb des **App.jsx-Components** eingerichtet haben.


###  Lasst uns das in Angriff nehmen, meine Bruders und Schwesters:


Zuerst erstellen wir eine neue Datei mit dem Namen **ArticlePage.jsx** in unserem Pages-Ordner und dann verwenden wir das **rfc-Shortcut** innerhalb der Datei.

Jetzt platzieren wir diese Route am unteren Ende des **Route-Stacks** (Stapel) in App.jsx und geben ihr einen Path:
  

```jsx

// Rest des obrigen Codes



// Wie sieht nun unser Path mit den dynamischen IDs aus?

// Es ist natürlich: /articles

// Für die IDs können wir nicht einfach eine feste ID hardcoden. Was wäre z.B., wenn wir 200 Artikel hätten? Wir müssten es 200 Mal mit verschiedenen IDs kopieren und manuell einfügen: /articles/120.

// Stattdessen erstellen wir ein Route-Parameter:

// Wir machen das einfach mit einem Doppelpunkt (:), gefolgt von einem Namen, wie z.B. id


<Route path="/articles/:id">

<ArticlePage />

</Route>

</Switch>

</BrowserRouter>

</div>

```
  

Warum funktioniert ***"/articles/:id"*** einfach so als String?

Wegen dem Doppelpunkt(&nbsp;**:**&nbsp;). Er sagt dem React-Router, dass es sich hier um einen **Route-Parameter** handelt daher änderbar ist. *Funktionieren es tut, so. - Yoda*

**Hinweis**: Es muss nicht unbedingt ***id*** heißen, du kannst den Parameter natürlich nennen, wie du willst, aber wir sollten ihn ***id*** nennen, ~~weil ich es so sage du kleiner Toyboi~~ damit es für uns mehr Sinn macht. Besonders in der Zukunft, wenn wir unseren Code überarbeiten.
  
Im Moment ist es wichtig, dass der Doppelpunkt(&nbsp;**:**&nbsp;) dem React-Router-Dom mitteilt, dass es sich um einen veränderbaren Teil der Route handelt, also könnte es alles sein.
  
>Es könnte eine Number sein.
>Es könnte auch ein String sein.

Es spielt überhaupt keine Rolle, es wird gegen diese Route matchen und wenn wir jetzt auf *load more* klicken, wird unsere Article-Page geladen. Alles hiervon geht jetzt also zur selben Page.

Dasselbe Component wird für jede der Article-Routes über diesen Route-Parameter geladen.

Der nächste Schritt besteht darin, innerhalb dieses Components die _id_ aus der Route zu identifizieren. Sobald wir die _id_ haben, können wir die Daten für diesen bestimmten Article abrufen und sie auf dieser Page anzeigen.
