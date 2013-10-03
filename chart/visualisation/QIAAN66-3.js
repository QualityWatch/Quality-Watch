/* Created by ianb on 03/10/2013 16:42:27 using v0.9 */
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
title: {text: 'Do vaccination rates differ by country?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['United Kingdom','England','Northern Ireland','Scotland','Wales']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children immunised <br> by their first birthday, completed <br> primary courses in 2011/12', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Diphtheria & Tetanus & Polio & Pertussis & Hib',
type: 'column',
data: [95,94.7,97.6,97.4,96.4]
,index: 1
},
{
name: 'Meningococcal group C',
type: 'column',
data: [94.3,93.9,97.2,96.8,96.1]
,index: 2
},
{
name: 'Pneumococcal Disease (PCV)',
type: 'column',
data: [94.6,94.2,97.4,97.4,95.8]
,index: 3
},
{
name: 'MMR',
type: 'column',
data: [91.6,91.2,93.3,94.3,92.7]
,index: 4
}
]
});
});

