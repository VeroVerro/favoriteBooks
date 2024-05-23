# Moje obľúbené knihy

## Zadanie

Vytvorte webovú aplikáciu za použitia Reactu, ktorá bude slúžiť na ukladanie informácií o
obľúbených knižkách. Užívateľské rozhranie bude vertikálne rozdelené na dve polovice, v
ľavej časti bude formulár do ktorého pôjde vyplniť informácie o knižke, a to jej názov
(povinný údaj), autora a krátky, max 300 znakový opis. Pod týmito inputmi sa bude
nachádzať tlačidlo na uloženie po ktorého kliknutí sa informácie o knižke uložia do pamäte
aplikácie (stačí aplikačná pamäť, nie je nutné riešiť perzistenciu dát). Na pravej strane sa
bude nachádzať zoznam uložených kníh. Zoznam musí byť schopný zobraziť ľubovoľné
množstvo kníh a byť schopný filtrovať knihy podľa názvu. Po kliknutí na uloženú knihu sa
zobrazí modálne okno s informáciami o knihe.

Úroveň CSS je na úvahe riešiteľa (ako veľmi sa chce ukázať) ale je nutné zapracovať
spomínané vertikálne delenie na dve polovice, a korektné zobrazenie aj pre menšie
rozlíšenia, konkrétne do 320px na šírku. Úroveň kedy sa vertikálne rozdelenie zmení na
horizontálne je taktiež ľubovoľné.Použitie knižníc tretích strán nie je obmedzené.

## How to run

```
npm install
npm run dev
```