import html from '../utils/html.js'
import DateHTML from '../utils/date.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['certificates']} certificates
 * @returns {string | false}
 */
export default function Certificates(certificates = []) {
  return (
    certificates.length > 0 &&
    html`
      <section id="certificates">
        <h3>Certificates</h3>
        <div class="stack">
          ${certificates.map(
            ({ date, issuer, name, url }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">
                    ${issuer && html`<div>Issued by <strong>${issuer}</strong></div>`} ${date && DateHTML(date)}
                  </div>
                </header>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
