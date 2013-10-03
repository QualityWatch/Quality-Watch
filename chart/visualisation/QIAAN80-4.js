/* Created by ianb on 03/10/2013 13:35:47 using v0.9 */
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
title: {text: 'How have the longest referral to treatment times changed in the past 12 months?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Referral to treatment (RTT) 95th <br> percentile (weeks)', offset: 87}
, max: 24
, min: 14
, labels: {
}},
series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [21.4,20.8,20.9,21.2,20.9,20.8,20.5,21,21.2,21.5,21.9,22.4,21.9]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (adjusted) RTT pathways trendline',
data: [[0, 20.62],[12, 21.72]]
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [15.6,15.7,15.7,16.1,16,15.9,15.5,16,16.1,16,16.1,15.9,16.3]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Admitted RTT pathways trendline',
data: [[0, 15.65],[12, 16.1]]
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [19,19.2,18.6,18.7,18.3,18.3,18.7,18.8,18.8,18.9,18.8,18.2,18.5]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 18.87],[12, 18.54]]
},
{
name: '18 week target',
type: 'line',
data: [18,18,18,18,18,18,18,18,18,18,18,18,18]
,index: 4
}
]
});
});

