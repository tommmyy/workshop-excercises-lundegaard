# React

## Úkol 1

- Přepište komponentu `Timer` pomocí funkce,
- přidejte validaci vstupního stavu (PropTypes).

## Úkol 2

Vytvořte kompnentu `App`, která používá `Timer` k zobrazení aktuálního času

- Aktualizace bude způsobena změnou vnitřního stavu `App`,
- funkce `setInterval`/ `clearInterval` budou použity ve vhodných metodách životního cyklu,
- bude možné definovat interval pro aktualizaci času pomocí `props` (využít i defaultProps).

## Úkol 3 - Balónek

- Místo `children` použijte novou povinnou property `label`.
- Dále vytvořte property pro text, který se zobrazí po prasknutí balónku.
- Přidejte tlačítko "Reset", který vyfoukne balónek
- Refaktorujte `Baloon`

## Úkol 4

Implementujte projekt z předchozí kapitoly (ES6) pomocí Reactu.

- Projekt bude obsahovat dvě komponenty:
	- `App` - spravuje stav aplikace
	- `UsersList` - vykresluje seznam uživatelů
- Přidejme možnost přidání uživatele skrze formulář:
	- `UserAddForm` - po odeslání formuláře je komponentě `App` předán nový uživatel
	- inputy budou kontrolované.