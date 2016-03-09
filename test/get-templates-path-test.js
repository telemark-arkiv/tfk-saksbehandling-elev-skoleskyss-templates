'use strict'

var tap = require('tap')
var getTemplatePath = require('../index')

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
