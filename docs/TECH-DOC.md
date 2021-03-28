# Sokobanbanban

*Projekt "Sokoban" na Motorola Science Cup 2020*  
*"Sokoban" Project for Motorola Science Cup 2020*

Dokumentacja Techniczna  
Technical Documentation

Dokumentacja Użytkownika jest w pliku /
User Documentation is in file
[README.md](./README.md)

## 1. Środowisko / Environment

* JavaScript ES 6
* HTML 5
* CSS 3
* [Node.js](https://nodejs.org/)
* [Electron.js](https://www.electronjs.org/)
* [jQuery](https://jquery.com/)
* [DataTables.net](https://datatables.net/)

## 2. Struktura Projektu / Project's Structure

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
In the `assets/` directory are stored all graphics used in the project.  

W folderze `docs/` przechowywana jest dokumentacja projektu.  
In the `docs/` directory is stored the documentation of the project.  

W folderze `hall/` przechowywana jest baza wyników graczy.  
In the `hall/` directory is stored the player score database.  

W folderze `menu-bar/` przechowywane są skrypty związane z paskiem narzędzi aplikacji Electrona.  
In the `menu-bar/` directory are stored scripts related to the menu bar of Electron application.  

W folderze `saves/` przechowywane są zapisy gier.  
In the `saves/` directory are stored game saves.  

W folderze `scripts/` przechowywane są wszystkie skrypty związane z działaniem programu.  
In the `scripts/` directory are stored all scripts on which the program depends.  

W folderze `static/` przechowywane są wszystkie strony wykorzystywane przez aplikację.  
In the `static/` directory are stored all sites used by the application.  

W folderze `style/` przechowywane są wszystkie arkusze stylów wpływające na wygląd aplikacji.  
In the `style/` directory are stored all stylesheets which are influencing the GUI design.  

Plik `index.html` jest głównym menu aplikacji.  
The `index.js` file is the application's main menu.  

Plik `index.js` jest skryptem inicjującym Electrona.  
The `index.js` file is an initializing script for Electron.  

Plik `package-lock.json` przechowuje informacje o wszystkich wymaganych pakietach, które mają być pobrane po wykonaniu polecenia `npm install`.  
The `package-lock.json` file stores names and versions of all packages required by the project.  

Plik `package.json` przechowuje ogólne informacje o projekcie oraz informacje o wymaganych pakietach.  
The `package.json` file stores overall information about the project and requirements.

## 3. Struktura folderu assets / Assets directory strucure

```txt
📂assets
 ┣ 📂bg
 ┃ ┣ 📜1.png
 ┃ ┣ 📜2.png
 ┃ ┣ 📜3.png
 ┃ ┣ 📜4.png
 ┃ ┗ 📜5.png
 ┣ 📂map_tiles
 ┃ ┣ 📜Crate.col.png
 ┃ ┣ 📜Floor..png
 ┃ ┣ 📜Grass..png
 ┃ ┣ 📜Plate..png
 ┃ ┣ 📜Wall.col.png
 ┃ ┗ 📜ZCratePlate.col.png
 ┣ 📂spritesheet
 ┃ ┣ 📜player.png
 ┃ ┣ 📜Steve_Back.png
 ┃ ┣ 📜Steve_Front.png
 ┃ ┣ 📜Steve_Left.png
 ┃ ┗ 📜Steve_Right.png
 ┗ 📜background.png
```

W folderze `assets/bg/` przechowywane są tła używane w menu głównym.  
In the `assets/bg/` directory are stored backgrounds used in the main menu.  

W folderze `assets/map-tiles/` przechowywane są wszystkie grafiki wykorzystywane jako pola w grze.  
In the `assets/map-tiles/` directory are stored all graphics used as tiles in the game.  

W folderze `assets/spritesheet/` przechowywane są wszystkie grafiki wykorzystywane jako tekstury gracza.  
In the `assets/spritesheet/` directory are stored all graphics used as player sprite.  

Plik `assets/background.png` jest tłem Poziomów oraz Edytora Map.  
The `assets/background.png` file is Levels' and Map Editor's background.  

## 4. Struktura folderu docs / Docs directory structure

```txt
📂docs
 ┣ 📂screenshots
 ┃ ┗ 📜*.png
 ┣ 📜LICENSE
 ┣ 📜MSC_Zadanie_Sokoban.pdf
 ┣ 📜README.md
 ┗ 📜TECH-DOC.md
```

W folderze `docs/screenshots/` są przechowywane wszystkie
zrzuty ekranu wykorzystywane w Dokumentacji.  
In the `docs/screenshots/` directory are stored all screenshots used in the Documentation.  

Plik `docs/LICENSE` jest [Licencją](./LICENSE) projektu.  
The `docs/LICENSE` file is the [Licence](./LICENSE) of the project.  

Plik `docs/MSC_Zadanie_Sokoban.pdf` jest plikiem zawierającym instrukcje dotyczące tego projektu.  
The `docs/MSC_Zadanie_Sokoban.pdf` file is a file containing instructions concerning this project.  

Plik `docs/README.md` jest [Dokumentacją Użytkownika](./README.md) Projektu.  
The `docs/README.md` file is the Project's [User Documentation](./README.md).  

Plik `docs/TECH-DOC.md` jest [Dokumentacją Techniczną](./TECH-DOC.md) Projektu.  
The `docs/TECH-DOC.md` file is the Project's [Technical Documentation](./TECH-DOC.md).  

## 5. Struktura folderu hall / Hall directory structure

```txt
📂hall
 ┗ 📜data.csv
```

Plik `hall/data.csv` jest plikiem przechowującym dane o graczach i ich wynikach.  
The `hall/data.csv` file is a file which stores data about players and their scores.  

## 6. Struktura folderu maps / Maps directory structure

```txt
📂maps
 ┣ 📂ascending
 ┃ ┗ 📜01...21.map
 ┣ 📂created
 ┣ 📂easy
 ┃ ┗ 📜01...07.map
 ┣ 📂hard
 ┃ ┗ 📜01...07.map
 ┗ 📂medium
   ┗ 📜01...07.map
```

W folderze `maps/ascending/` przechowywane są mapy (o numerach od `01` do `21`),
które są wykorzystywane w Drugim Module projektu.  
In the `maps/ascending/` are stored maps (with numbers from `01` to `21`)
which are used by the project's Second Module.  

W folderze `maps/created/` przechowywane są mapy utworzone przez gracza.  
In the `maps/ascending/` are stored maps wchich were created by the player.  

W folderze `maps/easy/` przechowywane są Proste mapy (o numerach od `01` do `07`),
które są wykorzystywane w Pierwszym Module projektu.  
In the `maps/easy/` are stored Easy maps (with numbers from `01` to `07`)
which are used by the project's Second Module.  

W folderze `maps/medium/` przechowywane są Średnio Trudne mapy (o numerach od `01` do `07`),
które są wykorzystywane w Pierwszym Module projektu.  
In the `maps/medium/` are stored Medium maps (with numbers from `01` to `07`)
which are used by the project's Second Module.  

W folderze `maps/hard/` przechowywane są Trudne mapy (o numerach od `01` do `07`),
które są wykorzystywane w Pierwszym Module projektu.  
In the `maps/hard/` are stored Hard maps (with numbers from `01` to `07`)
which are used by the project's Second Module.  
