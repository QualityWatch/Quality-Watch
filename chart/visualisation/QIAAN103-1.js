/* Created by JMorris on 15/08/2018 11:49:02 using v2.7 */{        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How has performance against the four-hour A&E target changed over time?'
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
            categories: ['2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2','2016/17 Q3','2016/17 Q4','2017/18 Q1','2017/18 Q2','2017/18 Q3','2017/18 Q4','2018/19 Q1'],
            labels: {
                rotation: -45,
                step: 2
            }
        },
        yAxis: [{
            title: {
                text: 'Number of attendances (millions)'
            },
           min: 0,
            max: 10,
          tickInterval: 2,
            labels: {
                format: '{value:.0f}'
            }
        }, {
            title: {
                text: 'Percentage of patients spending <br> <4 hours in A&E',
  offset: 55,             },
            opposite: true,
            min: 50,
            max: 100,
            tickInterval: 10,
            labels: {
                format: '{value:.0f}',
                formatter: function () {
                    return this.value + '%';
                     }
            }
        }],
        plotOptions: {    
    column: {           
    stacking: 'normal',
       groupPadding: 0.5,   // Exactly overlap
        pointWidth: 10                                     
    }
},
        series: [{
            name: 'A&E attendances (type 2 & 3)',
            type: 'column',
            data:
[1.57,1.57,1.51,1.51,1.75,1.76,1.70,1.69,1.92,1.87,1.82,1.83,1.92,1.88,1.82,1.86,1.96,1.91,1.81,1.81,1.93,1.94,1.82,1.88,2.03,1.93,1.91,1.90,2.01,1.97,1.93,2.05,2.05,2.08,2.00,1.97,2.11,2.06,2.13,2.16,2.31], color: '#3FCFD5'
        }, {
            name: 'A&E attendances (type 1)',
            type: 'column',
            data:[3.42,3.36,3.35,3.30,3.55,3.42,3.42,3.22,3.60,3.50,3.43,3.40,3.59,3.47,3.43,3.53,3.62,3.58,3.55,3.50,3.62,3.59,3.48,3.53,3.77,3.67,3.67,3.48,3.70,3.71,3.73,3.82,3.85,3.89,3.85,3.67,3.90,3.87,3.90,3.71,3.92], color: '#E59AAA'
        }, {
         tooltip: {
            valueSuffix: '%'},
            name: 'Percentage in 4 hours or less (type 1)',
            type: 'line',
                marker:{enabled:false},
            yAxis: 1,
          
            data: [97.6, 98.1, 96.4, 96.8, 98.0, 98.1, 96.8, 96.9, 97.7, 97.0, 94.7, 94.8, 95.6, 95.9, 94.5, 93.7, 94.9, 95.4, 93.5, 91.1, 93.4, 94.4, 93.5, 92.7, 92.6, 92.5, 88.9, 87.5, 91.1, 91.4, 87.4, 81.8, 85.4, 85.9, 81.9, 81.4, 85.5, 85.2, 81.7, 76.8, 84.4], color: '#E10E49'
        }, {
         tooltip: {
            valueSuffix: '%'},
            name: 'Percentage in 4 hours or less (type 2 & 3)',
            type: 'line',
                marker:{enabled:false},
            yAxis: 1,
            data: [99.9, 99.9, 99.9, 99.9, 99.8, 99.9, 99.9, 99.9, 99.9, 99.9, 99.8, 99.8, 99.8, 99.9, 99.8, 99.8, 99.8, 99.9, 99.8, 99.8, 99.8, 99.8, 99.8, 99.8, 99.7, 99.7, 99.6, 99.7, 99.6, 99.6, 99.5, 99.2, 99.4, 99.5, 99.4, 99.3, 99.2, 99.4, 99.2, 99.0, 99.2], color: '#009AA6'
        }, {
         tooltip: {
            valueSuffix: '%'},
            name: 'Old target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
               dashStyle:'Dash',
            marker:{enabled:false},
            data: [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,null, null, null, null, null,null,null,null, null], color: '#6C6F70'
        }, {
         tooltip: {
            valueSuffix: '%'},
            name: 'New target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
               dashStyle:'Dash',
            marker:{enabled:false},
            data: [null, null, null, null, null, null, null, null, null, null, null, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95,95, 95, 95, 95,95,95,95], color: '#4F0B7B'
        }]
    }