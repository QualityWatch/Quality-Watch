/* Created by EFisher on 05/10/2015 14:59:10 using v2.7 */    {
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
            categories: ['2009/10', '2010/11', '2011/12', '2012/13', 'July 2013 - March 2014', 'July 2014 - March 2015'],
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
            name: 'Percentage',
            type: 'column',
            data: [64.7, 66.6, 78, 75,{y:72.9, color:'#3FCFD5'},{y:70.6, color:'#3FCFD5'}]
        }, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
                [64.64, 64.76], [66.53, 66.67], [77.89, 78.11], [74.88, 75.12], [72.77, 73.03], [70.47, 70.73]

            ]
        }

        ]
    }