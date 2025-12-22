// src/components/RevenueChart.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function RevenueChart() {
  const data = {
    labels: ['8:00 AM', '11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM', '11:00 PM'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 300, 400, 350, 450, 420],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(249, 115, 22)',
        pointHoverBorderWidth: 2,
        borderWidth: 3,
      },
      {
        label: 'Costs',
        data: [100, 150, 180, 170, 200, 190],
        borderColor: 'rgb(209, 213, 219)',
        backgroundColor: 'transparent',
        tension: 0.4,
        borderDash: [5, 5],
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(209, 213, 219)',
        pointHoverBorderWidth: 2,
        borderWidth: 2,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
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
        displayColors: true,
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: $${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11
          }
        },
        border: {
          display: true,
          color: '#E5E7EB'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(229, 231, 235, 0.3)',
          drawBorder: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11
          },
          callback: (value) => `$${value}`
        },
        border: {
          display: true,
          color: '#E5E7EB'
        }
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue vs Costs</CardTitle>
        <CardDescription>Comparison over the last 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <span className="text-sm text-muted-foreground">Costs</span>
          </div>
        </div>
        
        <div style={{ height: '250px', width: '100%' }}>
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
