/* Created by ianb on 03/10/2013 13:37:33 using v0.9 */
$(function () {       
    Highcharts.theme = {
        colors: ['#009AA6', '#E10E49', '#4F0B7B', '#6C6F70',
            '#3FCFD5', '#E59AAA', '#B634BB', '#CECFCB'],
        chart: {

        },
        title: {
            style: {
                color: '#000000',
                font: '"Proxima Nova", Verdana'
            }
        },

        yAxis: {
            gridLineWidth: 1,
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana',
                   fontWeight: ''
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana'
                }
            }            
        },

        xAxis: {
            gridLineWidth: 1,            
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana'
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '"Proxima Nova", Verdana'
                }
            } 
        },

        legend: {
            itemStyle: {
                color: '#000000',
                font: '"Proxima Nova", Verdana'
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
title: {text: 'How have NHS staff sickness rates changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['April 2009','May 2009','June 2009','July 2009','August 2009','September 2009','October 2009','November 2009','December 2009','January 2010','February 2010','March 2010','April 2010','May 2010','June 2010','July 2010','August 2010','September 2010','October 2010','November 2010','December 2010','January 2011','February 2011','March 2011','April 2011','May 2011','June 2011','July 2011','August 2011','September 2011','October 2011','November 2011','December 2011','January 2012','February 2012','March 2012','April 2012','May 2012','June 2012','July 2012','August 2012','September 2012','October 2012','November 2012 ','December 2012','January 2013','February 2013','March 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'NHS National Staff Absence Rate'}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'sickness absence rate',
type: 'line',
data: [3.99,4.05,4.12,4.7,4.21,4.12,4.59,4.65,4.69,4.71,4.48,4.25,3.93,3.82,3.94,3.99,3.82,4.11,4.2,4.37,4.83,4.7,4.12,3.9,3.73,3.69,3.9,3.97,3.92,4.03,4.25,4.42,4.39,4.46,4.48,4.18,4,4.12,3.93,4.15,4,4.03,4.4,4.49,4.61,4.72,4.33,4.08]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'sickness absence rate trendline',
data: [[0, 4.23],[47, 4.21]]
}
]
});
});

