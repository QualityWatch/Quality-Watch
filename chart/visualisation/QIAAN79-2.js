/* Created by ianb on 03/10/2013 16:43:56 using v0.9 */
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
title: {text: 'How has the number of people waiting for cancer treatment changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The number of people being treated <br> at any time or "have a decision <br> to treat"', offset: 99}
, labels: {
}},
series:[
{
name: 'All',
type: 'line',
data: [50899,55965,59419,58710,58963,59482,63096,60855,61197,62486,64566,64234,63916,63677,66097,66163,62690,63740]
,index: 1
},
{
name: 'Surgery',
type: 'line',
data: [7669,9609,11111,11580,12312,12166,13346,13341,14103,13403,14179,13911,13769,13413,14039,14401,13647,13209]
,index: 2
},
{
name: 'Anti-cancer drug regime',
type: 'line',
data: [11432,13442,15345,15794,16942,16894,17964,17906,19863,19056,19760,19647,21256,19796,20312,20351,22435,21099]
,index: 3
}
]
});
});

