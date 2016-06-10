'use strict'

const tap = require('tap')
const templates = require('../templates/templates.json')

tap.equal(Object.keys(templates).length, 7, 'There are 7 different templates')

tap.ok(templates.avslag, 'There is a template for avslag')

tap.ok(templates.innvilget, 'There is a template for innvilget')

tap.ok(templates['doble-kontakter'], 'There is a template for doble-kontakter')

tap.ok(templates['midlertidig-annen'], 'There is a template for midlertidig-annen')

tap.ok(templates['midlertidig-delt'], 'There is a template for midlertidig-delt')

tap.ok(templates['midlertidig-hybel'], 'There is a template for midlertidig-hybel')

tap.ok(templates['midlertidig-manuell'], 'There is a template for midlertidig-manuell')
