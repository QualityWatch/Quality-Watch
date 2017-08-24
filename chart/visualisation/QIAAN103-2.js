/* Created by NCODowd on 16/11/2016 16:04:28 using v2.7 */
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
            categories: ['2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1', '2016/17 Q2', '2016/17 Q3', '2016/17 Q4'],
            labels: {
                rotation: -90,
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
                text: 'Percentage spending less<br>than four hours in A&E',   
                x: 20
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
            data: [4.50,4.56,4.37,4.40,4.86,4.74,4.61,4.55,4.89,4.89,4.56,4.58,4.92,4.85,4.70,4.61,4.99,4.93,4.87,4.81,5.29,5.18,5.13,4.91,5.52,5.38,5.25,5.23,5.50,5.34,5.25,5.38,5.59,5.49,5.35,5.31,5.55,5.53,5.29,5.41,5.80,5.60,5.57,5.38,5.71,5.68,5.66,5.87,5.90,5.96,5.85,5.66]
        }, {
            name: 'Type 1 Departments - Major A&E',
            type: 'column',
            data: [3.38,3.38,3.26,3.25,3.52,3.40,3.35,3.28,3.51,3.49,3.31,3.29,3.46,3.40,3.31,3.23,3.42,3.36,3.35,3.30,3.55,3.42,3.42,3.22,3.60,3.50,3.43,3.40,3.59,3.47,3.43,3.53,3.62,3.58,3.55,3.50,3.62,3.59,3.48,3.53,3.77,3.67,3.67,3.48,3.70,3.71,3.73,3.82,3.85,3.89,3.85,3.67]
        }, {
            name: 'Percentage in 4 hours or less (type 1)',
            type: 'line',
            yAxis: 1,
          
            data: [93.1,94.6,95.8,96.4,97.6,98.3,97.6,96.6,97.7,97.9,97.6,96.8,97.6,97.7,96.3,96.5,97.6,98.1,96.4,96.8,98.0,98.1,96.8,96.9,97.7,97.0,94.7,94.8,95.6,95.9,94.5,93.7,94.9,95.4,93.5,91.1,93.4,94.4,93.5,92.7,92.6,92.5,88.9,87.5,91.1,91.4,87.4,81.8,85.4,85.9,81.9,81.4]
        }, {
            name: 'Percentage in 4 hours or less (type 2&3)',
            type: 'line',
            yAxis: 1,
            data: [99.47, 99.62, 99.75, 99.86, 99.9, 99.91, 99.88, 99.89, 99.91, 99.93, 99.91, 99.9, 99.81, 99.91, 99.88, 99.89, 99.87, 99.89, 99.87, 99.86, 99.84, 99.89, 99.89, 99.87, 99.88, 99.87, 99.82, 99.82, 99.84, 99.86, 99.84, 99.83, 99.83, 99.85, 99.83, 99.79, 99.81, 99.83, 99.83, 99.8, 99.74, 99.74, 99.64, 99.67, 99.6, 99.63, 99.52, 99.2, 99.45, 99.47]
        }, {
            name: 'Old target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
            data: [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,null, null, null]
        }, {
            name: 'New target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
            data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95,]
        }]
    }
