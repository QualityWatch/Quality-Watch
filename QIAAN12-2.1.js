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
title: {text: 'How do overall number of medication safety incidents reported change by sector?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},xAxis: {
title: {text:''}
, categories: ['Oct 09 - Mar 10','Apr 11 - Sep 11','Oct 11 - Mar 12']
, labels: {
}
},
yAxis: {
title: {text:'Acute rate of incidents reported <br> per 10,000 admissions', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Acute rate of incidents reported per 10,000 admissions',
type: 'column',
data: [62.69,75.06,74.73]
,index: 1
}
]
});
});

