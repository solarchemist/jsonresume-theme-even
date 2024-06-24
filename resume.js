import Awards from './components/awards.js'
import Certificates from './components/certificates.js'
import Education from './components/education.js'
import Header from './components/header.js'
import Interests from './components/interests.js'
import Languages from './components/languages.js'
import Meta from './components/meta.js'
import ProjectsScientific from './components/projectsScientific.js'
import Publications from './components/publications.js'
import Teaching from './components/teaching.js'
import Projects from './components/projects.js'
import References from './components/references.js'
import Skills from './components/skills.js'
import Volunteer from './components/volunteer.js'
import Work from './components/work.js'
import Workshops from './components/workshops.js'
import Footer from './components/footer.js'
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
        <link rel="stylesheet" href="assets/academicons/css/academicons.min.css" />
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${Header(resume.basics)}
        ${Publications(resume.publications)}
        ${ProjectsScientific(resume.projectsScientific)}
        ${Projects(resume.projects)}
        ${Skills(resume.skills)}
        ${Workshops(resume.workshops)}
        ${Work(resume.work)}
        ${Teaching(resume.teaching)}
        ${Education(resume.education)}
        ${Volunteer(resume.volunteer)}
        ${Awards(resume.awards)}
        ${Certificates(resume.certificates)}
        ${Languages(resume.languages)}
        ${Interests(resume.interests)}
        ${References(resume.references)}
        ${Footer(resume.footer)}
      </body>
    </html>`
}
