/* Created by ianb on 03/10/2013 16:40:04 using v0.9 */
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
title: {text: 'How have admissions for falls changed for older people?'},
credits: {enabled: true, text: '� Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Monthly rate of admissions per 100,000 <br> people (standardised for age and <br> sex)', offset: 99}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Age 65-79',
type: 'line',
data: [61.92,68.09,65.62,66.4,65.85,65,64.56,65.97,73.67,69.49,57.61,65,67.17,69.31,65.12,66.94,69.98,66.51,67.43,65.52,73.24,66.79,64.18,66.18,66.29,69.32,68.04,69.39,69.07,69.11,72.28,68.41,84.68,75.29,72.69,70.07,72.17,73.56,75.19,73,76.74,77.86,77.69,75.5,123.94,101.41,68.87,73,75.32,77.11,76.17,75.04,79.15,77.6,78.64,78.26,121.38,78.43,67.87,73.57,76.37,79,77.39,76.84,78.95,76.39,77.62,77.32,92.45,77.07,75.08,74.51,69.1,77.19,74.47,77.15,78.87,76.88,77.16,75.87,89.3,79.42]
,index: 1
},
{
name: 'Age 80+',
type: 'line',
data: [289.76,305.1,303.03,300.08,318.8,294.23,323.6,327.57,345.04,334.42,291.16,313.43,316.1,325.96,304.7,310.9,337.87,328.55,328.89,326.09,358.24,329.98,318.99,322.58,306.24,326.89,325.9,330.94,338.01,339.49,359.85,344.06,400.13,367.54,321.22,350.06,358.2,374.85,372.51,365.28,373.71,393.52,403.68,388.71,492.17,404,357.59,380.53,391.74,398.98,377.53,378.33,396.97,393.82,427,417.23,463.25,393.46,358.19,393.78,397.18,404.46,392.8,398.88,408.52,406.45,429.89,407.7,464.48,415.58,402.63,394.07,386.89,406.11,393.43,409.7,406.86,423.57,420.33,411.38,449.88,402.68]
,index: 2
}
]
});
});

