'use strict'

const tap = require('tap')
const isFile = require('is-file')
const getTemplatePath = require('../index')

tap.ok(getTemplatePath('avslag'), 'It returns path if template exists')

tap.throws(
  function () {
    getTemplatePath()
  },
  {message: 'Missing required input: template id'},
  'Throws if template id not supplied'
)

tap.throws(
  function () {
    getTemplatePath('finnes-ikke')
  },
  {message: 'Template not found'},
  'Throws if template does not exist'
)

tap.equal(isFile(getTemplatePath('avslag')), true, 'Template for avslag is a file')

tap.equal(isFile(getTemplatePath('innvilget')), true, 'Template for innvilget is a file')

tap.equal(isFile(getTemplatePath('midlertidig-annen')), true, 'Template for midlertidig-annen is a file')

tap.equal(isFile(getTemplatePath('midlertidig-delt')), true, 'Template for midlertidig-delt is a file')

tap.equal(isFile(getTemplatePath('midlertidig-hybel')), true, 'Template for midlertidig-hybel is a file')

tap.equal(isFile(getTemplatePath('midlertidig-manuell')), true, 'Template for midlertidig-manuell is a file')

tap.equal(isFile(getTemplatePath('soknad')), true, 'Template for soknad is a file')
