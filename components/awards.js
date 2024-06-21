import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import DateHTML from '../utils/date.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['awards']} awards
 * @returns {string | false}
 */
export default function Awards(awards = []) {
  return (
    awards.length > 0 &&
    html`
      <section id="awards">
        <h3>Awards</h3>
        <div class="stack">
          ${awards.map(
            ({ awarder, date, summary, title }) => html`
              <article>
                <header>
                  <h4>${title}</h4>
                  <div class="meta">
                    ${awarder && html`<div>Awarded by <strong>${awarder}</strong></div>`} ${date && DateHTML(date)}
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
