#  Der useParams-Hook


Der nächste Schritt besteht also darin, den _ID_-***Route-Parameter*** im Article-Component zu extrahieren, so dass wir ihn verwenden können, um den Artikel mit dieser _ID_ abzurufen. Und dann können wir den gesamten Inhalt des abgerufenen Articles in Article-Page anzeigen.

***TL***;***DR***: Wir wollen es so einstellen, dass jeder Inhalt des abgerufenen Articles in ArticlePage.jsx injected wird.

Wir gehen zurück zum ArticlePage.jsx-Component, wo wir den Parameter _ID_ extrahieren müssen.  

Hier kommt also *le epic* Hook, zuerst importieren: 😾
  

```jsx

//Vergesst nicht, dass es von rrd (react-router-dom) kommt und nicht von react!

import  {useParams}  from  'react-router-dom'

```

 
Das können wir jetzt hier unten verwenden:

  
```jsx

export  default  function  ArticlePage()  {

  

const  params  =  useParams();

```
  

Damit erhalten wir ==ein **Parameter-Object**, und in diesem Object werden alle Route-Parameter aus der URL dieser speziellen Page enthalten sein.== Es wird sich also die URL anschauen und sehen, dass wir einen ID-Parameter haben.

Also wird es die Property => **params.id** verwenden.

Und der Name dieser Property wird durch den Namen des Route-Parameters innerhalb des Route-Components bestimmt => ==< Route path="/articles/:id" >==

Da ich es _id_ genannt habe, wird es für mich *params.id* sein, wenn es *abcd* wäre, würde es *params.abcd* sein. Du verstehst das Prinzip.

Genau, wie Props könnten wir weitergehen und das als *params.id* verwenden, aber ich werde es destructuren:


```jsx

const  {  id  }  =  useParams();

```
  

Und dann wollen wir sehen, ob es funktioniert:


```jsx

return  <div>Article - { id }</div>;

```
  
  
Öffnet den Browser und prüft, ob alle Pages die gleiche _ID_, wie die URL erhalten. 

AYYY 😎


##  Jetzt können wir diesen einzelnen Artikel abrufen.

  
Importieren wir wieder unseren old buddy **useFetch-Hook** und verwenden ihn, um einzelne Articles abzurufen.

Abrufen eines einzelnen Articles nach _ID_ mit unserem Hook:
  

```jsx

const  url  =  `http://localhost:4000/articles/${id}`;

const  { data:  article,  isPending,  error  }  =  useFetch(url);

```


Jetzt können wir Loadings und Errors einbringen, *wie immer werde ich nicht alles noch einmal erklären. - Evil Lord Ari*
  

```jsx

{isPending  &&  <h2>Loading...</h2>}

{error  &&  <h2>{error}</h2>}

```
  

Da wir nicht durch unsere Articles mappen werden (weil es ein einziges Article ist, zulul), müssen wir stattdessen, wie oben den **&&**-Operator mit Loading und Error verwenden.
  

```jsx

{article  && (

<div>

<h2>{article.title}</h2>

<p>By {article.author}</p>

<p>{article.body}</p>

</div>

)}

```
  

Alles hier sollte selbsterklärend sein, aber für den Fall, dass ihr nicht wisst, was .title, .author, .body ist, schaut euch db.json an, oder committed Sudoku, nein Spaß tut das nicht. Zeigt lieber mehr Cummitment im Unterricht! 💦

Jetzt ist jeder Article, den wir anklicken, ein dynamischer ==***Edge Lord***==, kek.
