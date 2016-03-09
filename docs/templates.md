# Maler

Modulen inneholder 3 maler for saksbehandling og 1 for intern bruk.

Brevmalene er [avslag](../templates/avslag.docx), [midlertidig](../templates/midlertidig.docx) og [tilslag](../templates/tilslag.docx).

Internmalen er [soknad](../templates/soknad.docx)

## Avslag
Denne malen benyttes dersom det gis avslag på søknaden.

Koder som benyttes:

- ```{navn}``` Søkerens navn
- ```{adresse}``` Søkerens adresse
- ```{postnr}``` Søkerens postnummer
- ```{poststed}``` Søkerens poststed
- ```{dato}``` Dato for søknad på formatet dd.mm.åååå
- ```{skolar}``` Hvilket skoleår vedtaket gjelder på formatet åååå/åååå
- ```{avdeling}``` Avsenderens avdeling
- ```{avstand}``` Målt avstand

## Midlertidig
Denne malen benyttes til midlertidige svar dersom søknaden må behandles manuelt.

Koder som benyttes:

- ```{navn}``` Søkerens navn
- ```{adresse}``` Søkerens adresse
- ```{postnr}``` Søkerens postnummer
- ```{poststed}``` Søkerens poststed
- ```{dato}``` Dato for søknad på formatet dd.mm.åååå
- ```{skolar}``` Hvilket skoleår vedtaket gjelder på formatet åååå/åååå
- ```{avdeling}``` Avsenderens avdeling

## Tilslag
Denne malen benyttes dersom søknaden innvilges.

Koder som benyttes:

- ```{navn}``` Søkerens navn
- ```{adresse}``` Søkerens adresse
- ```{postnr}``` Søkerens postnummer
- ```{poststed}``` Søkerens poststed
- ```{dato}``` Dato for søknad på formatet dd.mm.åååå
- ```{skolar}``` Hvilket skoleår vedtaket gjelder på formatet åååå/åååå
- ```{avdeling}``` Avsenderens avdeling
- ```{avstand}``` Målt avstand

## Søknad
Denne malen benyttes for å legge ved en json-representasjon av hele søknaden.

Koder som benyttes:

- ```{soknad}``` Felt for json