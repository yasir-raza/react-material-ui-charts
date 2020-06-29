import React from 'react';
import './App.css';
import { Button } from '@material-ui/core'
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <h2> <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer"> Material UI Library </a> </h2>
      <Button variant="contained" color="secondary">Hello World</Button>
      <div>
      <h2><a href="https://www.npmjs.com/package/react-chartjs-2" target="_blank" rel="noopener noreferrer"> React Chart JS </a></h2>
      <Bar
          data={data}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  );
}

export default App;
