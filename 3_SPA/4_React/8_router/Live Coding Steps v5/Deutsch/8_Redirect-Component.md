# Redirect-Komponente
​
Alles funktioniert ziemlich gut, aber was ist, wenn ein Benutzer zu einer Route geht, die nicht existiert?
Versuchen wir zum Beispiel zu gehen zu:
```
localhost:3000/monke
```
​
~~Nun, wir sind am Arsch, nicht wahr?~~
​
Keine Angst, Freunde, es gibt immer eine Lösung
​
## Was ist passiert?
​
Nun, im Moment sehen wir nur eine leere Seite unter der Navigationsleiste, weil wir keinen Raum für diese oder eine andere Seite eingerichtet haben, die nicht existiert. Wir können das verhindern, indem wir eine Art von "catch all"-Routen erstellen, die mit allem übereinstimmen, was nicht in unseren Routen definiert ist.
​
Wenn der Benutzer also zu einer Route geht, die existiert, dann sieht er diese Seite, aber wenn er zu einer Route geht, die nicht existiert, fangen wir sie ab ~~und versklaven unseren Benutzer~~. Und dann können wir innerhalb dieser Route entweder eine 404-Seite anzeigen oder, in unserem Fall, eine Redirect-Komponente.
## Eine Art "catch all"-Route erstellen
​
Wir wollen also eine Art Catch-All-Route ganz am Ende aller anderen Routen erstellen. Sie passt also nur, oder versucht nur zu passen, wenn keine der anderen passt, weil sie von oben nach unten verläuft.
​
Lasst uns also zuerst eine Routenkomponente erstellen und dann können wir für den Pfad ein Sternchen verwenden:
​
```jsx
// wie wir bereits gelernt haben, bedeutet es: schau einfach nach allem
<Route path="*"></Route>
```
​
Der Abgleich beginnt von oben:

> Versucht, /monke mit / abzugleichen
​
stimmt nicht überein

> Versucht, /monke mit /about zu vergleichen

stimmt nicht überein

> Versucht, /monke mit /contact abzugleichen

stimmt nicht überein

> Versucht, /monke mit * zu vergleichen

Nun, das Sternchen bedeutet irgendetwas, also passt es.
Und es sagt: "Es ist mir egal, was die Route ist, finde mich einfach. Es passt also auf Schrägstrich monke(/monke) oder Schrägstrich oder was auch immer, und hier können wir dann entweder eine Art 404-Seitenkomponente machen. Das werde ich nicht tun. Aber ich schlage vor, dass du es versuchst.
​
Stattdessen werde ich eine Umleitungskomponente verwenden, die den Benutzer auf eine andere Seite weiterleitet.
​
## Redirect component
​
Jetzt müssen wir das aus dem React-Router importieren:
​
```jsx
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
​
​
  Redirect,
} from "react-router-dom";
```
​
Und ganz unten können wir die Umleitungskomponenten einfach so verschachteln:
```jsx
<Route path="*">
    <Redirect to="/"/>
</Route>
```
​
Und alles, was wir tun müssen, ist, eine _**to**_ prop hinzuzufügen, die zu dem Ort führt, an den wir den Benutzer umleiten wollen. Ich werde es bei der Startseite belassen, aber es könnte auch etwas anderes sein. Wenn du das möchtest, spielt das keine Rolle.
​
Wenn ich nun im Browser auf forward slash monke gehe, werde ich einfach auf die Startseite zurückverwiesen.
​
Dabei spielt es keine Rolle, wie die Route lautet. Wenn sie mit keiner der anderen, die wir eingerichtet haben, übereinstimmt, wird sie einfach am Ende abgefangen und auf die Startseite umgeleitet.
​
Als nächstes werden wir über Abfrageparameter sprechen.