#Vorstellung der APP
**Corona-History-App** ist eine Webanwendung zur Visualisierung der Verläufe von Corona-Fällen der letzten 30 Tage angefangen mit dem Tag vor dem aktuellen Tag.

#Installation
Die App wurde mit Angular  entwickelt und das Frontend mit Bootstrap 4.6 entworfen.
Sollte der Ordner `corona-app/node_modules` nicht zu finden sein, muss mit dem Befehl `npm install `neu generiert werden.

Der Source-Code wurde mit der IDE Webstorm geschrieben, es kann jedoch mit anderen gängigen IDEs geöffnet werden.

#Starten
Die App kann mit dem Befehl `ng serve` gestartet werden und ist nach erfolgreichem Start über die URL   `http://localhost:4200/`  ansprechbar.
Sollte der Port 4200 schon besetzt sein, dann wird in der Konsole vorgeschlagen, einen neu zufällig generierten Port zu nutzen.


#Externe Abhängigkeiten
Die Länder-Informationen werden von der konstenlosen Unviversal-Rest-API : https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
Die Corona--Informationen werden von der konstenlosen Unviversal-Rest-API : https://disease.sh/docs/

#Beispiel-Seiten

Standardmäßig wird die Startseit bzw. die History-Seite (**ohne Angabe des Landes** [`/history`]) zur Historie-Seite mit **_Cameroon_** (`/history/Cameroon`) als Land-Angabe umgeleitet, wie es hier im Bild zu sehen ist.
In der Historie Seite wird Meta-Informationen des Landes in Bezug auf Corona angezeigt und der graphische Verlauf der Corona-Fälle der letzten 30 Tage veranschaulicht.



//Graphik



Außerdem wird in der Seite **Gesamte Daten** (`/all`) alle verfügbaren Länder mit deren Gesamt-Infos bezogen auf Corona aufgelistet (Siehe unteres Bild). 
Bei Click auf den **Button Historie anzeigen** wird man auf die Seite der Historie für das gewählte Land wietergeleitet.

// Bild Länder

