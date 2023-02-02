
#  Nested Routes


Wie erstellen wir nun Nested Routes in V6?
  
Früher in V5.1 war es ja, wie folgt: 
  

```jsx

<Route path="/about/offers">

<OffersScreen />

</Route>

```


Und wenn wir es benutzen um nach *.../about/offers* zu gehen, wird es nicht mehr laden.

In der Konsole steht dann:

  
```

No routes matched location "/about/offers"

```


Wenn wir zu *.../about* gehen, wird es eine Tonne voll Fehler ausspucken, und der erste wird sein:

<code>
A < Route /> is only ever to be used as the child of < Routes /> element, never rendered directly. Bitte umhülle deine < Route /> in ein < Routes />
</code>

Übersetzt, heißt das:

<code>
Ein < Route /> darf nur als Kind von < Routes /> Elementen sein, der nie direct gerendert wird.
</code>

Wir wissen, was das bedeutet, aber wer es vergessen hat, kann *1_Intro.md* wiederholen.

Tun wir also, was uns die Konsole sagt:


```jsx

<Routes>


// Jetzt sind alle Paths relativ zum Parent.

// Heißt wir müssen "/about/offers" nicht mehr als Path angeben.

// Es kann jetzt einfach nur "offers" sein:


<Route path="offers"  element={<OffersScreen />}  />


</Routes>

```
  

Da jetzt alle Paths relativ zum Parent sind, solltet ihr euch kurz daran erinnern, wie wir gesagt haben, dass alle Paths in unserer App.jsx exakt (exact) sind? Ja, das wäre jetzt ein Problem, also ändern wir das:

  
```jsx

// Wir fügen einfach nur ein * hinzu und das löst das Problem:

<Route path="/about/*"  element={<About />}  />

```
  

Das Asterisk (**&nbsp;*&nbsp;**) bedeutet, dass es mit allen &nbsp;[**slug**](https://developer.mozilla.org/en-US/docs/Glossary/Slug)&nbsp; oder Paths matched, die nach dem about-Teil kommen.

***TL;DR:*** Asterisk wird mit allem **NACH** */about/* matchen.

Selbst wenn wir etwas Zufälliges nach */about/* hinzufügen, wird es uns nur die About-Page anzeigen, da die zufällige Page nicht existiert.

Wenn wir jetzt /about/offers testen, funktioniert es. *～(￣▽￣～) phew~*


##  Fixen wir ProductDetailsScreen:

  
Die ***Path-ID*** war also veränderbar, da jedes Produkt seine eigene ***ID*** hatte. Mit **useRouteMatch(&nbsp;)** haben wir den aktuellen Path, auf dem wir uns gerade befinden, bekommen. Da unsere **Paths** nun aber **relativ** sind, brauchen wir sie nicht mehr:

  
```jsx

<Routes>

<Route path="offers"  element={<OffersScreen />}  />

</Routes>

```


Geht zurück zu **App.jsx** und fügt ein Asterisk (**&nbsp;*&nbsp;**) am Ende nach ***.../:id*** ein.

Jetzt gehen wir zur **Product-Page** und wählen ein Produkt aus, dann fügen wir ***/offers*** hinzu und alles wird funktionieren.

(ﾉ◕ヮ◕)ﾉ*･ﾟ✧ Herzlichen Glückwunsch, ihr habt die wichtigsten Änderungen in V6 gelernt! 
