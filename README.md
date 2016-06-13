[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-elev-skoleskyss-templates.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-elev-skoleskyss-templates)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-elev-skoleskyss-templates/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-elev-skoleskyss-templates?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/tfk-saksbehandling-elev-skoleskyss-templates/badges/gpa.svg)](https://codeclimate.com/github/telemark/tfk-saksbehandling-elev-skoleskyss-templates)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-elev-skoleskyss-templates
Maler for tfk-saksbehandling-elev-skoleskyss økosystemet.

Oversikt over alle malene og koder for de ulike ligger [her](docs/templates.md)

## Installasjon

Fra npm

```sh
$ npm install --save tfk-saksbehandling-elev-skoleskyss-templates
```

Fra GitHub

```sh
$ git clone git@github.com:telemark/tfk-saksbehandling-elev-skoleskyss-templates.git
```

Deretter går du inn i mappen og kjører setup

```sh
$ npm run setup
```

## Bruk
Send inn id på malen du skal benytte og få fullstendig filbane i retur.

Maler
- avslag
- foreløpig svar, annen årsak
- foreløpig svar, delt bosted
- foreløpig svar, hybel
- foreløpig svar, manuell behandling
- innvilget

```javascript
'use strict'

const getTemplatePath = require('tfk-saksbehandling-elev-skoleskyss-templates')

console.log(getTemplatePath('avslag'))

//=> path/to/template/avslag.docx
```

## Lisens
[MIT](LICENSE)