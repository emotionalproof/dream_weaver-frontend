import React, {useState} from 'react'
import moment from "moment";
import { range } from "moment-range";
import "./calendar.css";
import MonthList from './MonthList';
import YearTable from './YearTable';


const Calendar = props => {

    let weekdayShort = moment.weekdaysShort();
    let [showCalendarTable, setShowCalendarTable] = useState(true)
    let [showMonthTable, setShowMonthTable] = useState(false)
    let [dateObject, setDateObject] = useState(moment())
    let [allMonths, setAllMonths] = useState(moment.months())
    let [showYearNav, setShowYearNav] = useState(false)
    let [selectedDay, setSelectedDay] = useState(moment(dateObject).format("dddd, MMMM Do YYYY"))
    // let [currentDay, setCurrentDay] = 

    const daysInMonth = () => dateObject.daysInMonth()
    const year = () => dateObject.format("Y")
    const currentDay = () => dateObject.format("D")
    const month = () => dateObject.format("MMMM");

    const firstDayOfMonth = () => moment(dateObject).startOf("month").format("d"); // Day of week 0...1..5...6

    const showMonth = () => {
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
        setShowYearNav(!showYearNav)
        setShowCalendarTable(!showCalendarTable)
    };

    const onPrev = () => {
        let curr = showMonthTable === true ? "year" : "month"
        setDateObject(dateObject.subtract(1, curr))
    };

    const onNext = () => {
        let curr = showMonthTable === true ? "year" : "month"
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
        let day = moment(dateObject).set("date", d).format("dddd, MMMM Do YYYY")
        setSelectedDay(day)
        props.changeDate(day)
        // dispatch(changeDate(selectedDay))
    }

    let weekdayShortName = weekdayShort.map((day,index) => {
        return <th key={index}>{day}</th>;
    });

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<td key={i} className="calendar-day empty">{""}</td>);
    }

    let daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth(); d++) {
        let currentDaySelected = (d === currentDay() ? "today" : "")
        // let selectedClass = (d == state.selectedDay ? " selected-day " : "")
        let key = "d" + d
        daysInMonthArray.push(
            <td key={key} className={`calendar-day ${currentDaySelected}`}>
                <span onClick={e => onDayClick(e, d)}>{d}</span>
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

    let mappedDaysInMonth = rows.map((d, i) => {
        let key = d + i
        return <tr key={key}>{d}</tr>;
    });

    const resetDate = () => {
        props.changeDate("")
        setSelectedDay("No Date Selected")
    }
 
    return (
        <div className="tail-datetime-calendar">
            <div><h4 id="calendar-instructions">See what dreams you had on a particular day.</h4></div>
            <div><h5>{selectedDay}</h5></div>
            <div className="calendar-navi">
                <span onClick={onPrev} className="calendar-button button-prev"/>
                    {(!showMonthTable && !showYearNav) && (
                    <span onClick={showMonth} className="calendar-label">
                        {month()}
                    </span>
                )}
                <span className="calendar-label" onClick={showYearEditor}>{year()}</span>
                <span onClick={onNext} className="calendar-button button-next"/>
            </div>
            <div className="calendar-date">
                {showYearNav && <YearTable setYear={setYear} year={year()} />}
                {showMonthTable && (<MonthList setMonth={setMonth} data={moment.months()} />)}
            </div>
            {showCalendarTable && (
            <div className="calendar-date">
                <table className="calendar-day">
                    <thead><tr>{weekdayShortName}</tr></thead>
                    <tbody>{mappedDaysInMonth}</tbody>
                </table>
            </div>
            )}
            <h5 id="reset-date-button" onClick={resetDate}>All Dates</h5>
        </div>
    );
}

export default Calendar

