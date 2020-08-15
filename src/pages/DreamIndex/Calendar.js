import React, {useState} from 'react'
import moment from "moment";
import { range } from "moment-range";
import "./calendar.css";
import MonthList from './MonthList';
import YearTable from './YearTable';
import {useSelector, useDispatch} from 'react-redux'

const Calendar = () => {

    let weekdayShort = moment.weekdaysShort();

    let [showCalendarTable, setShowCalendarTable] = useState(true)
    let [showMonthTable, setShowMonthTable] = useState(false)
    let [dateObject, setDateObject] = useState(moment())
    let [allMonths, setAllMonths] = useState(moment.months())
    let [showYearNav, setShowYearNav] = useState(false)
    let [selectedDay, setSelectedDay] = useState(moment())

    const daysInMonth = () => dateObject.daysInMonth()

    const year = () => dateObject.format("Y")

    const currentDay = () => dateObject.format("D")

    const firstDayOfMonth = () => {
        let firstDay = moment(dateObject).startOf("month").format("d"); // Day of week 0...1..5...6
        return firstDay;
    };

    const month = () => dateObject.format("MMMM");

    const showMonth = (e, month) => {
        setShowMonthTable(!showMonthTable)
        setShowCalendarTable(!showCalendarTable)
    };

    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        let dateObjectUpdate = Object.assign({}, dateObject);
        dateObjectUpdate = moment(dateObject).set("month", monthNo);
        setDateObject(dateObjectUpdate)
        setShowMonthTable(!showMonthTable)
        setShowCalendarTable(!showCalendarTable)
    };
    
    const showYearEditor = () => {
        setShowYearNav(true)
        setShowCalendarTable(!showCalendarTable)
    };

    const onPrev = () => {
        let curr = "";
        if (showMonthTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        setDateObject(dateObject.subtract(1, curr))
    };

    const onNext = () => {
        let curr = "";
        if (showMonthTable === true) {
            curr = "year";
        } else {
            curr = "month";
        }
        setDateObject(dateObject.add(1, curr))
    };

    const setYear = year => {
        // alert(year)
        let dateObjectUpdate = Object.assign({}, dateObject);
        dateObjectUpdate = moment(dateObject).set("year", year);
        setDateObject(dateObjectUpdate)
        setShowMonthTable(!showMonthTable)
        setShowYearNav(!showYearNav)
        setShowMonthTable(!showMonthTable)
    };

    const onYearChange = e => setYear(e.target.value);
     
    const onDayClick = (e, d) => {
        setSelectedDay(moment(dateObject).set("date", d).format("dddd, MMMM Do YYYY"))
    }

    let weekdayShortName = weekdayShort.map((day,index) => {
        return <th key={index}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td className="calendar-day empty">{""}</td>);
    }

    let daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth(); d++) {
        let currentDaySelected = (d === currentDay() ? "today" : "")
        // let selectedClass = (d == state.selectedDay ? " selected-day " : "")
        daysInMonthArray.push(
            <td key={d} className={`calendar-day ${currentDaySelected}`}>
            <span
                onClick={e => {
                    onDayClick(e, d);
                }}
            >
                {d}
            </span>
            </td>
        );
    }
    let totalSlots = [...blanks, ...daysInMonthArray];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            // let insertRow = cells.slice();
            rows.push(cells);
        }
    });

    let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
    });

    console.log(selectedDay)
    return (
        <div className="tail-datetime-calendar">
            <div className="calendar-navi">
            <span
                onClick={e => {
                onPrev();
                }}
                className="calendar-button button-prev"
            />
            {!showMonthTable && !showYearEditor && (
                <span
                onClick={e => {
                    showMonth();
                }}
                class="calendar-label"
                >
                {month()},
                </span>
            )}
            <span
                className="calendar-label"
                onClick={e => {
                    showYearEditor();
                }}
            >
                {year()}
            </span>

            <span
                onClick={e => {
                onNext();
                }}
                className="calendar-button button-next"
            />
            </div>
            <div className="calendar-date">
            {showYearNav && <YearTable setYear={setYear} year={year()} />}
            {showMonthTable && (
                <MonthList setMonth={setMonth} data={moment.months()} />
            )}
            </div>

            {showCalendarTable && (
            <div className="calendar-date">
                <table className="calendar-day">
                <thead>
                    <tr>{weekdayShortName}</tr>
                </thead>
                <tbody>{daysinmonth}</tbody>
                </table>
            </div>
            )}
        </div>
    );

}

export default Calendar

