# Sokobanbanban

*Projekt "Sokoban" na Motorola Science Cup 2020*  
Dokumentacja Użytkownika  

Dokumentacja Techniczna jest w pliku [TECH-DOC-PL.md](./TECH-DOC-PL.md).  
English version of the User Documentation is in the [README-EN.md](./README-EN.md) file.  

## 1. Najnowsza stabilna wersja: <u style="font-size: 2.5rem">3.0.1</u>

## 2. Zakon Technomantów

* Wielki Mistrz (Kapitan Drużyny): **Iwo Strzeboński**
* i pozostali Bracia (Członkowie):
  * **Igor Kaliciński**
  * **Jan Krzemień**
  * **Zbyszko Sobecki**
  * **Wojciech Orłowski**

## 3. Autorzy

* **Iwo Strzeboński**:
  * Projektowanie wyglądu interfejsu graficznego / GUI Design
  * Różne tryby / Level Modes
  * Poziomy trudności map / Map Difficulty
  * Dokumentacja / Documentation
* **Igor Kaliciński**:
  * Edytor poziomów / Level Editor
  * Hala Sław / Hall of Fame
  * Zapisy gier / Save Slots

## 4. Licencja

[WTFPL by Sam Hocevar](./LICENSE)

## 5. Podziękowania

* **Laura Wheeler** -
twórczyni gry *Sokoban Junior 1*, skąd pochodzą mapy /
author of the *Sokoban Junior 1* game, from which maps in this game are from

## 6. Przygotowywanie środowiska do pracy

