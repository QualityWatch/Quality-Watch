/* Created by ianb on 03/10/2013 16:39:48 using v0.9 */
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
title: {text: 'How has the number of staff feeling pressured to work when unwell changed by sector?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting feeling pressure to attend <br> work when feeling unwell in last <br> 3 months ± SEM', offset: 111}
, max: 40
, min: 0
, labels: {
}},
series:[
{
name: 'Acute',
type: 'column',
data: [25.4,25.91,25.89,28.46]
,index: 1
},
{
name: 'Ambulance',
type: 'column',
data: [30.48,32.25,34.69,38.08]
,index: 2
},
{
name: 'MH&LD',
type: 'column',
data: [18.49,19.18,19.71,22.09]
,index: 3
},
{
name: 'Community trusts',
type: 'column',
data: [0,0,21.81,26.16]
,index: 4
}
]
});
});

