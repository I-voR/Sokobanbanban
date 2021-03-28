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
`index.js` file is the application's main menu.  

Plik `index.js` jest skryptem inicjującym Electrona.  
`index.js` file is an initializing script for Electron.  

Plik `package-lock.json` przechowuje informacje o wszystkich wymaganych pakietach, które mają być pobrane po wykonaniu polecenia `npm install`.  
`package-lock.json` file stores names and versions of all packages required by the project.  

Plik `package.json` przechowuje ogólne informacje o projekcie oraz informacje o wymaganych pakietach.  
`package.json` file stores overall information about the project and requirements.

## 3. Struktura folderu assets / Assets directory strucure

```txt
📦Sokobanbanban
 ┗ 📂assets
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

W folderze `assets/bg/` znajdują się tła, które są używane w menu głównym.  
In the `assets/bg/` directory there are backgrounds which are used in the main menu.
