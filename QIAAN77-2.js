$(function () {       
    Highcharts.theme = {
        colors: ['#009AA6', '#20B4BE', '#40CED6', '#60E8EE', '#80FFFF'],
        chart: {

        },
        title: {
            style: {
                color: '#000000',
                font: '""Proxima Nova"", Verdana'
            }
        },

        yAxis: {
            gridLineWidth: 1,
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '""Proxima Nova"", Verdana',
                   fontWeight: ''
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '""Proxima Nova"", Verdana'
                }
            }            
        },

        xAxis: {
            gridLineWidth: 1,            
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '""Proxima Nova"", Verdana'
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '""Proxima Nova"", Verdana'
                }
            } 
        },

        legend: {
            itemStyle: {
                color: '#000000',
                font: '""Proxima Nova"", Verdana'
            },
            itemHoverStyle: {
                color: 'gray'
            }
        }
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
 $('#container').highcharts({
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of older people living at home after discharge changed by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},xAxis: {
            title: {
                text: ''
            },
            categories: ['London', 'North East', 'South East', 'Eastern', 'England', 'Yorkshire & Humber', 'South West', 'North West', 'West Midlands', 'East Midlands'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: {
            title: {
                text: 'Proportion of older people (over <br> 65) who are still at home 91 days <br> after discharge from hospital into <br> reablement/rehabilitation services',
                offset: 111
            },
            max: 100,
            min: 0,
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
            name: '2009/10',
            type: 'column',
            data: [81.4, 81.1, 80.5, 77.8, {
                color: '#E10E49',
                y: 81.2}, 85, 81.2, 82.1, 83.5, 79.4],
            index: 1
        }, {
            name: '2010/11',
            type: 'column',
            data: [85.3, 82.2, 83.5, 78.5, {
                color: '#E35479',
                y: 81.9
            },
            81.6, 82.5, 78.3, 81.9, 82.8],
            index: 2
        }, {
            name: '2011/12',
            type: 'column',
            data: [84.8, 85.3, 84.9, 80.6, {
                color: '#E59AA9',
                y: 82.7
            },
            84.8, 80.8, 82.1, 81.1, 79.7],
            index: 3
        }, {
            name: '2012/13',
            type: 'column',
            data: [85.9, 84.9, 82.5, 81.6, {
                color: '#E7E0D9',
                y: 81.5
            },
            81.3, 81.1, 79.8, 79, 77.9],
            index: 4
        }]
    });
});