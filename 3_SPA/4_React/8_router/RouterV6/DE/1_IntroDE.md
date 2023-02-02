#  Router V6

*Im Alltag eines Developers ändern sich Prozesse, Methoden und Wege schnell. Man muss sich oft eigenständig updaten, und das Neueste vom Neuesten kennen und können. Als gutes Prinzip gilt es, sich nicht nur auf das eigene alte Wissen, oder Sachen aus alten Tutorials zu verlassen, sondern sich regelmäßig die Dokumentationen der Sachen, die einen selbst betreffen, [Dokumentationen](https://reactrouter.com/en/main) anzuschauen, um auf dem aktuellen Stand der Dinge zu bleiben.*

Bisher haben wir nur mit **React Router V5.1** gearbeitet, jedoch hat es sich bereits zu **React Router V6** weiterentwickelt. Ich werde euch in diese neue Version geleiten und euch alle Anpassungen und Änderungen erklären, die ihr an eurem Code vornehmen müsst, damit er auch in V6 funktioniert. Dann werden wir einige unserer älteren React Projekte überarbeiten, wie z.B. die Rezepte-App, die wir mit Router v5.1 erstellt haben. Wir werden die Projekte aktualisieren, um React Router Version 6 zu verwenden, so dass wir deutlich sehen können, wo der Unterschied zur vorherigen Version liegt und ob es vorteilhafter für uns ist, oder nicht.

Zuerst installieren wir die neueste Router Version

>*zum Zeitpunkt, als dies geschrieben wurde, war es die Version 6, also fügt ihr @6.8 am Ende von npm install hinzu*

  
```bash

npm i react-router-dom

```


Wenn wir jetzt ***npm start*** ausführen würden, bekämen wir eine Menge Errors; probiert es aus und schaut nach. Das liegt daran, dass unser Code jetzt veraltet ist. *cries in boomer*
In der nächsten Lektion gehen wir die nun entstandenen Probleme an und machen unseren Code Router V6 konform.
