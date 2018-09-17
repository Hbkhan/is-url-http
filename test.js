'use strict'

const test = require('ava')

const isHttpUrl = require('./')

test('true', t => {
  t.is(isHttpUrl('http://kikobeats.com'), true)
  t.is(isHttpUrl('https://kikobeats.com'), true)
  t.is(isHttpUrl('https://www.kikobeats.com'), true)
  t.is(isHttpUrl('http://www.kikobeats.com'), true)
})

test('false', t => {
  t.is(isHttpUrl(), false)
  t.is(isHttpUrl('callto://'), false)
  t.is(isHttpUrl('mailto://'), false)
})