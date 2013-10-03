$(function () {       
    Highcharts.theme = {
        colors: ['#009AA6', '#E10E49', '#4F0B7B', '#6C6F70',
            '#3FCFD5', '#E59AAA', '#B634BB', '#CECFCB'],
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
title: {text: 'How have rates of timely antenatal assessments changed by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
        xAxis: {
            title: {
                text: ''
            },
            categories: ['2009-10 Q3', '2009-10 Q4', '2010-11 Q1', '2010-11 Q2', '2010-11 Q3', '2010-11 Q4', '2011-12 Q1', '2011-12 Q2', '2011-12 Q3', '2011-12 Q4', '2012-13 Q1'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: {
            title: {
                text: 'Ratio of maternities which had the <br> first antenatal appointment before <br> 12 weeks 6 days',
                offset: 99
            },
            max: 1,
            min: 0.8,
            labels: {}
        },
        series: [{
            name: 'Ratio of maternities which had the first antenatal appointment before 12 weeks and 6 days',
            type: 'line',
            data: [0.87, 0.87, 0.85, 0.93, 0.93, 0.92, 0.91, 0.95, 0.93, 0.95, 0.92]
        }, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[0.8692,0.8786],
[0.8652,0.8743],
[0.849,0.858],
[0.9207,0.9305],
[0.9276,0.9374],
[0.9181,0.9276],
[0.9099,0.9194],
[0.9423,0.9522],
[0.927,0.9367],
[0.9472,0.9569],
[0.9111,0.9207]

            ]
        },



        {
            type: 'line',
            marker: {
                fillColor: 'none',
                lineColor: null
            },
            name: 'Ratio of maternities which had the first antenatal appointment before 12 weeks and 6 days trendline',
            data: [
                [0, 0.87],
                [10, 0.94]
            ]
        }]
    });
});