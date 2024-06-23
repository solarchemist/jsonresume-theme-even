import html from '../utils/html.js'
import markdown from '../utils/markdown.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['skills']} skills
 * @returns {string | false}
 */
export default function Skills(skills = []) {
  return (
    skills.length > 0 &&
    html`
      <section id="skills">
        <h3>Skills</h3>
        <div class="grid-list">
          ${skills.map(
            ({ keywords = [], name }) => html`
              <div>
                ${name && html`<h5><strong>${name}</strong></h5>`}
                ${keywords.length > 0 &&
                html`
                  <ul class="tag-list">
                    ${keywords.map(keyword => html`<li>${markdown(keyword)}</li>`)}
                  </ul>
                `}
              </div>
            `,
          )}
        </div>
      </section>
    `
  )
}
