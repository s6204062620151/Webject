import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './CSS/Admin.css'

import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);


const Adminhome = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/monthlysale')
      .then((response) => {
        const formattedData = response.data.map((item, index) => ({
          ...item,
          key: index,
        }));
        setData(formattedData);
        console.log(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


    const chartData = {
      labels: data.map(item => item.month), // Use 'month' as labels
      datasets: [
        {
          label: 'Total Price',
          data: data.map(item => item.total_price),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Total Quantity',
          data: data.map(item => item.total_quantity),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
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
        <Bar data={chartData} options={options} />
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