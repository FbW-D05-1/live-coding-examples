#  Query Parameters
​
​
Alles klar Leute, es gibt noch eine Sache, die ich euch zeigen möchte, wenn es um den React-Router geht, und das sind Query-Parameter, nicht zu verwechseln mit Route-Parameter.

Query-Parameter sind die Teile der URL, die du am Ende siehst. Wir haben gelernt, dass z.B. alles nach dem Fragezeichen (**?**) normalerweise **Schlüssel-Wert-Paare** sind, wie *name=ali* oder *=email* usw.
​
​
```jsx
​
localhost:3000/articles/?name=ali
​
```
  
​
Sie werden oft für die Suche auf einer Website verwendet, und wir werden später sehen, wie man das mit ihnen macht.

Aber jetzt möchte ich euch erst einmal die Idee mit einem einfachen Beispiel vorstellen:

##  Let's Try:

Wenn wir Query-Parameter verwenden, müssen wir nicht für jeden einzelnen eine eigene Route einrichten. Wenn wir z. B. einen Query-Parameter auf der Contact-Route haben wollen, müssen wir keine separaten Routes mit diesem Query-Parameter einrichten, wie hier:
  
​
```jsx
​
<Route path="/contact/?">
​
<ContactPage />
​
</Route>
​
```

Stattdessen können wir einfach direkt ins Contact-Component gehen und alle Query-Parameter am Ende dieser Route erkennen lassen.

​
##  Let's do:

Wir tun das, indem wir einen anderen Hook von React-Router-Dom verwenden, welches wir ganz oben in der Datei importieren müssen:
​
​
```jsx
​
import  { useLocation }  from  "react-router-dom";
​
```
Im Grunde ermöglicht uns das, einen sogenannten **queryString** aus dem Path im Browser zu erhalten. Und den speichern wir flott als einer entsprechend benannten *const*:
```jsx
​
const  queryString  =  useLocation().search;
​
```
Mit ***useLocation*** erhalten wir also Informationen über den aktuellen **Standort**, an dem wir uns im Browser befinden.

Es gibt eine Property namens ***search***, die wir abfragen wollen, und genau das ist der Query-Parameter. Er heißt ***search*** und liefert uns:

>das Fragezeichen,

>den Schlüssel,

>das Gleichheitszeichen,

>und den Value

​
Geben wir das in die Konsole ein:  
​
​
```js
​
console.log(queryString);
​
```
  
​
Wenn wir nun die Contact-Page im Browser aufrufen und den Link entsprechend manipulieren, sollte fast alles protokolliert werden. Versucht zum Beispiel etwas, wie das hier: ***http://localhost:3000/contact?name=monke***

unsere Konsole sollte ***?name=monke*** anzeigen.

Als Nächstes müssen wir unseren ***queryString*** in ein Format bringen, mit dem wir die verschiedenen Eigenschaften leicht abrufen können.

Dazu verwenden wir eine so genannte...

​
##  URL Search Params Function

Es handelt sich hier um stinknormales Javascript und nicht React. Und was wir wollen, ist ein ***new URLSearchParams()*** Object. Alles, was wir dafür brauchen, ist unser queryString hinein zu setzen:

```js
​
const  queryParams  =  new  URLSearchParams(queryString);
​
```

Dadurch erhalten wir ein ***queryParams-Object***, und dieses Object verfügt über eine **get-Methode**, um einen bestimmten Parameter abzurufen:

```jsx
​
const  name  = queryParams.get("name");
​
```

Auf diese Weise könnte ich das ***name*** erhalten. Was wir also tun, ist zu sagen, wir wollen diesen ***Name-Parameter (?name=monke)*** und wir speichern ihn in dieser ***Name-Constant***, und das wird der ***Value von monke*** sein.

Jetzt können wir das im Browser ausgeben:

```jsx
​
<h2>Hey {name}, Contact us here...</h2>
​
```
​
Großartig. Wenn wir nun einen anderen Value eingeben, ändert sich dieser ebenfalls.

Das also, meine Freunde, ist der ***React-Router, in a nutshell***. Du wirst ihn in Zukunft verdammt oft in den verschiedensten Projekten verwenden, sei es privat oder beruflich. Er ist so wichtig.

Morgen werden wir uns mit Route 6 beschäftigen, good night. *still no route 66 , sad*