# NodeHarjoituksia
Web-palvelinten toimintaan liittyviä esimerkkejä toteuteaan Node.js kirjaston avulla.

## Tietokanta ja näkymät
Luodaan näkymä, joka laskee edellisen kuukauden hinnan keskiarvion, normaalihinnan
ala- ja ylärajat keskihajonnan perusteella. Jaetaan vaatimukset tehtäviksi tyyliin:

1. Selvitä kuluva kuukausi ja vuosi
2. Laske, mikä on edellisen kuukauden numero
3. Tee kysely, joka laskee tarvittavat keskiarvot ja keskihajonnat
4. Määrittele rajoittava ehto kuukaudelle ja vuodelle (tämän vuoden edell. kuukausi)
5. Muokkaa kyselyä siten, että se laskee ala - ja ylärajat (keskihinta +/- keskihajonta)
6. Muuta nälymäksi, joka hyödyntää month-lookup-taulua.

Luodaan näkymä, joka näyttää tiedot edelliseltä vuodelta, mutta kuluvalta kuukaudelta.

## Mikroplavelu datan hakemiseen ja tallentamiseen

Node.js palvelin voi tehdä ajastettuja toimintoja. Selvitä, mitä kirjastoja voisi käyttää tähän
tarkoitukseen. Loudaan palvelu, joka lukee päivittäin klo 15.30 hinnat ja tallentaa ne tietokantaan.
Jos ei onnistu, yritetään uudelleen tunnin kuluttua.