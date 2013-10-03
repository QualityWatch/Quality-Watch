/* Created by ianb on 03/10/2013 16:45:21 using v0.9 */
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
title: {text: 'How does health expenditure per head vary by country?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['United States','Norway','Switzerland','Netherlands','Austria','Canada','Germany','Denmark','France','Sweden','Australia','Ireland','United Kingdom','Finland','OECD average','Japan','New Zealand','Spain','Italy','Portugal','Greece','Hungary','Poland','Estonia','Mexico','Turkey']
, labels: {
}
},
yAxis: {
title: {text:'Total expenditure on health/capita <br> (US$ PPP) 2011 (or nearest year)', offset: 87}
, labels: {
format: '{value:.5f}' 
}},
series:[
{
name: 'Series1',
type: 'bar',
data: [8508,5669,5643,5099,4546,4522,4495,4448,4118,3925,3800,3700,3405,3374,3322,3213,3182,3072,3012,2619,2361,1689,1452,1303,977,906]
,index: 1
}
]
});
});

