/* Created by NCODowd on 28/06/2016 16:01:48 using v2.7 */
/* Created by EFisher on 20/10/2015 16:11:46 using v2.7 */
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
                    text: 'How have waiting times after an urgent referral changed for suspected breast cancer?'
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
            categories: ['2012/13 Q1', '2012/13 Q2', '2012/13 Q3', '2012/13 Q4', '2013/14 Q1', '2013/14 Q2', '2013/14 Q3', '2013/14 Q4', '2014/15 Q1', '2014/15 Q2', '2014/15 Q3', '2014/15 Q4', '2015/16 Q1', '2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2','2016/17 Q3','2016/17 Q4'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: [{
            min: 0,
            max:80000,
            title: {
                text: 'Number of people with an urgent <br> referral for suspected breast cancer',
                offset: 87},
        labels: {format: '{value:.0f}'}
        },
        {
            min: 60,
            max: 100,
            title: {
                text: 'Percentage'
            },
            labels: {
                format: '{value:.0f}'
            },
            opposite: true
        }],


    tooltip: {
        shared: true
    },
    series: [{
        name: 'Number of people',
        type: 'column',
        data: [53362,51514,58966,56203,58535,60969,62868,70187,71876,66717,69133,68114,76026,79832,80572,77356,84399,77544,81291,88070]
    }, {
        name: 'Number of people seen within 2 weeks',
        type: 'column',
        data: [51853,50197,57408,54623,56666,58543,60825,67295,66368,63402,66801,65569,71926,74877,76731,74379,79390,74277,78893,83578]
    }, {
        name: 'Percentage seen within 2 weeks',
        type: 'line',
        yAxis: 1,
        data: [97.2,97.4,97.4,97.2,96.8,96.0,96.8,95.9,92.3,95.0,96.6,96.3,94.6,93.8,95.2,96.2,94.1,95.8,97.1,94.9]
    }]
    }
