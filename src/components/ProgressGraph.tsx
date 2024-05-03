'use client'
import { Line } from 'react-chartjs-2';
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Progress() {
  // Sample data with timestamps
  const events = [
    { name: 'Event 1', timestamp: new Date(2024, 0, 1), value: 10 },
    { name: 'Event 2', timestamp: new Date('2024-02-04').getTime(), value: 20 },
    { name: 'Event 3', timestamp: new Date('2024-03-01').getTime(), value: 15 },
    // Add more events here...
  ];

  // Sort events by timestamp in ascending order
  events.sort();

  // Extract labels and data from events
  const labels = events.map((event) => new Date(event.timestamp).toLocaleDateString());
  const dataset1Data = events.map((event) => event.value); // Revenue data
  const dataset2Data = events.map((event) => Math.random() * 30); // Users data

  let options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left' as const,
        },
        title: {
            display: true,
            text: 'Progress w/ Events (Click Legend Labels to turn off lines)',
        },
        tooltip: {
            callbacks: {
                title: function (tooltipItems:any) {
                    const eventIndex = tooltipItems[0].dataIndex;
                    const event = events[eventIndex];
                    return event.name;
                  },
            },
        }
    }
}

  let data = {
    labels,
    datasets: [
      {
        label: 'Revenue',
        data: dataset1Data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Users',
        data: dataset2Data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
