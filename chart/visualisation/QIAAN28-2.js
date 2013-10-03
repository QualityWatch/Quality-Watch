/* Created by ianb on 03/10/2013 16:39:20 using v0.9 */
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
title: {text: 'How is the amount spent per smoker related to the percentage of quitters?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Cost per quitter (£)'}
, labels: {
}
},
yAxis: {
title: {text:'Percentage of adults who quit smoking <br> within four weeks of those who set <br> a quit date (April 2003 to December <br> 2012)', offset: 111}
, max: 0.7
, min: 0.4
, labels: {
}},
series:[
{
name: 'Cost per quitter compared to successful quitters',
type: 'scatter',
data: [[174,0.53],[235,0.54],[209,0.57],[138,0.59],[180,0.54],[187,0.54],[170,0.57],[129,0.59],[159,0.53],[167,0.52],[194,0.55],[171,0.5],[192,0.51],[198,0.53],[120,0.56],[152,0.51],[144,0.5],[207,0.52],[194,0.53],[215,0.49],[240,0.49],[262,0.51],[182,0.51],[227,0.48],[250,0.48],[256,0.5],[185,0.51],[230,0.47],[234,0.48],[241,0.49],[190,0.5],[207,0.48],[223,0.48],[246,0.5],[210,0.51],[226,0.49],[260,0.5],[269,0.52]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Cost per quitter compared to successful quitters trendline',
data: [[120, 0.55],[269, 0.49]]
}
]
});
});

