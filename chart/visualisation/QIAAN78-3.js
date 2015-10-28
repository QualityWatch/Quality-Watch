/* Created by EFisher on 20/10/2015 16:11:46 using v2.7 */    {
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
            categories: ['2012/13 Q1', '2012/13 Q2', '2012/13 Q3', '2012/13 Q4', '2013/14 Q1', '2013/14 Q2', '2013/14 Q3', '2013/14 Q4', '2014/15 Q1', '2014/15 Q2', '2014/15 Q3', '2014/15 Q4', '2015/16 Q1'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Number of people with an urgent <br> referral for suspected breast cancer',
                offset: 87},
        labels: {format: '{value:.1f}'}
        },
        {
            max: 100,
            title: {
                text: 'Percentage'
            },
            labels: {
                format: '{value:.1f}'
            },
            opposite: true
        }],


    tooltip: {
        shared: true
    },
    series: [{
        name: 'Number of people',
        type: 'column',
        data: [53362, 51514, 58966, 56203, 58535, 60969, 62868, 70187, 71876, 66717, 69133, 68114, 76026]
    }, {
        name: 'Number of people seen within 2 weeks',
        type: 'column',
        data: [51853, 50197, 57408, 54623, 56666, 58543, 60825, 67295, 66368, 63402, 66801, 65569, 71926]
    }, {
        name: 'Percentage seen within 2 weeks',
        type: 'line',
        yAxis: 1,
        data: [97.17, 97.44, 97.36, 97.19, 96.81, 96.02, 96.75, 95.88, 92.34, 95.03, 96.63, 96.26, 94.61]
    }]
    }