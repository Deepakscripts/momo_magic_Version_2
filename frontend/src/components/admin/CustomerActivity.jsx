// src/components/CustomerActivityChart.jsx
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CustomerActivityChart() {
  const data = {
    labels: ['Dine-in', 'Delivery'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: [
          'rgb(249, 115, 22)',
          'rgb(59, 130, 246)',
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(59, 130, 246)',
        ],
        borderWidth: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1,
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
