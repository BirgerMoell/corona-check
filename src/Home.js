import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Corona Cases
        </p>

        <table>
        <tr>
            <th>Datum</th>
            <th>Prognos</th>
            <th>Utfalls</th>
        </tr>
        <tr>
            <td>8/3</td>
            <td>202</td>
            <td>190</td>
        </tr>
        <tr>
            <td>9/3</td>
            <td>272</td>
            <td>261</td>
        </tr>
        </table>


      </header>
    </div>
  );
}

export default Home;