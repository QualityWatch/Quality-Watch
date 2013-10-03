/* Created by ianb on 03/10/2013 16:45:24 using v0.9 */
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
title: {text: 'How has health expenditure per head changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
title: {text:'Total expenditure in UK on health/capita <br> (US$ PPP) 2011 ', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'United Kingdom',
type: 'line',
data: [529.56,559.67,624.79,656.16,687.99,731.06,796.98,853.16,908.48,958.68,1047.2,1151.5,1204.1,1292.8,1344.2,1432.5,1479.1,1549.9,1670.4,1827.3,2012.5,2191.2,2331.4,2580.3,2762,2997.5,3094.1,3273.7,3455.6,3421.6,3405.5]
,index: 1
},
{
name: 'United States',
type: 'line',
data: [1268.3,1418.8,1550.3,1691.5,1833.7,1948.5,2101.2,2334.8,2575.7,2850.7,3074.2,3285.7,3481.9,3629.2,3788.4,3949.8,4118.8,4304.5,4526.5,4790.5,5140.3,5583.4,5999.8,6362.9,6734.6,7111.4,7490.4,7771.5,8005.7,8246.7,8507.6]
,index: 2
},
{
name: 'France',
type: 'line',
data: [null,null,null,null,1028.4,null,null,null,null,1439.7,1542,1642,1738.8,1803,2093,2156.8,2222.3,2307.4,2396,2544.4,2716.6,2920.8,2954,3089.6,3253.9,3434.8,3600.1,3763.6,3961.7,4016.1,4117.9]
,index: 3
},
{
name: 'Germany',
type: 'line',
data: [1104.1,1151,1215.9,1314.3,1412.6,1458.2,1537.1,1673.4,1663.7,1793,null,1992.4,1999.9,2129.6,2270.2,2399.5,2415.1,2487.6,2589.5,2677.5,2806.1,2943.1,3096.6,3166.4,3363.2,3563.9,3723.4,3973.3,4187.2,4348.6,4494.7]
,index: 4
},
{
name: 'Australia',
type: 'line',
data: [715.08,747.58,794.48,847.01,921.07,992.35,1037.2,1090.7,1143.6,1207.3,1284.9,1373.3,1448.2,1534.6,1617.5,1718.9,1817,1954.3,2097,2258.9,2386.5,2558.6,2666,2882,2979.6,3167.6,3360.3,3470.2,3734.4,3800.1,null]
,index: 5
}
]
});
});

