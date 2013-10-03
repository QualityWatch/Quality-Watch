/* Created by ianb on 03/10/2013 16:45:10 using v0.9 */
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
title: {text: 'How has life expectancy changed by country?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Life expectancy from birth (years)'}
, labels: {
}},
series:[
{
name: 'United Kingdom',
type: 'line',
data: [73.8,74.1,74.3,74.5,74.7,74.8,75.2,75.3,75.4,75.7,75.9,76.3,76.2,76.8,76.6,76.9,77.2,77.3,77.5,77.9,78.2,78.3,78.4,79,79.2,79.5,79.7,79.9,80.4,80.7,81.1]
,index: 1
},
{
name: 'Australia',
type: 'line',
data: [74.9,74.7,75.5,75.8,75.6,76.1,76.3,76.3,76.5,77,77.4,77.5,78,78,77.9,78.2,78.5,78.7,79,79.3,79.7,80,80.3,80.6,80.9,81.1,81.4,81.5,81.6,81.8,82]
,index: 2
},
{
name: 'France',
type: 'line',
data: [74.5,74.8,74.8,75.3,75.4,75.6,76.2,76.4,76.6,76.9,77,77.3,77.4,77.7,77.9,78.1,78.4,78.7,78.9,79.2,79.3,79.4,79.2,80.3,80.3,80.9,81.2,81.3,81.5,81.8,82.2]
,index: 3
},
{
name: 'Germany',
type: 'line',
data: [73.2,73.5,73.8,74.2,74.3,74.6,75,75.2,75.4,75.3,75.5,76,76.1,76.4,76.6,76.8,77.3,77.6,77.9,78.2,78.5,78.5,78.6,79.2,79.4,79.8,80,80.1,80.3,80.5,80.8]
,index: 4
},
{
name: 'United States',
type: 'line',
data: [74.1,74.5,74.6,74.7,74.7,74.7,74.9,74.9,75.1,75.3,75.5,75.7,75.5,75.7,75.7,76.1,76.5,76.7,76.7,76.7,76.8,76.9,77.1,77.4,77.4,77.7,77.9,78.1,78.5,78.7,78.7]
,index: 5
}
]
});
});

