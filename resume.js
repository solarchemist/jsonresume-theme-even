import Awards from './components/awards.js'
import Certificates from './components/certificates.js'
import Education from './components/education.js'
import Header from './components/header.js'
import Interests from './components/interests.js'
import Languages from './components/languages.js'
import Meta from './components/meta.js'
import Projects from './components/projects.js'
import Publications from './components/publications.js'
import References from './components/references.js'
import Skills from './components/skills.js'
import Volunteer from './components/volunteer.js'
import Work from './components/work.js'
import colors from './utils/colors.js'
import html from './utils/html.js'

/**
 * @param {import('./schema.d.ts').ResumeSchema} resume
 * @param {string} css
 * @returns
 */
export default function Resume(resume, css) {
  return html`<!doctype html>
    <html lang="en" style="${colors(resume.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${Header(resume.basics)}
        ${Work(resume.work)}
        ${Publications(resume.publications)}
        ${Education(resume.education)}
        ${Projects(resume.projects)}
        ${Awards(resume.awards)}
        ${Certificates(resume.certificates)}
        ${Volunteer(resume.volunteer)}
        ${Skills(resume.skills)}
        ${Languages(resume.languages)}
        ${Interests(resume.interests)}
        ${References(resume.references)}
      </body>
    </html>`
}
