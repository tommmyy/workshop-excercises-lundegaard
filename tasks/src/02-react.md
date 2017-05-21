1) Přepište komponentu `Timer` pomocí funkce, přidejte validaci vstupního stavu (PropTypes)
2) Vytvořte kompnentu `App`, která používá `Timer` k zobrazení aktuálního času
	- Aktualizace je způsobena změnou vnitřního stavu `App`,
	- `setInterval`/ `clearInterval` pomocí vhodných metod životního cyklu,
	- možnost definovat interval pro aktualizaci času pomocí `props` (využít i defaultProps).

3) Balónek
	- Místo `children` použijte novou povinnou property `label`.
	- Dále vytvořte property pro text, který se zobrazí po prasknutí balónku.
	- Přidejte tlačítko "Reset", který vyfoukne balónek
	- Refaktorujte `Baloon`

4) Rozšiřme projekt z předchozí kapitoly
	- Projekt bude obsahovat dvě kompnenty:
		* `App` - udržuje stav aplikace
		* `UsersList` - vykresluje seznam uživatelů
	- Přidejme možnost přidání uživatele skrze formulář:
		* `UserAddForm` - po odeslání formuláře je komponentě `App` předán nový uživatel
		* inputy budou kontrolované.