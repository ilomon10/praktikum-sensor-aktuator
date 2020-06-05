import ApexCharts from 'apexcharts';
import IO from 'socket.io-client';
import '../styles/index.scss';

const socket = IO('http://localhost:3333');

let data = [{
  name: "x",
  data: []
}, {
  name: "y",
  data: []
}, {
  name: "z",
  data: []
}];

var options = {
  series: data,
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  animations: {
    enabled: true,
    easing: 'linear',
    dynamicAnimation: {
      speed: 1000
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Acceleration',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    type: "datetime",
    range: 6000
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

socket.on('connect', () => {
  console.log('connect');
})

socket.on('data', (d) => {
  d.forEach((v, i) => {
    if (data[i].data.length > 100) data[i].data = [];
    data[i].data.push([new Date(), v]);
  })
  chart.updateSeries(data);
})

console.log('webpack starterkit');
