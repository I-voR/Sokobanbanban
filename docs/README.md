# Sokobanbanban

*Projekt "Sokoban" na Motorola Science Cup 2020*  
*"Sokoban" Project for Motorola Science Cup 2020*

Dokumentacja Użytkownika  
User Documentation

## Zakon Technomantów

* Wielki Mistrz (Kapitan) / Grand Master (Team Leader): **Iwo Strzeboński**
* i pozostali Bracia (Członkowie) / and other Brethren (Members):
  * **Igor Kaliciński**
  * **Jan Krzemień**
  * **Zbyszko Sobecki**
  * **Wojciech Orłowski**

## Autorzy / Authors

* **Iwo Strzeboński**:
  * Projektowanie wyglądu interfejsu graficznego / GUI Design
  * Różne tryby / Level Modes
  * Poziomy trudności map / Map Difficulty
  * Dokumentacja / Documentation
* **Igor Kaliciński**:
  * Edytor poziomów / Level Editor
  * Hala Sław / Hall of Fame
  * Zapisy gier / Save Slots

## Podziękowania / Credits

* **Laura Wheeler** -
twórczyni *Sokoban Junior 1*, skąd pochodzą mapy /
author of *Sokoban Junior 1*, from maps in this game are from

## Praca na kodzie źródłowym / Working on the source code

1. Zainstaluj / Install [Node.js]
2. Pobierz wymagane pakiety za pomocą polecenia: / Download required packages using:

```cmd
npm install
```

3. Aby uruchomić program, należy w konsoli wpisać polecenie: / To start the program, you need to use that command in the command line:

```cmd
npm start
```

## Budowanie Projektu / Building the Project

Do zbudowania projektu należy użyć pakietu ElectronForge, który także jest pobierany jako wymagany pakiet.  
To build the project you should use ElectronForge, which is also downloaded as a required dependency.

```cmd
npx @electron-forge/cli import
npm run make
```

[Node.js]:https://nodejs.org/en/download/
