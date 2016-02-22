/* Created by EFisher on 17/02/2016 09:45:36 using v2.7 *//* Created by EFisher on 25/11/2015 14:15:13 using v2.7 */
/* Created by EFisher on 01/10/2015 13:38:31 using v2.7 */
{
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How has the number of people spending more than four hours in A&E changed?'
                },
                credits: {
                    enabled: true,
                    text: 'Copyright Nuffield Trust & The Health Foundation',
                    href: 'http://www.qualitywatch.org.uk'
                }
            }
        },
        xAxis: {
            title: {
                text: ''
            },
            categories: ['2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3'],
            labels: {
                rotation: -45,
                step: 2
            }
        },
        yAxis: [{
            title: {
                text: 'Number of attendances (millions)'
            },
           min: 2,
            max: 10,
          tickInterval: 2,
            labels: {
                format: '{value:.0f}'
            }
        }, {
            title: {
                text: 'Percentage spending less<br>than four hours in A&E'
            },
            opposite: true,
            min: 60,
            max: 100,
            tickInterval: 10,
            labels: {
                format: '{value:.0f}'
            }
        }],
        plotOptions: {
                    

    column: {           
       groupPadding: 0.5,   // Exactly overlap
        pointWidth: 10                                     
    }
},
        series: [{
            name: 'Total attendances',
            type: 'column',
            data: [4.502578, 4.556695, 4.374927, 4.40298, 4.859578, 4.744255, 4.605971, 4.54936, 4.891724, 4.892182, 4.559139, 4.57923, 4.924326, 4.84767, 4.698115, 4.60672, 4.987454, 4.930216, 4.86513, 4.805544, 5.291643, 5.180582, 5.126374, 4.913309, 5.523833, 5.375808, 5.25072, 5.230624, 5.501737, 5.344832, 5.253575, 5.381258, 5.587707, 5.493644, 5.351447, 5.305839, 5.554127, 5.525151, 5.294269, 5.40511, 5.7979, 5.604239, 5.573821, 5.378821, 5.712178, 5.664613, 5.665001]
        }, {
            name: 'Type 1 Departments - Major A&E',
            type: 'column',
            data: [3.37785, 3.381219, 3.257398, 3.249353, 3.520931, 3.403089, 3.346995, 3.282671, 3.50977, 3.49334, 3.30721, 3.292269, 3.463473, 3.398518, 3.305734, 3.22755, 3.419655, 3.360077, 3.351352, 3.295052, 3.546638, 3.42485, 3.422855, 3.223957, 3.598903, 3.503757, 3.42635, 3.402705, 3.586381, 3.469728, 3.432578, 3.525235, 3.623761, 3.582519, 3.545721, 3.500067, 3.620189, 3.58845, 3.47648, 3.528029, 3.765239, 3.67235, 3.66575, 3.481397, 3.702458, 3.700343, 3.73066]
        }, {
            name: 'Percentage in 4 hours or less (type 1)',
            type: 'line',
            yAxis: 1,
          
            data: [93.13, 94.6, 95.8, 96.43, 97.62, 98.32, 97.56, 96.57, 97.73, 97.9, 97.59, 96.78, 97.6, 97.7, 96.34, 96.46, 97.63, 98.1, 96.43, 96.76, 97.97, 98.13, 96.82, 96.9, 97.65, 97.02, 94.72, 94.83, 95.56, 95.9, 94.49, 93.68, 94.91, 95.39, 93.54, 91.14, 93.44, 94.36, 93.46, 92.69, 92.58, 92.48, 88.88, 87.51, 91.11, 91.38, 87.39]
        }, {
            name: 'Percentage in 4 hours or less (type 2&3)',
            type: 'line',
            yAxis: 1,
            data: [99.47, 99.62, 99.75, 99.86, 99.9, 99.91, 99.88, 99.89, 99.91, 99.93, 99.91, 99.9, 99.81, 99.91, 99.88, 99.89, 99.87, 99.89, 99.87, 99.86, 99.84, 99.89, 99.89, 99.87, 99.88, 99.87, 99.82, 99.82, 99.84, 99.86, 99.84, 99.83, 99.83, 99.85, 99.83, 99.79, 99.81, 99.83, 99.83, 99.8, 99.74, 99.74, 99.64, 99.67, 99.6, 99.63, 99.52]
        }, {
            name: 'Old target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
            data: [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        }, {
            name: 'New target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
            data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95]
        }]
    }