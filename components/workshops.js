import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import DurationWithDay from '../utils/durationDay.js'
import Link from './link.js'

/**
 * @param {string[]} roles
 * @returns {string}
 */
const formatRoles = roles => (Intl.ListFormat ? new Intl.ListFormat('en').format(roles) : roles.join(', '))

/**
 * @param {import('../schema.d.ts').ResumeSchema['workshops']} workshops
 * @returns {string | false}
 */
export default function Workshops(workshops = []) {
  return (
    workshops.length > 0 &&
    html`
      <section id="workshops">
        <h3>Workshops & conferences</h3>
        <div class="stack">
          ${workshops.map(
            ({
              summary,
              highlights = [],
              keywords = [],
              name,
              location,
              startDate,
              endDate,
              contributions = [],
              url,
            }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">
                    <div>
                      ${contributions.length > 0 && html`<strong>${formatRoles(contributions)}</strong>`}
                    </div>
                    ${startDate && html`<div>${DurationWithDay(startDate, endDate)}</div>`}
                    ${location && html`<div>${location}</div>`}
                  </div>
                </header>
                ${summary && markdown(summary)}
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
