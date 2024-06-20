import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/**
 * @param {string[]} roles
 * @returns {string}
 */
const formatRoles = roles => (Intl.ListFormat ? new Intl.ListFormat('en').format(roles) : roles.join(', '))

/**
 * @param {import('../schema.d.ts').ResumeSchema['projectsScientific']} projectsScientific
 * @returns {string | false}
 */
export default function ProjectsScientific(projectsScientific = []) {
  return (
    projectsScientific.length > 0 &&
    html`
      <section id="projectsScientific">
        <h3>Scientific contributions</h3>
        <div class="stack">
          ${projectsScientific.map(
            ({
              description,
              entity,
              highlights = [],
              keywords = [],
              name,
              startDate,
              endDate,
              roles = [],
              type,
              doi,
              url,
            }) => html`
              <article>
                <header>
                  <h5><strong>${Link(url, name)}</strong>${doi && html`<a href=https://doi.org/${doi}>&nbsp;<i class="ai ai-doi ai-1.2x"></i></a>`}</h5>
                  <div class="meta">
                    <div>
                      ${roles.length > 0 && html`<strong>${formatRoles(roles)}</strong>`}
                      ${entity && html`at <strong>${entity}</strong>`}
                    </div>
                    ${startDate && html`<div>${Duration(startDate, endDate)}</div>`} ${type && html`<div>${type}</div>`}
                  </div>
                </header>
                ${description && markdown(description)}
                ${highlights.length > 0 &&
                html`
                  <ul>
                    ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
                  </ul>
                `}
                ${keywords.length > 0 &&
                html`
                  <ul class="tag-list">
                    ${keywords.map(keyword => html`<li>${keyword}</li>`)}
                  </ul>
                `}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
