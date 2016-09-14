/* Created by NCODowd on 09/09/2016 09:15:22 using v2.7 */{
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
            categories: ['2011/12', '2012/13', '2013/14', '2014/15','2015/16'],
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
        series: [
            {name: 'GP', 
             type: 'column', 
             data: [86.6, 86, 85.8, 85,85]
            },
            {name: 'GP error',
             type: 'errorbar',
             data: [[86.54, 86.71], [85.92, 86.11], [85.67, 85.87], [84.86, 85.07], [84.89,85.09]]
            },
            {name: 'Nurse',
             type: 'column',
             data: [81.23, 81.1, 80.94, 79.43,79.21]
            }, 
            {name: 'Nurse error',
             type: 'errorbar',
             data: [[81.13, 81.33], [81, 81.21], [80.83, 81.05] , [79.31,79.55],[79.09,79.33]]
            }
        ]
    }