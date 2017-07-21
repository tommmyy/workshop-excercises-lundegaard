# Redux

## Úkol 1
Opakování React.

1. Změňte `people` na `characters` v `initialState` v `index.js` a následně opravte aplikaci.
2. Vytvořte vnitřní stav komponenty `StarWars` a inicializujte ho z předaných `props`.
3. Vytvořte komponentu `CharacterForm` a použitejte ji v `StarWars`.
Bude obsahovat kontrolovaný input pro zadání jména postavy a tlačíko 'Přidat postavu'.
Po odeslání formuláře se zavolá property `onSubmit`, které jako argument předáte event a jméno zadané postavy.
Následně smažete hodnotu inputu.
4. Doplňte komponentu `StarWars` tak, aby skrze property `onSubmit` komponenty `CharacterForm` přidávala zadaná nová jména postav do seznamu (jejího vnitřního stavu).


## Úkol 2
Doplnění aplikace StarWars postavené na Flux.

1. Začněte ukládat stav formuláře do vlastního store
	a. vytvořte soubor pro formulářové akce FormActions.
	V něm vytvořte action creatory pro reset formuláře a změnu fieldu formuláře.
	b. vytvořte FormStore, který tyto akce obsluhuje
	c. Napojte `CharactersForm` na  `FormStore`. Při submitu nebude voláná property `onSubmit` (není třeba předávat z `StarWars`),
	ale přímo akce `addName` nad `CharactersStore`.
2. Napojte `CharactersList` na `CharactersStore` a čtěte z něj postavy.
3. Odpojte `StarWars` od `CharactersStore`.


## Úkol 3
Kompozice reducerů.

1. Doplňte do stavu atribut 'second' a příslušný selektor `getSecond`. Opravte a doplňte testy.
2. Přesuňte reducer pro `nested` (`./reducers/nested.js`) do vlastního souboru. V rootReduceru importujte.
3. Refaktorujte tak, aby selektor `getNestedFirst` z rootReducer využíval nový selektor `getFirst` z `nested.js`.

## Úkol 4
Databáze komiksů.

Vycházíme z příkladu čítače napojeného na react-redux.
Aplikace bude zobrazovat informace o komiksech. Bude umět filtrovat podle názvu komiksu a jeho popisu.
Struktura projektu je dána.
Data jsou k dispozici v 'data.json'.
Ve stavu bude uložen stav filtru a veškeré komiksy z data.json.

Tvar stavu:

```
{
	volumes: [...],
	filter: { name: '', description: ''}
}
```


## Úkol 5 (společně)
Pokračování z předchozího úkolu.
Napojení na API skrze redux-thunk.

API URL:

```
const URL = 'http://localhost:3000/api';

// generated at: https://comicvine.gamespot.com/api
const API_KEY = '7a7664aed393040e7a4e32caabf89960916c6ea2';

const VOLUMES_FIELDS = [
    'id',
    'name',
    'description',
    'count_of_issues',
    'image',
].join(',');

const url = `${URL}/volumes/?api_key=${API_KEY}&format=json&field_list=${VOLUMES_FIELDS}&format=json&limit=10&sort=name:asc`
```

## Úkol 6
1. Doplnění vyhledávání
2. Řešíme race conditions - ve chvíli kdy probíhá request:
	a. disablujeme tlačítko hledat,
	b. zobrazíme hlášku 'Načítám...
3. Refaktorujte předchozí příklad skrze redux-api-middleware (https://github.com/agraboso/redux-api-middleware)
4. Řešíme chyby - pokud se stane chyba během načítání, zobrazíme hlášku 'Chyba :('

## Úkol 7 (společně)
1. redux-form ve `Filter`
2. Přidání validace k poli pro vyhledávání
3. Vytvořit vlastní MyInput komponentu pro zobrazení textového pole a validační hlášky.

## Úkol 8
### 1. Refaktorujte stav následujícím způsobem pomocí normalizeru.
Tvar stavu:

```
{
	entities: {
		volumes: { 1: { id: 1, ... }, 2: { id: 2, ... } }
	},
	ui: {
		filter: { name: '', description: ''},
		error: false,
		fetching: false,
	}
}
```

### 2. Stránkování - doplnění tlačítka "Zobrazit více".

Tvar stavu:

```
{
	entities: {
		volumes: { 1: { id: 1, ... }, 2: { id: 2, ... } }
	},
	ui: {
		filter: { name: '', description: ''},
		error: false,
		fetching: false,
		pagination: {
			page: 1,
			byId: [1, 2]
		}
	}
}
```
