# Arbetsmetodik för utvecklare - gruppuppgift

## Beskrivning av projekt:

Uppdraget var att skapa en uthyrningsportal där privatpersoner i Göteborg kan hyra/låna ut saker till andra, för att främja delningsekonomin i staden.

## Utvecklat av:

- _Sabina Andersson_ (https://github.com/sabinaander)
- _Ella Larsson_ (https://github.com/EllaMiri)
- _Philip Risberg_ (https://github.com/Prisberg)
- _Anna Özmehak_ (https://github.com/A-Ozmehak)
- _Felix Bakkum_ (https://github.com/FrontFelix)
- _Github repo_ (https://github.com/A-Ozmehak/Go-Rent)

## Starting the project

```shell
$ npm i
```

**To install all dependencies.**

**and then:**

```shell
$ npm run dev
```

**or**

```shell
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Tech stack

- NextJs
- Typescript
- Sass
- ChakraUI
- MUI-icons
- Firebase (Firestore for database, Authentication for users and Storage for files)
- Vercel for deploy

## Deploy on Vercel

This webapplication is deployed on Vercel on [https://go-rent.vercel.app/](https://go-rent.vercel.app/)

## Design on Figmna

We started all design via Figma on [Figma.com/Go-Rent](https://www.figma.com/file/IwNmUTI67e0JC0bQimxUBk/GO%3ARENT?node-id=0%3A1&t=K09j9duLHuhKHDJO-0)

## Kravspecifikation

- [x] Det ska gå att skapa ett konto, logga in och logga ut

- [x] Den som inte är inloggad ska kunna se befintliga annonser men inte lägga upp annonser eller skicka förfrågan om att hyra

- [x] Det ska gå att klicka på en användare för att se alla användarens annonser

- [x] En inloggad användare ska kunna gå in på en annons och skicka förfrågan om att hyra

- [x] En inloggad användare ska kunna lägga upp egna annonser och svara på förfrågningar (godkänna eller neka)

- [x] Annonser som läggs upp ska ha en bild (med länk eller genom filuppladdning), titel, beskrivning och pris (kan även vara gratis)

- [x] Det ska finnas ett kategorisystem för annonserna

- [x] Sidan ska vara fullt responsiv, men med tyngdpunkten på mobil användning

- [x] Det ska finnas validering på samtliga inputfält

( AVGRÄNSNING: Validering har valts bort på ställen där det inte är ett krav. Exempelvis på "edit profile" där det är valfria fält.)

**Övriga önskemål (nice-to-haves):**

- [x] En inloggad användare ska kunna lägga upp en profilbild (med länk eller genom filuppladdning) och en kort text om sig själv, som sedan visas när användarens alla annonser visas

- [x] Användaren ska kunna ta bort och ändra sina egna annonser

- [x] Annonserna ska även tala om var varje föremål finns (stadsdel)

- [ ] Det ska gå att filtrera annonser för att enbart se det som lånas ut gratis

- [ ] Det ska gå att favoritmarkera annonser, och favoritmarkerade annonser ska visas direkt på startsidan om man är inloggad

- [ ] Det ska gå att se hur många gånger ett föremål har varit uthyrt

**Krav för godkänt:**

- [x] Uppgiften är inlämnad i tid på ItsLearning (zippat repo med kompletta startinstruktioner i README-fil, länk till deployad sida och designskisser)

- [x] Projektet är deployat på t.ex. Netlify eller Vercel

- [x] Projektet fungerar tillfredsställande och uppfyller kravspecifikationen

- [x] Genomförd halvtidsavstämning med demo och godkänd opponering

- [x] Genomförd slutpresentation

- [x] GitHub har använts på ett strukturerat sätt med tydligt formulerade och avgränsade issues, branches, PR:s, branch protection och code reviews

- [x] Ett projektbräde i GitHub Projects har använts aktivt och uppdaterats kontinuerligt under projektets gång

- [x] Ett workflow i GitHub Actions har implementerats i projektet

- [x] Cypress har implementerats i projektet och minst två tester har skapats för att testa funktionaliteten efter feedback från opponeringen

**Krav för väl godkänt:**

- [x] Kraven för godkänt är uppfyllda

- [x] Minst tre punkter från listan med övriga önskemål har implementerats i projektet (specificera vilka i README-filen)

( se ovan i listan på nice to haves. )

- [ ] Ytterligare två Cypress-tester (totalt minst fyra tester) har skapats för att testa funktionalitet som ändrats/tillkommit efter feedback från opponeringen.
      Testerna ska baseras på buggar eller brister i funktionaliteten som kommit fram vid opponeringen.

- [ ] Projektet har ett CI-flöde (eller CI/CD) som omfattar Prettier, lintning med ESLint och testning med Cypress för samtliga PR:s som görs mot main-branchen
