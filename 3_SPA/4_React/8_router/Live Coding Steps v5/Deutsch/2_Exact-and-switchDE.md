#  Exact Path und Switch
  

Wir haben den **React-Router** in der vorherigen Readme-Datei eingerichtet. Wir hatten dabei, falls ihr euch erinnert, jedoch ein *kleines Problemchen*. Unsere HomePage ist uns nämlich, wie ein thirsty Billie Eilish Stalker 🥵, überall hin gefolgt. Wir haben es zwar geschafft die einzelnen Pages aufzurufen, aber HomePage wollte, wie meine verrückte Ex-Freundin, einfach nicht verschwinden. 🙂

Warum also, tut HomePage das? Schließlich haben wir die Paths doch korrekt erstellt, oder?

Nun, es sind genau **zwei Dinge** im Spiel, die diesen Bug verursachen:

**Erstens** ist der Router derzeit noch nicht so eingestellt, dass er immer nur genau ein einziges **Page-Component** anzeigt, er könnte also auch alle drei Components auf einmal anzeigen, wenn er wöllte 😐. Das werden aber wir bald ändern, indem wir ein so genanntes **Switch-Component** verwenden, das es uns ermöglicht, jeweils nur eine Route-Component anzuzeigen.
 
**Zweitens** sind die Art und Weise, wie der React-Router selbst evaluiert wird, die Routes, die wir besuchen, und wie der React-Router sie mit den Routes, die wir im App-Component eingerichtet haben, abgleicht. *(matched | to match = abgleichen)*
Wenn wir hier und jetzt einfach zum **Slash (/)** gehen, schaut sich der React-Router **genau diesen Path** an und versucht ihn dann, mit den **Route-Paths** , die wir im **App-Component** eingerichtet haben, abzugleichen. Wenn wir zu **.../about** gehen, sehen wir jedoch zwei Components, nämlich **.../home** und **.../about**. Das ist so, weil der React-Router den Path betrachtet, mit dem wir zu **.../about** gehen.

**Dann versucht er diesen mit dem Route-Path abzugleichen, den wir in unserem Projekt-Ordner eingerichtet haben. Bevor er abgleicht, schaut er sich auch die Home-Route an, die wir eingerichtet haben, die nur ein** *.../* **ist. Und entscheidet, dass auch das ein Match (= Treffer) ist.**

***TL;DR:** im Grunde alles mit einem Slash, ohne was dahinter,  ist die Home-Route für React.*

Auch wenn es anfangs seltsam auf euch wirkt, genau so funktioniert das **Path-Matching** mit einem React-Router.

Von der Logik her existiert in *.../about* ein ***/*** also wird es erfolgreich gematched (abgeglichen). Dasselbe gilt für alle unsere anderen Page-Components. Und weil der */* zu *home* führt, wird das Home-Component auch angezeigt. Schlussendlich versucht er, */about* auch mit *.../contact* zu matchen, was ihm aber nicht gelingt. Deswegen sehen wir die Contact-Page nicht im Browser. 

Dies sind also die beiden Ursachen dafür, dass wir beide Components gleichzeitig sehen.
Erstens das Fehlen des **Switch-Component-Tags**, was bedeutet, dass mehr als ein Component gleichzeitig angezeigt werden kann, und zweitens die Art und Weise, wie der React-Router die **Routes matched**.

Im Folgenden lösen wir beide Probleme step-by-stepsister. 🥴


##  Kampfzeit 👙


Das erste, was wir tun wollen, ist **alle Routes mit dem Switch-Component zu wrappen (umhüllen)**. Das sorgt dafür, dass **immer nur ein Component** von den gewrappten Routes angezeigt werden darf.

Also importieren wir zuerst **Switch** vom **React-Router-Dom**:

  
```jsx

import  { BrowserRouter,  Route,  Switch }  from  "react-router-dom";

```

und dann lasst uns nach unten gehen und alle Route-Components mit Switch wrappen:


```jsx


<BrowserRouter>

<Switch>

  

<Route path="/">

<HomePage />

</Route>

<Route path="/about">

<AboutPage />

</Route>

<Route path="/contact">

<ContactPage />

</Route>

  

</Switch>

</BrowserRouter>

```

  
Es kann also immer nur eins dieser Components im Browser angezeigt werden.
  
Und wenn wir jetzt nur zum *.../* gehen, dann bekommen wir das Homepage-Component. **ABER** wenn wir irgendwo anders hingehen, ist es immer noch nur die Home-Page??? *Das ist SUS*. 😳

Haben wir was falsch gemacht? Am Switch-Component kann's nicht liegen, denn wir zeigen korrekterweise immer nur eine Page an, jedoch die gleiche und falsche... Wie sorgen wir also dafür, dass nicht immer nur die Home-Page angezeigt wird?

Zunächst müssen wir verstehen, warum es angezeigt wird und nicht die Page, die wir möchten.

Der Grund dafür liegt darin, dass wenn wir zu einer bestimmten Route gehen wollen, der React-Router versucht, die Routes von oben nach unten zu matchen (*home: .../* -> *.../about*). Erinnert euch daran, dass wir gesagt haben, dass wir immer nur maximal eine Page anzeigen können, wenn das Switch-Component, welches wir jetzt verwenden, nicht funktioniert. Aber wenn es mit *.../about* übereinstimmt, fängt es ganz oben in der File an. Und ganz oben matched es Home. Da wir immer nur genau eine Page anzeigen können, versucht der Router im folgenden auch gar nicht erst mit *.../about* abzugleichen.
  

##  Und jetzt?

  
Wir geben auf und benutzen keine Routen. 💀

jk, wir sind Sigma:

Nun, was wir tun können, ist, dass wir der Home-Route eine Prop namens **exact** hinzufügen:

  
```jsx

<Route exact  path="/">

<HomePage />

</Route>

```


Und jetzt wird der React-Router angewiesen, nur diesen **exact Path** für das Home-Component zu finden. Nun gehen wir also zu *.../about*. und während er vorher die Home-Route betrachtete und sagte: "Ja, das ist innerhalb dieser Route hier, also ist es ein Match.", wird es ab jetzt keinen Match mehr ergeben, da wir ihm die Bedingung setzen nur zu matchen (übereinzustimmen) wenn der Path exakt nur *.../* ist.

Jetzt funktioniert alles gn8. 😴
