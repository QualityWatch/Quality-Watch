/* Created by ianb on 03/10/2013 16:38:56 using v0.9 */
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
title: {text: 'How have breaches of the four hour target changed by week?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [' 07/11/2010',' 14/11/2010',' 21/11/2010',' 28/11/2010',' 05/12/2010',' 12/12/2010',' 19/12/2010',' 26/12/2010',' 02/01/2011',' 09/01/2011',' 16/01/2011',' 23/01/2011',' 30/01/2011',' 06/02/2011',' 13/02/2011',' 20/02/2011',' 27/02/2011',' 06/03/2011',' 13/03/2011',' 20/03/2011',' 27/03/2011',' 03/04/2011',' 10/04/2011',' 17/04/2011',' 24/04/2011',' 01/05/2011',' 08/05/2011',' 15/05/2011',' 22/05/2011',' 29/05/2011',' 05/06/2011',' 12/06/2011',' 19/06/2011',' 26/06/2011',' 03/07/2011',' 10/07/2011',' 17/07/2011',' 24/07/2011',' 31/07/2011',' 07/08/2011',' 14/08/2011',' 21/08/2011',' 28/08/2011',' 04/09/2011',' 11/09/2011',' 18/09/2011',' 25/09/2011',' 02/10/2011',' 09/10/2011',' 16/10/2011',' 23/10/2011',' 30/10/2011',' 06/11/2011',' 13/11/2011',' 20/11/2011',' 27/11/2011',' 04/12/2011',' 11/12/2011',' 18/12/2011',' 25/12/2011',' 01/01/2012',' 08/01/2012',' 15/01/2012',' 22/01/2012',' 29/01/2012',' 05/02/2012',' 12/02/2012',' 19/02/2012',' 26/02/2012',' 04/03/2012',' 11/03/2012',' 18/03/2012',' 25/03/2012',' 01/04/2012',' 08/04/2012',' 15/04/2012',' 22/04/2012',' 29/04/2012',' 06/05/2012',' 13/05/2012',' 20/05/2012',' 27/05/2012',' 03/06/2012',' 10/06/2012','6/17/2012','6/24/2012','7/1/2012','7/8/2012','7/15/2012','7/22/2012','7/29/2012','8/5/2012','8/12/2012','8/19/2012','8/26/2012','9/2/2012','9/9/2012','9/16/2012','9/23/2012','9/30/2012','10/7/2012','10/14/2012','10/21/2012','10/28/2012','11/4/2012','11/11/2012','11/18/2012','11/25/2012','12/2/2012','12/9/2012','12/16/2012','12/23/2012','12/30/2012','1/6/2013','1/13/2013','1/20/2013','1/27/2013','2/3/2013','2/10/2013','2/17/2013','2/24/2013','3/3/2013','3/10/2013','3/17/2013','3/24/2013','3/31/2013','4/7/2013','4/14/2013','4/21/2013','4/28/2013','5/5/2013','5/12/2013','5/19/2013','5/26/2013','6/2/2013','6/9/2013','6/16/2013','6/23/2013','6/30/2013','7/7/2013','7/14/2013','7/21/2013','7/28/2013','8/4/2013','8/11/2013','8/18/2013','8/25/2013','9/1/2013']
, labels: {
 rotation: -90
, step: 5
}
},
yAxis: {
title: {text:'Proportion of patients not placed <br> in a bed in a ward within four hours <br> of a decision to admit', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'proportion of patients not placed in a bed in a ward within four hours of a decision to admit',
type: 'line',
data: [1.8,1.6,1.4,1.7,2.2,3.3,3.3,2.4,4.1,5.1,3,1.8,1.7,1.9,2.3,2.2,1.5,1.6,1.9,2,2,2.2,2.2,1.7,1.6,1.4,2,1.6,1.5,1.7,1.8,1.8,1.8,1.6,1.6,1.6,1.2,1,1.3,1.5,1.1,1,1,1.6,2,1.8,1.6,2.1,2.3,2.2,1.7,2.1,2.7,1.9,1.7,2.1,2.2,2.8,3.1,2,2.1,4.4,3.2,2.8,2.9,2.6,3.6,4.4,4,3.5,2.4,1.8,2.1,1.9,1.9,3.2,2.5,2.1,1.7,2,2,2.2,1.7,1.9,2.1,2,1.9,1.8,1.5,1.5,1.6,1.5,1.7,1.9,1.7,1.6,1.8,2.2,2,2.7,2.7,2.5,2.6,2.2,2.2,2.8,2.7,2.6,2.9,3.7,4.1,3.8,2.9,5.8,4.7,3.2,4.3,4.8,4.3,4.5,4.5,5.8,6.1,5.8,5.4,4,6.9,7.1,5.4,3.5,2.1,2.3,2.3,2.2,2.1,2.1,2.1,2.4,1.4,1.7,2,2,2.6,2.3,2.3,2.2,2.5,2.9]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'proportion of patients not placed in a bed in a ward within four hours of a decision to admit trendline',
data: [[0, 1.7],[147, 3.3]]
}
]
});
});

