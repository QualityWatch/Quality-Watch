/* Created by EFisher on 23/11/2015 16:03:56 using v2.7 */       {
        legend: {
            enabled: false
        },
title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How easy was it for patients to contact the out-of-hours GP service by telephone?'
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
            categories: ['2011/12','2012/13','Jan 2013 - Sept 2013','July 2013 - Mar 2014','Jan 2014 - Sept 2014','July 2014 - Mar 2015'],
            labels: {}
        },
        yAxis: {
            title: {
                text: 'Percentage of patients who said <br> that it was easy to contact the <br> out-of-hours GP service by telephone',
                offset: 99
            },
            max: 110,
            labels: {
                format: '{value:.0f}',
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
            data: [79.7, 79.1, {
                y: 76.2,
                color: 'rgba(0,154,166,1)'
            },{
                y: 74.5,
                color: 'rgba(0,154,166,1)'
            },{
                y: 75.8,
                color: 'rgba(0,154,166,1)'
            },{
                y: 76.9,
                color: 'rgba(0,154,166,1)'
            }]
        }, {
            name: 'error',
            type: 'errorbar',
            data: [
                [79.35, 79.96],
                [78.75, 79.39],
                [75.9, 76.6],
                [74.1,74.9],
[75.4,76.2],
[76.5,77.3]


            ]
        }]
    }