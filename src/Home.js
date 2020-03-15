import React from "react";
import "./App.css";

export const Display = props => {
  if (props.header && props.amount) {
      console.log("the props are", props)
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

          <h2>Total</h2>

          <div className="Data-container">

          <Display header={"Total Cases"} amount={this.state.results && this.state.results.total_cases}/>
          <Display header={"Total Recovered"} amount={this.state.results && this.state.results.total_recovered}/>
          <Display header={"Total Unresolved"} amount={this.state.results && this.state.results.total_unresolved}/>
          <Display header={"Total Deaths"} amount={this.state.results && this.state.results.total_deaths}/>
          </div>


          <h2>Daily</h2>

          <div className="Data-container">

          <Display header={"Total New Cases Today"} amount={this.state.results && this.state.results.total_new_cases_today}/>
          <Display header={"Total New Deaths Today"} amount={this.state.results && this.state.results.total_new_deaths_today}/>
          </div>

          <h2>Active</h2>

          <div className="Data-container">

          <Display header={"Total Active Cases"} amount={this.state.results && this.state.results.total_active_cases}/>
          <Display header={"Total Serious Cases"} amount={this.state.results && this.state.results.total_serius_cases}/>
            </div>

        </header>
      </div>
    );
  }
}

export default Home;