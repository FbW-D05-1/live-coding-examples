#  Routes Intro 


##  Was sind Routes und warum (sind sie nicht Route 66) brauchen wir sie? 🤔


Ziemlich einfach:

Stell dir vor du willst eine React Website erstellen, die mehrseitig ist, also aus mehreren **Pages** (Stichwort: Route) besteht. Was wir bisher gelernt und gemacht haben, waren nur Apps auf einer einzigen Page (Seite), die keine Verlinkung zu anderen potentiellen Pages (Seiten) hatten.

Wir werden also lernen, wie man das mit dem **React-Router-Dom** machen kann.

Der React-Router selbst ist ein Package (Paket), das wir in einem React-Projekt installieren können, um im Projekt mehrere Pages zu verwenden.

**Nicht vergessen:** wenn wir eine React-Website erstellen, ist es technisch gesehen immer noch nur eine einzige HTML-Page, aus der die Website besteht.

Und das macht den Wechsel zwischen den Pages viel schneller und reibungsloser.

Zum Beispiel könnten wir eine Website mit drei Routes oder Pages, wie folgt haben: 

*Homepage* - *About Page* - *Contact Page*

Und wir könnten den React-Router so einrichten, dass er, wenn wir nur den Slash (Schrägstrich) und dann den Seitennamen eingeben, die besagte Component (Komponente) in unsere Adresse injiziert, siehe unten:


```

dies könnte unsere HomePage-Komponente sein:

localhost:3000/


dies könnte unsere AboutPage-Komponente sein

localhost:3000/about

  
und schließlich unsere ContactPage-Komponente:

localhost:3000/contact

```


Wir bauen also diese Site-Struktur auf, bei der jede **Page** sozusagen ihre eigene **Component** ist. Danach können wir **innerhalb** dieser Page-Component alle anderen Components, die diese Page bauen, also z.B.: Navbar, Sidebar, Footer, **verschachteln**.

  
##  Beginnen wir also mit einem völlig neuen Projekt, damit wir ganz von vorne anfangen können. 😉

  
Direkt nach dem CRE (create-react-app) / VITE install müssen wir ein Package installieren:

Wir müssen das **React-Router-Package** installieren, damit wir auf verschiedene Pages verlinken können.

Das React-Router-Package ist nicht in der React-Library enthalten (obwohl es von React erstellt wurde, smh 🤬). Wir müssen es separat in unser Projekt installieren.

*Wir öffnen ein Terminal:*

  
```bash

npm i react-router-dom@5.1

```

  
Warum Version 5.1? Weil wir uns den neuesten **Router Dom 6** ein wenig später kennenlernen werden und schauen, was sich seit 5.1 alles geändert hat. 

Wie immer, wenn wir CRA (create-react-app) benutzen, löschen wir alle Dateien, die wir nicht brauchen (oder wir behalten sie, ich bin nicht Joe Mama, du Sussy Baka).

Folgende Dateien könnt ihr ohne Bedenken immer löschen, direkt nach dem ihr ein neues React-Projekt angelegt habt:


```json

*src/logo.svg*

*src/reportWebVials.js*

*src/setupTests.js*

*public/favicon.ico*

*public/logo192.png*

*public/logo512.png*

*public/mainfest.json*

*public/robots.txt*

*in index.js: import reportWebVitals from './reportWebVitals' und 
reportWebVitals(); löschen*

*in index.html: link-Tag mit rel=icon,
                link-Tag mit rel=apple-touch-icon,
                link-Tag mit rel=manifest löschen*

**UNBEDINGT: IN DER _index.js_ MÜSST IHR <React.StrictMode> </React.StrictMode> LÖSCHEN UND NUR <APP /> ALLEINE STEHEN LASSEN, SONST FUNKTIONIERT DAS ROUTING NICHT!!!💀**

  ```


Wir werden wieder JSON-Server verwenden, um einige "articles" zu fetchen:

Erstell den Ordner **_data_** im Root-Verzeichnis und darin eine Datei namens **_db.json_**.

Fügt in der **_db.json_** folgende Data ein:


```json

{

"articles":  [{

"id":  "1",

"title":  "Welcome to the Site",

"author":  "Joe",

"body":  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"

},

{

"id":  "2",

"title":  "5 React Tips for Beginners",

"author":  "Joe's Mum",

"body":  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"

},

{

"id":  "3",

"title":  "VS Code Best Packages",

"author":  "Joe's Step Ladder",

"body":  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"

}

]

}

```


Das ist für's erste alles, meine Jabronies. 😎