1. Zainstaluj [Node.js](https://nodejs.org/en/download/)
2. Pobierz wymagane pakiety za pomocą polecenia:  

```cmd
npm install
```

## 7. Praca na kodzie źródłowym

Aby uruchomić program, należy w konsoli wpisać polecenie:

```cmd
npm start
```

## 8. Budowanie Projektu

Do zbudowania projektu należy użyć pakietu ElectronForge,
który także jest pobierany jako wymagany pakiet.  

```cmd
npx @electron-forge/cli import
npm run make
```

Zbudowanie Projektu **NIE** jest wymagane do uruchomienia go!  

## 9. Rozgrywka

### 1. Poruszanie się w grze

![Pierwsza mapa trybu o rosnącym poziomie trudności](./screenshots/ascending.png)

* `Magazynier` (`Gracz`):  
  ![Player Left](./screenshots/spritesheet/Steve_Left.png)
  ![Player Front](./screenshots/spritesheet/Steve_Front.png)
  ![Player Back](./screenshots/spritesheet/Steve_Back.png)
  ![Player Right](./screenshots/spritesheet/Steve_Right.png)  

  `Magazynier` może się poruszać **WYŁĄCZNIE** po polu `Podłoga`
  ![Podłoga](./screenshots/map_tiles/Floor..png).  
  Nie potrafi przechodzić przez pole `Ściany`
  ![Ściana](./screenshots/map_tiles/Wall.col.png)
  ani chodzić po polu `Trawy`
  ![Trawa](./screenshots/map_tiles/Grass..png).  
  Może przesuwać skrzynie, jeśli za `Skrzynią`
  ![Skrzynia](./screenshots/map_tiles/Crate.col.png)
  jest pole `Podłoga` lub pole `Płytka`
  ![Płytka](./screenshots/map_tiles/Plate..png),
  o ile bezpośrednio za tą `Skrzynią` nie ma innej `Skrzyni`.  

* Przyciski:
  * `Save` zapisuje rozgrywkę (dostępny wyłącznie w II Module).  
  * `Surrender` poddaje rozgrywkę i zapisuje wynik do Hali Sław
  (dostępny wyłącznie w II Module).  
  * `Back` cofa do poprzedniej strony.  
  * `Undo Last Move` cofa ostatni ruch.  
  * `Restart` ustawia gracza i skrzynie na pozycjach pierwotnych.  

* Obsługa klawiatury:
  * `W` lub `Strzałka do góry` porusza gracza do góry.  
  * `A` lub `Strzałka w lewo` porusza gracza w lewo.  
  * `S` lub `Strzałka w dół` porusza gracza w dół.  
  * `D` lub `Strzałka w prawo` porusza gracza w prawo.  
  * `R` ustawia gracza i skrzynie na pozycjach pierwotnych.  

### 2. Moduł III - Tworzenie map

![Kreator Map](./screenshots/levelmaker-1.png)

* Przyciski:  
  * `Back` cofa do poprzedniej strony.  
  * `Load` pozwala na wybranie uprzednio utworzonej  mapy i jej edycję.  
  ![Wczytana utworzona mapa](./screenshots/levelmaker-2.png)  

  * `Save` zapisuje utworzoną mapę.  
  Jeśli w polu wyboru `Load` jest wybrana nowa mapa (`NEW`),
  to zostanie utworzona nowa mapa;
  w innym wypadku mapa o wybranej nazwie zostanie nadpisana.  
  * `Reset` odświeża stronę, usuwając wszystkie narysowane pola.  
  * Przycisk oznaczony symbolem `kosza na śmieci` usuwa wybraną mapę.  

* Elementy mapy:
  * `Skrzynia`:  
  ![Skrzynia](./screenshots/map_tiles/Crate.col.png)  
  Interaktywny obiekt, który może być przesuwany przez `Magazyniera`
  ![Player Front](./screenshots/spritesheet/Steve_Front.png).  

  * `Podłoga`:  
  ![Podłoga](./screenshots/map_tiles/Floor..png)  
  Statyczny element mapy, po którym może chodzić `Magazynier`
  ![Player Front](./screenshots/spritesheet/Steve_Front.png)
  oraz po którym mogą być przesuwane `Skrzynie`
  ![Skrzynia](./screenshots/map_tiles/Crate.col.png).  

  * `Trawa`:  
  ![Trawa](./screenshots/map_tiles/Grass..png)  
  Tło mapy.

  * `Płytka`:  
  ![Płytka](./screenshots/map_tiles/Plate..png)  
  Interaktywny obiekt mapy, na który `Magazynier`
  ![Player Front](./screenshots/spritesheet/Steve_Front.png)
  ma przesunąć `Skrzynię`
  ![Skrzynia](./screenshots/map_tiles/Crate.col.png).  

  * `Ściana`:  
  ![Ściana](./screenshots/map_tiles/Wall.col.png)  
  Statyczny element mapy blokujący ruch `Magazyniera`
  ![Player Front](./screenshots/spritesheet/Steve_Front.png)
  oraz przesuwanie `Skrzyń`
  ![Skrzynia](./screenshots/map_tiles/Crate.col.png).  

  * `Płytka ze Skrzynią`:  
  ![Płytka ze Skrzynią](./screenshots/map_tiles/ZCratePlate.col.png)  
  Jest to obiekt łączący `Skrzynię`
  ![Skrzynia](./screenshots/map_tiles/Crate.col.png)
  z `Płytką`
  ![Płytka](./screenshots/map_tiles/Plate..png).
  Gra traktuje to jako `Skrzynię` na `Płytce`, co oznacza,
  że `Skrzynię` z takiej `Płytki` można przesunąć.  

### 3. Menu Główne

![Menu Główne](./screenshots/index.png)

* Przycisk oznaczony `pojedynczą poziomą kreską`
służy do minimalizowania programu.  

* Przycisk oznaczony symbolem `krzyżyka` służy do zamykania programu.  

* Przycisk `Play` służy do uruchamiania Modułu I -
map podzielonych na poziomy trudności.  

* Przycisk `Load/Start new game` służy do uruchamiania Modułu II -
map o rosnącym poziomie trudności.  

* Przycisk `Custom game` służy do uruchamiania Modułu III -
mapy stworzonej w Edytorze Map.  

* Przycisk `Create level` służy do uruchamiania Modułu III - edytora map.  

* Przycisk `Hall of Fame` służy do uruchamiania Modułu II -
sprawdzania listy wyników trybu o rosnącym poziomie trudności.

* Przycisk `Credits` przenosi do strony z informacjami
o Autorach oraz podziękowaniach.  

* Przycisk `Quit` zamyka grę.  

### 4. Moduł I - Poziomy Trudności

![Menu poziomów trudności](./screenshots/difficulty.png)

* Przycisk oznaczony symbolem `domu` służy do powrotu na Stronę Główną.  

* Przycisk `Back` cofa do poprzedniej strony.  

* Przycisk `Easy` uruchamia losową Łatwą mapę.  

![Wylosowana łatwa mapa](./screenshots/easy.png)

* Przycisk `Medium` uruchamia losową Średnio Trudną mapę.  

![Wylosowana średnio trudna mapa](./screenshots/medium.png)

* Przycisk `Hard` uruchamia losową Trudną mapę.  

![Wylosowana trudna mapa](./screenshots/hard.png)

### 5. Moduł II - Rosnący Poziom Trudności

![Miejsca zapisu](./screenshots/saves.png)

* Przyciski opisane kolejno `Save 1`, `Save 2` i `Save 3` to kolejne zapisy gry.
Gracz ma do dyspozycji wyłącznie trzy miejsca na zapisy.  

  Naciśnięcie dowolnego przycisku zapisu uruchamia grę na mapie,
  która jest w danym zapisie. Jeśli nie ma pliku zapisu, to jest on tworzony
  i jest do niego wczytywana pierwsza mapa Trybu.  

![Pierwsza mapa trybu o rosnącym poziomie trudności](./screenshots/ascending.png)

### 6. Moduł III - Gra na własnym poziomie

![Menu autorskich map](./screenshots/custom.png)

Przyciski w kolorze fioletowym pozwalająna uruchomienie
gry na wybranej, utworzonej przez siebie, mapie.

![Wybrana autorska mapa](./screenshots/created.png)

### 7. Moduł II - Hala Sław

![Hala Sław](./screenshots/leaderboard.png)

### 8. Podziękowania

![Podziękowania](./screenshots/credits.png)
