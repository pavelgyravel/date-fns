import toInteger from '../_lib/toInteger/index.js'
import toDate from '../toDate/index.js'

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param date - The date to be changed
 * @param dayOfYear - The day of the year of the new date
 * @returns The new date with the day of the year set
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
export default function setDayOfYear(
  dirtyDate: Date | number,
  dirtyDayOfYear: number
): Date {
  var date = toDate(dirtyDate)
  var dayOfYear = toInteger(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}
