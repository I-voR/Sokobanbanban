# Sokobanbanban

*Projekt "Sokoban" na Motorola Science Cup 2020*  
Dokumentacja Techniczna  

Dokumentacja Użytkownika jest w pliku [README.md](./README.md)  
English version of the Technical Documentation
is in the [TECH-DOC-EN.md](./TECH-DOC-EN.md) file.  

## 1. Środowisko

* JavaScript ES 6
* HTML 5
* CSS 3
* [Node.js](https://nodejs.org/)
* [Electron.js](https://www.electronjs.org/)
* [jQuery](https://jquery.com/)
* [DataTables.net](https://datatables.net/)

## 2. Struktura Projektu

```txt
📦Sokobanbanban
 ┣ 📂assets
 ┣ 📂docs
 ┣ 📂hall
 ┣ 📂maps
 ┣ 📂menu-bar
 ┣ 📂saves
 ┣ 📂scripts
 ┣ 📂static
 ┣ 📂style
 ┣ 📜index.html
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

W folderze `assets/` przechowywane są wszystkie grafiki wykorzystywane w projekcie.  

W folderze `docs/` przechowywana jest dokumentacja projektu.  

W folderze `hall/` przechowywana jest baza wyników graczy.  

W folderze `menu-bar/` przechowywane są skrypty
związane z paskiem narzędzi aplikacji Electrona.  

W folderze `saves/` przechowywane są zapisy gier.  

W folderze `scripts/` przechowywane są wszystkie skrypty związane z działaniem programu.  

W folderze `static/` przechowywane są wszystkie strony wykorzystywane przez aplikację.  

W folderze `style/` przechowywane są wszystkie
arkusze stylów wpływające na wygląd aplikacji.  

Plik `index.html` jest głównym menu aplikacji.  

Plik `index.js` jest skryptem inicjującym Electrona.  

Plik `package-lock.json` przechowuje informacje o wszystkich wymaganych
pakietach, które mają być pobrane po wykonaniu polecenia `npm install`.  

Plik `package.json` przechowuje ogólne informacje o
projekcie oraz informacje o wymaganych pakietach.  

## 3. Struktura folderu assets

```txt
📂assets
 ┣ 📂bg
 ┃ ┣ 📜1...5.png
 ┣ 📂map_tiles
 ┃ ┣ 📜Crate.col.png
 ┃ ┣ 📜Floor..png
 ┃ ┣ 📜Grass..png
 ┃ ┣ 📜Plate..png
 ┃ ┣ 📜Wall.col.png
 ┃ ┗ 📜ZCratePlate.col.png
 ┣ 📂spritesheet
 ┃ ┗ 📜Steve_[Back, Front, Left, Right].png
 ┗ 📜background.png
```

W folderze `assets/bg/` przechowywane są tła używane w menu głównym.  

W folderze `assets/map-tiles/` przechowywane są wszystkie grafiki wykorzystywane jako pola w grze.  

W folderze `assets/spritesheet/` przechowywane są wszystkie grafiki wykorzystywane jako tekstury gracza.  

Plik `assets/background.png` jest tłem Poziomów oraz Edytora Map.  

## 4. Struktura folderu docs

```txt
📂docs
 ┃ ┣ 📂map_tiles
 ┃ ┃ ┗ 📜*.png
 ┃ ┣ 📂spritesheet
 ┃ ┃ ┗ 📜*.png
 ┃ ┗📜*.png
 ┣ 📜LICENSE
 ┣ 📜MSC_Zadanie_Sokoban.pdf
 ┣ 📜README-EN.md
 ┣ 📜README.md
 ┣ 📜TECH-DOC-EN.md
 ┗ 📜TECH-DOC-PL.md
```

W folderze `docs/screenshots/` są przechowywane wszystkie
zrzuty ekranu wykorzystywane w Dokumentacji.  

Foldery `docs/screenshots/map_tiles/` oraz `docs/screenshots/spritesheet/`
są folderami przekopiowanymi z folderu `assets/` w celu pełnej kompatybilności Dokumentacji.

Plik `docs/LICENSE` jest [Licencją](./LICENSE) projektu.  

Plik `docs/MSC_Zadanie_Sokoban.pdf` jest plikiem zawierającym instrukcje dotyczące tego projektu.  

Plik `docs/README.md` jest [Dokumentacją Użytkownika](./README.md) Projektu.  

Plik `docs/README-EN.md` jest
[Dokumentacją Użytkownika](./README-EN.md)
Projektu w języku angielskim.  

Plik `docs/TECH-DOC-PL.md` jest [Dokumentacją Techniczną](./TECH-DOC-PL.md) Projektu.  

Plik `docs/TECH-DOC-EN.md` jest
[Dokumentacją Techniczną](./TECH-DOC-PL.md)
Projektu w języku angielskim.  

## 5. Struktura folderu hall

```txt
📂hall
 ┗ 📜data.csv
```

Plik `hall/data.csv` jest plikiem przechowującym dane o graczach i ich wynikach.  
Jeśli nie ma folderu `hall/` bądź pliku `hall/data.csv`,
to zostanie automatycznie utworzony przy uruchomieniu programu

## 6. Struktura folderu maps

```txt
📂maps
 ┣ 📂ascending
 ┃ ┗ 📜01...21.map
 ┣ 📂created
 ┃ ┗ 📜*.map
 ┣ 📂easy
 ┃ ┗ 📜01...07.map
 ┣ 📂hard
 ┃ ┗ 📜01...07.map
 ┗ 📂medium
   ┗ 📜01...07.map
```

W folderze `maps/ascending/` przechowywane są mapy (o numerach od `01` do `21`),
które są wykorzystywane w Drugim Module projektu.  

W folderze `maps/created/` przechowywane są mapy utworzone przez gracza.  

W folderze `maps/easy/` przechowywane są Proste mapy (o numerach od `01` do `07`),
które są wykorzystywane w Pierwszym Module projektu.  

W folderze `maps/medium/` przechowywane są Średnio Trudne mapy (o numerach od `01` do `07`),
które są wykorzystywane w Pierwszym Module projektu.  

W folderze `maps/hard/` przechowywane są Trudne mapy (o numerach od `01` do `07`),
które są wykorzystywane w Pierwszym Module projektu.  

Struktura pliku `.map`:

* Wiersze `1` - `20`: Informacja o poszczególnych polach mapy.
  * Pole oznaczone cyfrą `0` oznacza `Skrzynię`.
  * Pole oznaczone cyfrą `1` oznacza `Podłogę`.
  * Pole oznaczone cyfrą `2` oznacza `Trawę`.
  * Pole oznaczone cyfrą `3` oznacza `Płytkę`.
  * Pole oznaczone cyfrą `4` oznacza `Ścianę`.
  * Pole oznaczone cyfrą `5` oznacza `Skrzynię na Płytce`.
* Wiersz `21`: Pozycja gracza.
* Wiersze `22` - `27`: Informacja o tym, które pole powinno być zamienione na który plik.
* Wiersz `28`: Informacja o wymaganiach na dodatkowe punkty danej mapy -
  jest to wiersz dodatkowy, który pojawia się w mapach Modułu II,
  znajdujących się w folderze `maps/ascending/`.

## 7. Struktura folderu saves

```txt
📂saves
 ┣ 📜1,01,0,0,00-00-00.sav
 ┣ 📜2,01,0,0,00-00-00.sav
 ┗ 📜3,01,0,0,00-00-00.sav
```

W folderze `saves/` znajdują się trzy pliki z zapisami gry.  
Jeśli nie ma folderu `saves/` bądź któregoś z plików zapisu,
to zostaną automatycznie utworzony przy uruchomieniu programu

Struktura nazwy pliku zapisu:  
`<numer porządkowy zapisu>,<poziom>,<łączny wynik>,<ilość ruchów na mapie>,<czas gry na mapie>.sav`

## 8. Struktura folderu static

```txt
📂static
 ┣ 📜credits.html
 ┣ 📜custom.html
 ┣ 📜difficulty.html
 ┣ 📜leaderboard.html
 ┣ 📜level.html
 ┣ 📜levelmaker.html
 ┗ 📜saves.html
```

Strona `credits.html` jest stroną informującą o autorach projektu oraz podziękowaniach.  

Strona `custom.html` jest stroną służącą do uruchamiania autorskich map.  

Strona `difficulty.html` jest stroną służącą
do uruchamiania losowej mapy o wybranym poziomie trudności.  

Strona `leaderboard.html` jest stroną wyświetlającą wyniki graczy.  

Strona `level.html` jest stroną, gracz rozwiązuje mapy.  

Strona `levelmaker.html` jest stroną, gdzie tworzy się mapy.  

Strona `saves.html` jest stroną z zapisami gier trybu o rosnącym poziomie trudności.  

## 9. Struktura folderu style

```txt
📂style
 ┣ 📜borders.css
 ┣ 📜colors.css
 ┣ 📜credits.css
 ┣ 📜custom.css
 ┣ 📜difficulty.css
 ┣ 📜electronstyles.css
 ┣ 📜infobox.css
 ┣ 📜leaderboard.css
 ┣ 📜level.css
 ┣ 📜main.css
 ┣ 📜maker.css
 ┗ 📜saves.css
```

Plik `static/borders.css` zawiera style obramowań (borderów) na wszystkich stronach.  

Plik `static/colors.css` zawiera kolory wykorzystywane na wszystkich stronach.  

Plik `static/credits.css` zawiera style używane
na stronie z podziękowaniami (`credits.html`).  

Plik `static/custom.css` zawiera style używane
na stronie służącej do uruchamiania autorskich map (`custom.html`).  

Plik `static/difficulty.css` zawiera style używane
na stronie służącej do uruchamiania losowej
mapy o wybranym poziomie trudności (`difficulty.html`).  

Plik `static/electronstyles.css` zawiera style
paska narzędzi, wykorzystywanego na wszystkich stronach.  

Plik `static/infobox.css` zawiera style wszystkich infoboxów.  

Plik `static/leaderboard.css` zawiera style używane
na stronie z wynikami (`leaderboard.html`).  

Plik `static/level.css` zawiera style używane
na stronie, gdzie gracz rozwiązuje mapy (`level.html`).  

Plik `static/main.css` zawiera ogólne style używane na wszystkich stronach.  

Plik `static/maker.css` zawiera style używane
na stronie edytora map (`levelmaker.html`).  

Plik `static/saves.css` zawiera style używane
na stronie z zapisami (`saves.html`).  

## 10. Struktura folderu menu-bar

## 11. Struktura folderu scripts
