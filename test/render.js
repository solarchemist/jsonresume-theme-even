import { test } from 'tap'
import { HtmlValidate } from 'html-validate'

import { render } from '../index.js'
import resume from 'resume-schema/sample.resume.json'

// Overwrite empty sample resume values
resume.basics.image = 'image.jpg'

test('renders a resume', t => {
  t.matchSnapshot(render(resume))
  t.end()
})

test('renders valid HTML', t => {
  const htmlvalidate = new HtmlValidate({
    extends: ['html-validate:recommended'],
    rules: { 'svg-focusable': 'off' },
  })

  const {
    results: [{ messages } = {}],
  } = htmlvalidate.validateString(render(resume))

  t.equal(messages, undefined)
  t.end()
})
