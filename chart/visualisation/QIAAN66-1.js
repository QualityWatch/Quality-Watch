/* Created by ianb on 03/10/2013 13:33:57 using v0.9 */
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
title: {text: 'Are children vaccinated before their 1st birthday and how has this changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children immunised <br> by their first birthday', offset: 87}
, max: 100
, min: 80
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Diphtheria & Tetanus & Polio & Pertussis & Hib',
type: 'line',
data: [null,null,null,null,null,91.1,91.3,92,93.6,94.2,94.7]
,index: 1
},
{
name: 'Diphtheria',
type: 'line',
data: [90.7,90.9,90.9,90.1,91.4,null,null,null,null,null,null]
,index: 2
},
{
name: 'Tetanus',
type: 'line',
data: [90.7,90.9,90.9,90.1,91.3,null,null,null,null,null,null]
,index: 3
},
{
name: 'Polio',
type: 'line',
data: [90.5,90.8,90.9,90,91.3,null,null,null,null,null,null]
,index: 4
},
{
name: 'Pertussis',
type: 'line',
data: [90.2,90.5,90.6,89.9,91.4,null,null,null,null,null,null]
,index: 5
},
{
name: 'Hib',
type: 'line',
data: [90.5,90.7,90.8,89.9,91.3,null,null,null,null,null,null]
,index: 6
},
{
name: 'Meningococcal group C',
type: 'line',
data: [89.1,90,90.2,89.6,90.9,91,90.3,91.2,92.7,93.4,93.9]
,index: 7
},
{
name: 'Pneumococcal Disease (PCV)',
type: 'line',
data: [null,null,null,null,null,null,83.7,91.3,92.9,93.6,94.2]
,index: 8
}
]
});
});

