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
title: {text: 'How did NHS staff sickness rates vary by region?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['London','Special Health Authorities','South Central','South East Coast','East of England','South West','England','West Midlands','East Midlands','Yorkshire and the Humber','North West','North East']
, labels: {
}
},
yAxis: {
title: {text:'Average daily sickness absence rate <br> (April 2009 - March 2013)', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
type: 'bar',
name: 'Sickness absence rate',
data: [3.54,3.64,3.77,3.92,4.13,4.18,{color: '#E10E49', y:4.22},4.46,4.5,4.55,4.66,4.69]
,index: 1
}
]
});
});
