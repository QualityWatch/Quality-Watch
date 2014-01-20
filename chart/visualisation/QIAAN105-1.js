{
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How easy did patients find it to get through to someone at the GP surgery on the phone?'
                },
                credits: {
                    enabled: true,
                    text: 'Copyright Nuffield Trust & The Health Foundation',
                    href: 'http://www.qualitywatch.org.uk'
                }
            }
        },
        xAxis: {
            title: {
                text: ''
            },
            categories: ['2009/10', '2010/11', '2011/12', '2012/13', 'Jan - Sept 2013'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: {
            title: {
                text: 'Percentage of patients who found <br> it easy to get through to someone <br> at the GP surgery on the phone',
                offset: 99
            },
            max: 100,
            labels: {
                format: '{value:.1f}',
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Series1',
            type: 'column',
            data: [64.7, 66.6, 78, 75, 73.9],
            index: 1
        }, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
                [64.6, 64.73],
                [66.51, 66.64],
                [77.88, 78.09],
                [74.88, 75.11],
                [73.76, 74.01]

            ]
        }

        ]
    }