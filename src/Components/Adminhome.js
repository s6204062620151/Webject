import React from 'react'
import { Bar } from 'react-chartjs-2';
import './CSS/Admin.css'

import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);


const Adminhome = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
          {
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

    
  return (
    <div className='content'>
      <div className='chart'>
        <h2>Monthly Sale</h2>
        <Bar data={data} options={options} />
      </div>
      <div className='card-container'>

        <div className='card'>
            <h2>Top Products :</h2>
        </div>

        <div className='card'>
            <h2>Total Products :</h2>
        </div>

        <div className='card'>
            <h2>Income :</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Adminhome