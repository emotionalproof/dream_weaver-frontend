import React from 'react'
import moment from "moment";

const YearTable = props => {
    let months = [];
    let nextten = moment()
    .set("year", props)
    .add("year", 12)
    .format("Y");

    const getDates = (startDate, stopDate) => {
        let dateArray = [];
        let currentDate = moment(startDate);
        let formattedStopDate = moment(stopDate);
        while (currentDate <= formattedStopDate) {
        dateArray.push(moment(currentDate).format("YYYY"));
        currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }

    let tenyear = getDates(props, nextten);

    tenyear.map(data => {
    months.push(
        <td
        key={data}
        className="calendar-month"
        onClick={e => {
            props.setYear(data);
        }}
        >
        <span>{data}</span>
        </td>
    );
    });
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
    if (i % 3 !== 0 || i == 0) {
        cells.push(row);
    } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
    }
    });
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
    return <tr>{d}</tr>;
    });

    return (
    <table className="calendar-month">
        <thead>
        <tr>
            <th colSpan="4">Select a Yeah</th>
        </tr>
        </thead>
        <tbody>{yearlist}</tbody>
    </table>
    );
};

export default YearTable
