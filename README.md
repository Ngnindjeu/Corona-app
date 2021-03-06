# Vorstellung der APP

**Corona-History-App** ist eine Webanwendung zur Visualisierung der Verläufe von Corona-Fällen der letzten 30 Tage angefangen mit dem Tag vor dem aktuellen Tag.

# Installation

Die App wurde mit Angular  entwickelt und das Frontend mit Bootstrap 4.6 entworfen.
Sollte der Ordner `corona-app/node_modules` nicht zu finden sein, muss mit dem Befehl `npm install `neu generiert werden.

Der Source-Code wurde mit der IDE Webstorm geschrieben, es kann jedoch mit anderen gängigen IDEs geöffnet werden.

# Starten
Die App kann mit dem Befehl `ng serve` gestartet werden und ist nach erfolgreichem Start über die URL   `http://localhost:4200/`  ansprechbar.
Sollte der Port 4200 schon besetzt sein, dann wird in der Konsole vorgeschlagen, einen neu zufällig generierten Port zu nutzen.


# Externe Abhängigkeiten
- Die Länder-Informationen werden von der konstenlosen Unviversal-Rest-API : https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
- Die Corona--Informationen werden von der konstenlosen Unviversal-Rest-API : https://disease.sh/docs/

# Beispiel-Seiten


- Standardmäßig wird die Startseit bzw. die History-Seite (**ohne Angabe des Landes** [`/history`]) zur Historie-Seite mit **_Cameroon_** (`/history/Cameroon`) als Land-Angabe umgeleitet.
In der Historie Seite wird Meta-Informationen des Landes in Bezug auf Corona angezeigt und der graphische Verlauf der Corona-Fälle der letzten 30 Tage veranschaulicht. (![sieher hier](https://git.thm.de/dlns50/swtp_vorleistung/-/blob/da8e5517fc0b247a323a86095608c50e435d39c0/corona%20historie%20app%20images/startseite%20cmr.PNG?raw=true))

- Außerdem wird in der Seite **Gesamte Daten** (`/all`) alle verfügbaren Länder mit deren Gesamt-Infos bezogen auf Corona aufgelistet. 
Bei Click auf den **Button Historie anzeigen** wird man auf die Seite der Historie für das gewählte Land wietergeleitet. (![siehe hier](https://git.thm.de/dlns50/swtp_vorleistung/-/blob/da8e5517fc0b247a323a86095608c50e435d39c0/corona%20historie%20app%20images/l%C3%A4nder.PNG?raw=true))
