import React from "react";
import "./App.css";

class Home extends React.Component {
  state = {};

  componentDidMount() {
    this.getCoronaVirusData();
    setInterval(this.getCoronaVirusData(), 60000); // Time in milliseconds
  }

  getCoronaVirusData = async () => {
    let result = await fetch(
      "https://thevirustracker.com/free-api?global=stats"
    );
    console.log("the result is", result);
    let resultJson = await result.json();
    console.log("the json result is", resultJson);

    this.setState({
      results: resultJson.results[0]
    });
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Corona Cases</p>

          {this.state.results && this.state.results.total_cases && (
            <div>
              <h4>Total Cases</h4>
              <hr></hr>
              <h4>{this.state.results.total_cases}</h4>
            </div>
          )}

          {this.state.results && this.state.results.total_deaths && (
            <div>
              <h4>Total Deaths</h4>
              <hr></hr>
              <h4>{this.state.results.total_deaths}</h4>
            </div>
          )}

          {this.state.results && this.state.results.total_new_cases_today && (
            <div>
              <h4>Total New Cases Today</h4>
              <hr></hr>
              <h4>{this.state.results.total_new_cases_today}</h4>
            </div>
          )}

        </header>
      </div>
    );
  }
}

export default Home;
