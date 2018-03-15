export default {
  lastYear: {
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
  thisYear: {
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
        data: [220, 280, 700, 250, 210, 320, 280, 380, 650, 300],
        borderColor: '#3e95cd',
        fill: false,
      },
    ],
  },

  options: {
    scaleShowLabels: false,
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
