// traffic chart
const trafficChartCtx = document.getElementById('traffic-chart').getContext('2d');
const trafficChart = new Chart(trafficChartCtx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 1500, 2000, 1500, 1575, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: [
                'rgba(115, 119, 191, 0.3)'
            ],
            borderColor: [
                'rgba(115, 119, 191, 0.7)'
            ],
            borderWidth: 1,
            pointBorderColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)'
            ],
            pointBackgroundColor: [
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)',
                'rgb(255, 255, 255, 1)'
            ],
            pointBorderWidth: 2,
            lineTension: 0,
            radius: 6,
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
                },
            }],
            yAxes: [{
                gridLines: {
                    drawTicks: 0,
                },
                ticks: {
                    stepSize: 500,
                    padding: 15,
                }
            }],
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
                },
            }],
            yAxes: [{
                offset: true,
                gridLines: {
                    offsetGridLines: true,
                    drawTicks: false,
                },
                ticks: {
                    padding: 15,
                    stepSize: 50,
                }
            }]
        },
        legend: {
            display: false
        },
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
        legend: {
            position: 'right',
            labels: {
                boxWidth: 25,
                padding: 20,
            },
        }
    },
});