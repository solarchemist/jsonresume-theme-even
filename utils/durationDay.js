import html from './html.js'
import DateWithDayHTML from './dateDay.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string}
 */
export default function DurationWithDay(startDate, endDate) {
  return html`${DateWithDayHTML(startDate)} – ${endDate ? DateWithDayHTML(endDate) : 'Present'}`
}
