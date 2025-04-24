import React from 'react';
import { Chart } from 'react-google-charts';

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
    title: 'My Daily Activities',
  };

  return (
    <div style={{ width: '80%', margin: '50px auto' }}>
      <h2>Pie Chart Example (Google Charts)</h2>
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