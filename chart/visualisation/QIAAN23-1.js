/* Created by ianb on 03/10/2013 13:30:52 using v0.9 */
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
title: {text: 'What do staff say about violence they experience from colleagues and managers?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of NHS staff <br> reporting experiencing physical <br> violence from other staff', offset: 99}
, labels: {
}},
series:[
{
name: 'Manager/supervisor',
type: 'line',
data: [0.45,0.37,0.47,0.54,0.5,1.02,0.61,null,null,null]
,index: 1
},
{
name: 'Colleagues',
type: 'line',
data: [0.81,0.7,0.81,0.83,0.99,1.58,1.08,null,null,null]
,index: 2
},
{
name: 'Manager / team leader or other colleagues',
type: 'column',
data: [null,null,null,null,null,null,null,1.17,1.08,null]
,index: 1
},
{
name: 'Manager / team leader or other colleagues',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,2.83]
,index: 2
}
]
});
});

