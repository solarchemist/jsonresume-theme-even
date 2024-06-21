import html from './html.js'

/**
 * @param {string} dateString
 * @returns {string}
 */
const formatDateDay = dateString =>
  new Date(dateString).toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

/**
 * @param {string} date
 * @returns {string}
 */
export default function DateWithDayHTML(date) {
  return html`<time datetime="${date}">${formatDateDay(date)}</time>`
}
