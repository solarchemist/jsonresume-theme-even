import html from '../utils/html.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['footer']} footer
 * @returns {string}
 */
export default function Footer(footer = {}) {
  const { githash } = footer

  return html`
    <footer class="footer">
      <div>
        I made this CV with a
        <a href="https://github.com/solarchemist/jsonresume-schema">schema</a> and
        a <a href="https://github.com/solarchemist/jsonresume-theme-even">theme</a>
        adapted from<br/>
        <a href="https://github.com/jsonresume/resume-schema">resume-schema</a>
        and <a href="https://github.com/rbardini/jsonresume-theme-even">jsonresume-theme-even</a>.
      </div>
      ${githash && html`<div class="githash">${githash}</div>`}
    </footer>
  `
}
