export default {
  lineData: {
    labels: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
    ],
    datasets: [
      {
        data: [320, 280, 400, 350, 710, 420, 480, 280, 350, 300],
        borderColor: '#3e95cd',
        fill: false,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    elements: { point: { radius: 0 } },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: '#e1e2e5',
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: '#e1e2e5',
          },

          ticks: {
            maxTicksLimit: 6,
            fontColor: '#7d889e',
          },
        },
      ],
    },
  },
};
