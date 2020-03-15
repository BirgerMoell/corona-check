import React, { Fragment } from "react";
import "./App.css";
import timeline from "./sweden.json";
import days from "./dates.json"

const TimeLineItem = props => {

  return (

    <tr>
      <td>{props.item}</td>
      <td>{props.item.new_daily_cases}</td>
      <td>{props.item.new_daily_deaths}</td>
      <td>{props.item.total_cases}</td>
      <td>{props.item.total_recoveries}</td>
      <td>{props.item.total_deaths}</td>
    </tr>
  );
};

class Timeline extends React.Component {
  state = {};

  componentDidMount() {}


  getDays = () => {
    // console.log("the timeline is", timeline);
    // console.log("the timeline iteim is", timeline.timelineitems);
    // console.log("the timeline item 0 is", timeline.timelineitems[0]);
    // let days = timeline.timelineitems[0]

    // let newDays = []
    // let item = {}

    // for (let day in days) {
    //     item = days[day]
    //     item.date = day
    //     newDays.push(item)
    //     console.log("the newdays is", newDays)
    // }
  }

  render() {





    return (
      <div className="App">
        <header className="App-header">
          <p>Swedish Timeline</p>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>New Daily Cases</th>

                <th>New Daily Deaths</th>

                <th>Total Cases</th>

                <th>Total Recoveries</th>

                <th>Total Deaths</th>
              </tr>
            </thead>

            <tbody>

             {days.map((day =>
                <tr className="Daily-cases-container">
                <td>{day.date}</td>
                <td>{day.new_daily_cases}</td>
                <td>{day.new_daily_deaths}</td>
                <td>{day.total_cases}</td>
                <td>{day.total_recoveries}</td>
                <td>{day.total_deaths}</td>
                </tr>
            ))}

            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default Timeline;
