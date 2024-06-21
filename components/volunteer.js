import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from '../utils/duration.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['volunteer']} volunteer
 * @returns {string | false}
 */
// I would prefer if display of multiple dates (multiDates) would use the month-Year notation
// (as employed by formatDate() and Duration(), but without writing out a duration if
// start and end date are the same - this would be rather neat, as it would allow multiDates
// to be an array of date ranges without additional logic)
// Also, rather than simply reversing the list of multiDates, a better solution
// would be to actually sort multiDates (into reverse chronological order) to allow
// the user to enter dates without any order
export default function Volunteer(volunteer = []) {
  return (
    volunteer.length > 0 &&
    html`
      <section id="volunteer">
        <h3>Volunteer</h3>
        <div class="stack">
          ${volunteer.map(
            ({ highlights = [], organization, position, startDate, endDate, multiDates = [], summary, url }) => html`
              <article>
                <header>
                  <h4>${Link(url, organization)}</h4>
                  <div class="meta">
                    <strong>${position}</strong>
                    ${startDate && html`<div>${Duration(startDate, endDate)}</div>`}
                    ${multiDates.length > 0 &&
                    html`
                      <ul class="date-list">
                      ${multiDates.reverse().map(multiDates => html`<li>${multiDates}</li>`)}
                      </ul>
                    `}
                  </div>
                </header>
                ${summary && markdown(summary)}
                ${highlights.length > 0 &&
                html`
                  <ul>
                    ${highlights.map(highlight => html`<li>${markdown(highlight)}</li>`)}
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
