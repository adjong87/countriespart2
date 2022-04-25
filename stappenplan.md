[ ] #1 Op basis van de informatie uit de REST Countries API, 
[ ] haal je data op over één specifiek land per keer;
Kies één land om mee te beginnen. Zorg ervoor dat de opgehaalde data op de volgende manier wordt weergegeven op de pagina:
[IMAGE: flag]
[country-name]
[country-naam] is situated in [subarea-name]. It has a population of [amount] people.
The capital is [city] and you can pay with [currency]'s
Houdt er rekening mee dat de meeste landen maar één valuta hebben, maar sommige landen (zoals Panama) hebben er twee. In dat geval moet er: and you can pay with [currency] and [currency]'s komen te staan;
Er staat een zoekbalk op de pagina waarmee de gebruiker naar een land kan zoeken. De zoekopdracht wordt getriggered zodra de gebruiker op de 'zoek'-knop klikt of op ENTER drukt. De inhoud van het invoerveld wordt na iedere zoekopdracht geleegd;
Wanneer de gebruiker zoekt naar een land dat niet bestaat, wordt er een foutmelding getoond. Wanneer de gebruiker daarna een nieuwe zoekopdracht maakt die wel correct is, moet de foutmelding weer verdwenen zijn.

[x] een invoerveld maken om aan te geven welk land gezocht moet worden
[x] een submit button maken om de invoer door te geven aan het fetch verzoek
[ ] knop koppelen aan de javascript met document.getElementById 
[ ] eventListener op de knop 

[ ] functie maken die de output print in onderstaand format:
    [IMAGE: flag]
    [country-name]
    [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
    The capital is [city] and you can pay with [currency]'s
[ ] functie schrijven die meerdere valutas op een nette manier weergeeft
[ ] functie schrijven die meerdere talen op een nette manier weergeeft