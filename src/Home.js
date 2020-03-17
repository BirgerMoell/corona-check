import React from "react";
import "./App.css";

export const Display = props => {
  if (props.header && props.amount) {
    return (
      <div className="Display-container">
        <h3>{props.header}</h3>
        <hr></hr>
        <p>{props.amount}</p>
      </div>
    );
  } else {
    return null;
  }
};

class Home extends React.Component {
  state = {};

  componentDidMount() {
    this.getCoronaVirusData();
    //this.getCoronaVirusTimeLineData();
    setInterval(this.getCoronaVirusData(), 60000); // Time in milliseconds
  }

  getCoronaVirusTimeLineData = async () => {
    let result = await fetch(
      "https://thevirustracker.com/timeline/map-data.json"
    );
    let resultJson = await result.json();
    console.log("the timeline data is", resultJson);

    this.setState({
      timeline: resultJson
    });
  };

  getCoronaVirusData = async () => {
    let result = await fetch(
      "https://thevirustracker.com/free-api?global=stats"
    );
    let resultJson = await result.json();
    console.log("the json result is", resultJson);
    let timestamp = new Date();
    let time =
      timestamp &&
      timestamp.getFullYear() +
        "-" +
        "0" +
        (timestamp.getMonth() + 1) +
        "-" +
        timestamp.getDate() +
        " " +
        timestamp.getHours() +
        ":" +
        timestamp.getMinutes() +
        ":" +
        timestamp.getSeconds();

    this.setState({
      results: resultJson.results[0],
      timestamp: time
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Corona Cases</p>

          <div>
          <h3 className="corona-cases">{this.state.results && this.state.results.total_cases}</h3>
          <p>Last updated {this.state.timestamp}</p>
          </div>


          <div className="Data-container">
            <Display
              header={"Total Cases"}
              amount={this.state.results && this.state.results.total_cases}
            />
            <Display
              header={"Total Recovered"}
              amount={this.state.results && this.state.results.total_recovered}
            />
            <Display
              header={"Total Unresolved"}
              amount={this.state.results && this.state.results.total_unresolved}
            />
            <Display
              header={"Total Deaths"}
              amount={this.state.results && this.state.results.total_deaths}
            />
          </div>

          <h2>Daily</h2>

          <div className="Data-container">
            <Display
              header={"Total New Cases Today"}
              amount={
                this.state.results && this.state.results.total_new_cases_today
              }
            />
            <Display
              header={"Total New Deaths Today"}
              amount={
                this.state.results && this.state.results.total_new_deaths_today
              }
            />
          </div>

          <h2>Active</h2>

          <div className="Data-container">
            <Display
              header={"Total Active Cases"}
              amount={
                this.state.results && this.state.results.total_active_cases
              }
            />
            <Display
              header={"Total Serious Cases"}
              amount={
                this.state.results && this.state.results.total_serious_cases
              }
            />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
