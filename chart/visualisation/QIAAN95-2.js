/* Created by ianb on 03/10/2013 16:45:42 using v0.9 */
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
title: {text: 'How has the proportion of cancelled operations changed?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1994/95 Q1','1994/95 Q2','1994/95 Q3','1994/95 Q4','1995/96 Q1','1995/96 Q2','1995/96 Q3','1995/96 Q4','1996/97 Q1','1996/97 Q2','1996/97 Q3','1996/97 Q4','1997/98 Q1','1997/98 Q2','1997/98 Q3','1997/98 Q4','1998/99 Q1','1998/99 Q2','1998/99 Q3','1998/99 Q4','1999/00 Q1','1999/00 Q2','1999/00 Q3','1999/00 Q4','2000/01 Q1','2000/01 Q2','2000/01 Q3','2000/01 Q4','2001/02 Q1','2001/02 Q2','2001/02 Q3','2001/02 Q4','2002/03 Q1','2002/03 Q2','2002/03 Q3','2002/03 Q4','2003/04 Q1','2003/04 Q2','2003/04 Q3','2003/04 Q4','2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Cancelled operations as percentage <br> of elective admissions', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Cancelled operations',
type: 'line',
data: [1.1,0.9,1,1.2,1,1,1.2,1.3,1,0.9,1.1,1.4,1,1,1,1.2,1,0.9,1.1,1.3,0.9,0.9,1.2,1.5,1.3,1.2,1.4,1.8,1.63,1.59,1.51,1.47,1.14,1.09,1.3,1.43,1.06,1.03,1.28,1.39,1.08,1.07,1.25,1.56,1.11,0.88,1.01,1.17,0.9,0.82,0.85,0.91,0.84,0.78,0.97,1.01,0.87,0.79,0.96,1.17,0.83,0.79,0.9,1.1,0.77,0.74,0.98,0.87,0.74,0.72,0.82,0.9,0.8,0.73,0.89,1.11,0.85]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Cancelled operations trendline',
data: [[0, 1.25],[76, 0.9]]
}
]
});
});
