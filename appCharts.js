// All charts global settings
Chart.defaults.global.defaultFontColor = '#aaa';
Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif";
Chart.defaults.global.defaultFontSize = 13;
Chart.defaults.global.layout.padding.top = 20;
Chart.defaults.scale.ticks.padding = 15;

// Line chart global settings
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.elements.line.borderColor = '#a0a3e3';
Chart.defaults.global.elements.line.backgroundColor = 'rgba(115, 119, 191, 0.25)';
Chart.defaults.global.elements.line.fill = 'start';
Chart.defaults.global.elements.line.tension = 0;

Chart.defaults.global.elements.point.radius = 6;
Chart.defaults.global.elements.point.borderWidth = 2;
Chart.defaults.global.elements.point.borderColor = '#8083c4';
Chart.defaults.global.elements.point.backgroundColor = '#fff';

// traffic chart
const trafficChartCtx = document.getElementById('traffic-chart').getContext('2d');
const trafficChart = new Chart(trafficChartCtx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            fill: 'start',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1575, 1250, 1750, 2250, 1750, 2250],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true,
                    drawTicks: false,
                },
                ticks: {
                    padding: 15,
                }
            }],
            yAxes: [{
                offset: true,
                gridLines: {
                    offsetGridLines: true,
                    drawTicks: 0,
                },
                ticks: {
                    stepSize: 500,
                }
            }]
        },
        legend: {
            display: false
        }
    }
});


// daily traffic chart
const dailyChartCtx = document.getElementById('daily-chart').getContext('2d');
const dailyChart = new Chart(dailyChartCtx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            barPercentage: 0.5,
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
            ],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                },
                ticks: {
                    padding: 15,
                }
            }],
            yAxes: [{
                offset: true,
                gridLines: {
                    offsetGridLines: true,
                    drawTicks: false,
                },
                ticks: {
                    stepSize: 50,
                }
            }]
        },
        legend: {
            display: false
        }
    }
});


// mobile users chart
const mobileUsersChartCtx = document.getElementById('mobile-users-chart').getContext('2d');
const mobileUsersChart = new Chart(mobileUsersChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            borderWidth: 0,
            data: [20, 20, 60],
            backgroundColor: [
                'rgb(115, 177, 191)',
                'rgb(129, 201, 143)',
                'rgb(115, 119, 191)',
            ],
        }]
    },
    options: {
        layout: {
            padding: {
                right: 40,
            },
        },
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                padding: 20,
                fontSize: 15,
            },
        }
    }
});