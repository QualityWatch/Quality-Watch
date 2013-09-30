/* Created by ianb on 26/09/2013 15:31:33 using v0.9 */
$(function () {       
    Highcharts.theme = {
        colors: ['#009AA6', '#E10E49', '#4F0B7B', '#6C6F70',
            '#3FCFD5', '#E59AAA', '#B634BB', '#CECFCB'],
        chart: {

        },
        title: {
            style: {
                color: '#000000',
                font: '9pt "Proxima Nova", Verdana'
            }
        },

        yAxis: {
            gridLineWidth: 1,
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '9pt "Proxima Nova", Verdana'
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '9pt "Proxima Nova", Verdana'
                }
            }            
        },

        xAxis: {
            gridLineWidth: 1,            
            gridLineColor: '#CECFCB',
            title: {
                style: {
                    color: '#000000',
                    font: '9pt "Proxima Nova", Verdana'
                }
            },
            labels: {
                style: {
                    color: '#000000',
                    font: '9pt "Proxima Nova", Verdana'
                }
            } 
        },

        legend: {
            itemStyle: {
                color: '#000000',
                font: '9pt "Proxima Nova", Verdana'
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
xAxis: {
title: {text:''}
, categories: ['Oct 09 - Mar 10','Apr 11 - Sep 11','Oct 11 - Mar 12']
, labels: {
}
},
yAxis: {
title: {text:'Acute rate of incidents reported <br> per 10,000 admissions', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Acute rate of incidents reported per 10,000 admissions',
type: 'column',
data: [62.69,75.06,74.73]
,index: 1
}
]
});
});

