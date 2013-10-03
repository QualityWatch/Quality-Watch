/* Created by ianb on 03/10/2013 14:32:59 using v0.9 */
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
title: {text: 'How have medication errors causing severe harm and death changed over time?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 08 - Dec 08','Apr 08 - Mar 09','Jul 08 - Jun 09','Oct 08 - Sep 09','Jan 09 - Dec 09','Apr 09 - Mar 10','Jul 09 - Jun 10','Oct 09 - Sep 10','Jan 10 - Dec 10','Apr 10 - Mar 11','Jul 10 - Jun 11','Oct 10 - Sep 11','Jan 11 - Dec 11','Apr 11 - Mar 12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of medication errors resulting <br> in severe harm or death per 100,000 <br> population*', offset: 99}
, labels: {
format: '{value:.3f}' 
}},
series:[
{
name: 'Indicator value',
type: 'column',
data: [0.77,0.77,0.8,0,0.61,0.48,0.48,0.45,0.52,0.5,0.54,0.53,0.5,0.49]
,index: 1
}
]
});
});

