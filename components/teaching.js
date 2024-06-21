import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from '../utils/duration.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['teaching']} teaching
 * @returns {string | false}
 */
export default function Teaching(teaching = []) {
  return (
    teaching.length > 0 &&
    html`
      <section id="teaching">
        <h3>Teaching</h3>
        <div class="stack">
          ${teaching.map(
            ({ name, institution, startDate, endDate, url, summary }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">
                    ${institution && html`<strong>${institution}</strong>`}
                    ${startDate && html`<div>${Duration(startDate, endDate)}</div>`}
                  </div>
                </header>
                ${summary && markdown(summary)}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
