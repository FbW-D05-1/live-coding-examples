# Backend Web-Entwicklung

bis jetzt haben wir uns mit Frontend-Technologien beschäftigt (abgesehen von Firebase). Aber um ein echter Full-Stack Developer zu werden, braucht man das Wissen um die dunkle Seite

## Was genau ist das Backend?

Es besteht aus Dingen wie einem Server, der deine Dateien für dein Frontend bereitstellt

eine Datenbank, in der Ihre Benutzerdaten wie Logins und Passwörter sowie Ihre Anwendungen gespeichert werden können.

Hier erstellen Sie also Ihre Geschäftslogik und legen fest, wie Ihre Webanwendungen funktionieren, z. B. die Berechnung von Flugpreisen oder die Durchführung von Zahlungen und dergleichen mehr.

Ein Beispiel aus dem wirklichen Leben:

Stellen Sie sich vor, Sie sind auf einer Website, auf der Sie Eintrittskarten für Veranstaltungen oder Festivals buchen können. Sobald Sie gefiltert haben und Ihre Lieblingsveranstaltung gefunden haben, buchen Sie die Eintrittskarte mit Ihrer E-Mail-Adresse, der Anzahl der Karten und Ihrem Namen bzw. Ihren Registrierungsdaten. All diese Informationen werden an eine Datenbank gesendet. Der Einfachheit halber können Sie sich diese Datenbanken als riesige Excel-Tabellen vorstellen, die irgendwo liegen. Und alle Daten, die Sie eingeben, werden in diesen Tabellen gespeichert. Das heißt, wenn Sie sich zu einem späteren Zeitpunkt wieder auf der Website anmelden, kann sie alle Daten, die mit Ihrem Konto verbunden sind, aus ihrer Datenbank abrufen. So könnte sie zum Beispiel Ihr Ticket für das Musikfestival Rock am Ring abrufen.

Eine wirklich gute Analogie für eine Full-Stack-Webanwendung ist die eines Restaurants.
Es gibt also eine Front of House, das ist das Hauptrestaurant, in dem Ihre Kunden sitzen und zu Abend essen. (Front End)

Dann gibt es aber auch die Küche, in der hauptsächlich gekocht wird (Backend).

Dann gibt es noch die Speisekammer, in der du alle deine Zutaten und alles, was du für die Zubereitung des Essens brauchst, aufbewahrst.(Datenbank)

Und schließlich gibt es die Kellner, die den Kunden die Speisen und Getränke servieren (API).


In dieser Analogie ist unser Front-of-House-Restaurant im Grunde die Client-Seite.
Das ist das, was der Benutzer im Browser sieht. Er kann mit Hilfe von Javascript mit der Website interagieren und sieht die Informationen, die mit HTML und CSS angezeigt werden.

Etwas weiter hinten im Backend befindet sich die Küche, die mit unserem Server vergleichbar ist. Dies ist im Grunde der Ort, von dem aus alle unsere Gerichte serviert werden. Wenn also ein Restaurantkunde ein Steak bestellt, wird diese Bestellung an den Server geschickt, und der Server sollte das zurückschicken, was der Kunde wollte, nämlich das eigentliche Steak.

Die Speisekammer schließlich, in der alle Zutaten gespeichert werden, ist natürlich die Datenbank. Hier werden alle unsere Benutzerdaten, unsere Veranstaltungsdaten, unsere Ticketdaten, alle Daten, die unsere Website funktionieren lassen, gespeichert. Hier findet also die Trennung zwischen dem Front-End und dem Back-End statt. Es ist die Grenze zwischen dem vorderen Teil des Hauses und dem Restaurant, der Küche und der Speisekammer.


Man könnte ein Restaurant haben, in dem man alle Gerichte vor den Augen des Kunden zubereitet, und zwar direkt an seinem Tisch. Sie bringen alle Zutaten dorthin und bereiten sie direkt vor Ort zu. Der Nachteil in diesem Fall ist, dass erstens Ihr geheimes (Krabbenburger-)Rezept, das über Generationen von Ihrer Urgroßmutter zu Ihrer Großmutter zu Ihrer Mutter zu Ihnen selbst weitergegeben wurde, nun, das ist irgendwie offengelegt, oder? Jeder könnte sehen, was Sie tun, und könnte es nachmachen.

Und das gilt auch für die Geschäftslogik Ihrer Website.

Wenn Sie etwas geheim halten wollen, z. B. Ihre API-Schlüssel oder die Art und Weise, wie Sie Ihre spezielle Anwendung implementieren, dann wollen Sie nicht, dass dies jedes Mal sichtbar ist, wenn jemand eine Website aufruft, richtig?

Das andere Problem ist, dass es sehr zeitaufwändig sein kann, das Gericht vor den Augen des Kunden im Restaurant zuzubereiten, weil man alle Zutaten mitbringen und in kleinen Chargen einzeln zubereiten müsste, und bei Websites bedeutet das eine lange Ladezeit.

Wenn man also eine Menge Code zum Browser transportiert, wo er ausgeführt werden muss, dauert das in der Regel viel länger, als wenn man es im Backend macht.
Die Alternative ist also, dass wir unsere Zutaten aus unserer Datenbank nehmen, also unser Server mit der Datenbank interagiert, dann führen wir etwas Code auf unserem Server aus und erstellen die Anwendung oder in diesem Fall das Gericht, das dann an die Client-Seite geliefert wird. Das bedeutet, dass wir keine der Zutaten transportieren müssen, wir müssen nicht viel Code transportieren, was Ihre Website enorm beschleunigen wird und auch Ihre Geschäftslogik verborgen hält.


## Technologien

Für das Backend gibt es eine Reihe von Technologien, die üblicherweise für diesen Zweck verwendet werden. Dazu gehören PHP, Ruby, Java, asp.net und viele andere.

Darüber hinaus gibt es Frameworks wie CakePHP oder Ruby on Rails oder Spring, Express, die die Entwicklung mit der von Ihnen gewählten Backend-Technologie beschleunigen.

Die Hauptaufgabe dieser Frameworks besteht darin, die Menge an sich wiederholenden Aufgaben zu reduzieren, die ein Entwickler zu erledigen hat. Genauso wie man nicht jedes Mal, wenn man eine zusätzliche Seite erstellt, den Boilerplate-Code für E-Mails schreiben möchte, machen viele dieser Frameworks wie Ruby on Rails oder Express das Leben eines Entwicklers viel einfacher, indem sie einen Teil der Routinearbeit abnehmen und eine Menge Zeit sparen.

Wir werden sowohl Node.js als auch das am häufigsten verwendete Framework, nämlich Express, kennenlernen. Wenn Sie daran interessiert sind, mehr über Backend zu lernen, würde ich Ihnen empfehlen, nach DCI Java Spring oder Ruby on Rails zu lernen.