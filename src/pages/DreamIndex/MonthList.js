import React from 'react'
import moment from "moment";

const MonthList = props => {
    let months = [];
        props.data.map(data => {
            months.push(
                <td
                key={data}
                className="calendar-month"
                onClick={e => {
                    props.setMonth(data);
                }}
                >
                <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
        if (i % 3 !== 0 || i === 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        });
        rows.push(cells);
        let monthlist = rows.map((d, i) => {
        return <tr key={i + "month"}>{d}</tr>;
        });

        return (
        <table className="calendar-month">
            <thead>
            <tr>
                <th colSpan="4">Select a Month</th>
            </tr>
            </thead>
            <tbody>{monthlist}</tbody>
        </table>
        );
}

export default MonthList
