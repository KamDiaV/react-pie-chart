import React from 'react';
import { Chart } from 'react-google-charts';
import './App.css';

function App() {
  const data = [
    ['Task', 'Hours per Day'],
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Read', 2],
    ['Sleep', 7],
  ];

  const options = {
    title: '',
  };

  return (
    <div className="chart-container">
      <h2>Pie Chart Example (Google Charts)</h2>
      <h3>My Daily Activities</h3>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
}

export default App;