/* Created by ianb on 03/10/2013 13:32:31 using v0.9 */
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
title: {text: 'How long did outpatients say they had to wait for an appointment and how has this changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004','2009','2011']
, labels: {
}
},
yAxis: {
title: {text:'How long did outpatients have to <br> wait for an appointment?(proportion <br> of outpatients)', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Up to 1 month',
type: 'column',
data: [35,47,0]
,index: 7
},
{
name: '1 month to 6 weeks',
type: 'column',
data: [22,26,0]
,index: 6
},
{
name: 'More than 6 weeks but no more than 3 months',
type: 'column',
data: [23,17,0]
,index: 5
},
{
name: 'More than 3 months',
type: 'column',
data: [19,10,0]
,index: 4
},
{
name: 'Up to 1 month',
type: 'column',
data: [0,0,49]
,index: 3
},
{
name: '1 month to 6 weeks',
type: 'column',
data: [0,0,27]
,index: 2
},
{
name: 'More than 6 weeks but no more than 3 months',
type: 'column',
data: [0,0,17]
,index: 1
},
{
name: 'More than 3 months',
type: 'column',
data: [0,0,6]
,index: 0
}
]
});
});

