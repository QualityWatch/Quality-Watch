/* Created by ianb on 03/10/2013 16:39:40 using v0.9 */
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
title: {text: 'How has the proportion of timely antenatal assessments changed?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009-10 Q3','2009-10 Q4','2010-11 Q1','2010-11 Q2','2010-11 Q3','2010-11 Q4','2011-12 Q1','2011-12 Q2','2011-12 Q3','2011-12 Q4','2012-13 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of antenatal appointments <br> which happened before 12 weeks 6 <br> days', offset: 99}
, max: 90
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of appointments which happened before 12 weeks 6 days',
type: 'line',
data: [82.2,80,83.2,83.4,85.3,84.5,85.5,85.6,86.7,86.5,86.9]
,index: 1
}
]
});
});
