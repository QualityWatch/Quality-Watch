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
                    text: 'How did patients feel about how good GPs and nurses were at giving them enough time?'
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
                text: 'Percentage of patients who said <br> the last time they saw or spoke <br> to a GP or nurse they were good <br> at giving them enough time',
                offset: 111
            },
            max: 110,
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
        series: [
            {name: 'GP', 
             type: 'column', 
             data: [88.1, 87.4, 86.6, 86, {y: 85.8, color: 'rgba(0,154,166,0.5)'           }]
            },
            {name: 'GP error',
             type: 'errorbar',
             data: [[88.1, 88.18], [87.31, 87.4], [86.54, 86.71], [85.92, 86.11], [85.73, 85.93] ]
            },
            {name: 'Nurse',
             type: 'column',
             data: [81, 76.7, 81.2, 81.1, {y: 81, color: 'rgba(225,14,73,0.5)' }]
            }, 
            {name: 'Nurse error',
             type: 'errorbar',
             data: [ [80.94, 81.04], [76.66, 76.78], [81.13, 81.33], [81, 81.21], [80.91, 81.14] ]
            }
        ]
    }