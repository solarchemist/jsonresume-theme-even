import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Date from './date.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['publications']} publications
 * @returns {string | false}
 */
// I would prefer to use markdown() for the author field, but editor
// says: "arg of type {} not assignable to param of type string"
// I don't understand why the summary field (below) which is also string
// does not produce the same warning by the editor.
// In any case, rendering works fine, we can just disregard the linters warning.
export default function Publications(publications = []) {
  return (
    publications.length > 0 &&
    html`
      <section id="publications">
        <h3>Publications</h3>
        <div class="stack">
          ${publications.map(
            ({ name, author, publisher, releaseDate, summary, url }) => html`
              <article>
                <header>
                  <h5><strong>${Link(url, name)}</strong></h5>
                  <div class="meta">
                  <div>${author && markdown(author)}</div>
                  ${releaseDate && Date(releaseDate)}
                  ${publisher && html`, in ${publisher}`}
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
