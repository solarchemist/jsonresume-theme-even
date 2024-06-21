import html from './html.js'
import DateHTML from './date.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string}
 */
export default function Duration(startDate, endDate) {
  return html`${DateHTML(startDate)} – ${endDate ? DateHTML(endDate) : 'Present'}`
}
