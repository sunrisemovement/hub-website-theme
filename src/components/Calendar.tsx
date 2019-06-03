import * as React from 'react'
import Styles from './Calendar.module.css'
import Icon from './Icon'
import Surface from './Surface'

class Repeat<T> {
  private _value: T
  private _count: number
  constructor(count: number, value: T) {
    this._count = count
    this._value = value
  }
  *[Symbol.iterator](): Iterator<T> {
    for (let i = 0; i < this._count; i++) {
      yield this._value
    }
  }
}

export type DayOfYear = Readonly<{
  year: number,
  month: number,
  day: number
}>

const doyEq = (l: DayOfYear, r: DayOfYear) => {
  return l.day === r.day
    && l.month === r.month
    && l.year === r.year
}

const doyFromDate = (date: Date): DayOfYear => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate()
})

class CalendarRange {
  private _year: number
  private _month: number
  private _firstSunday: Date
  private _lastSaturday: Date
  constructor(year: number, month: number) {
    this._year = year
    this._month = month
    const adjustedMonth = month - 1
    const firstOfMonth = new Date(year, adjustedMonth, 1)
    const lastOfMonth = new Date(year, adjustedMonth + 1, 1)
    lastOfMonth.setDate(0)
    const firstSunday = new Date(firstOfMonth)
    firstSunday.setDate(firstSunday.getDate() - firstSunday.getDay())
    this._firstSunday = firstSunday
    const lastSaturday = new Date(lastOfMonth)
    lastSaturday.setDate(lastSaturday.getDate() + (6 - lastSaturday.getDay()))
    this._lastSaturday = lastSaturday
  }

  *[Symbol.iterator](): Iterator<DayOfYear> {
    const final = new Date(this._lastSaturday)
    final.setDate(final.getDate() + 1)

    const current = new Date(this._firstSunday)
    while (!this.equalDays(current, final)) {
      yield {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      }
      current.setDate(current.getDate() + 1)
    }
  }

  private equalDays(l: Date, r: Date) {
    return l.getFullYear() === r.getFullYear()
      && l.getMonth() === r.getMonth()
      && l.getDate() === r.getDate()
  } 
}

const classMap = (
  classes: { [key: string]: boolean }
) => (Object.keys(classes).reduce((memo, next) => {
  return classes[next] ? memo + ' ' + next : memo
}, ''))

type ListEntryProps = {
  name: string,
  time: string,
  location: string,
}
const ListEntry = (props: ListEntryProps) => (
  <div className={Styles.listEntry}>
    <div className={Styles.listEntryName}>
      Hub Meeting
    </div>
    <div className={Styles.listEntryTime}>
      6:00pm - 8:00pm
    </div>
    <div className={Styles.listEntryLocation}>
      123 Main St., Anytown, PA
    </div>
  </div>
)

type Props = {
  current: DayOfYear
}

const Calendar = (props: Props) => (
  <div className={Styles.sizer}>
    <Surface elevation="4dp" radius={4} height="100%">
      <div className={Styles.container}>
        <div className={Styles.calendar}>
          <div className={Styles.calendarMonth}>
            <div className={Styles.calendarMonthPrevious}>
              <Icon icon="arrow_back_ios" />
            </div>
            <div className={Styles.calendarMonthName}>
              June 2019
            </div>
            <div className={Styles.calendarMonthNext}>
              <Icon icon="arrow_forward_ios"></Icon>
            </div>
          </div>
          <div className={Styles.calendarGrid}>
            {Array.from(new CalendarRange(2019, 6)).map(a => (
              <div
                className={classMap({
                  [Styles.calendarGridEntry]: true,
                  [Styles.calendarGridEntryCurrent]: doyEq(a, props.current),
                })}
                key={`${a.year}-${a.month}-${a.day}`}>
                {a.day}
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.list}>
          {Array.from(new Repeat(10, {
            name: 'Hub Meeting',
            location: '123 Main St., Anytown, PA',
            time: '6:00PM - 8:00PM'
          })).map((a, i) => <ListEntry key={i} {...a} />)}
        </div>
      </div>
    </Surface>
  </div>
)

Calendar.defaultProps = {
  current: doyFromDate(new Date())
}

export default Calendar