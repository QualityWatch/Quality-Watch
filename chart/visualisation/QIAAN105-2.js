/* Created by EFisher on 05/10/2015 15:49:53 using v2.7 */       {
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How long after contacting the surgery did patients actually see or speak to a GP or nurse?'
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
            categories: ['2011/12', '2012/13', 'July 2013 - March 2014', 'July 2014 - March 2015'],
            labels: {}
        },
        yAxis: {
            title: {
                text: 'How long after initially contacting <br> the surgery did patients actually <br> see or speak someone (percentage <br> of patients)',
                offset: 111
            },
            max: 110,
            labels: {
                format: '{value:.1f}',
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
plotOptions: {column: {stacking: 'normal',}},
        series: [{
            name: 'On the same day',
            type: 'column',
            data: [36.3, 36.4,{y:36.8, color:'#3FCFD5'},{y:37.3, color:'#3FCFD5'}],
            index: 4
        }, {
            name: 'On the next working day',
            type: 'column',
            data: [14.2, 13,{y:12.2, color:'#E59AAA'},{y:11.1, color:'#E59AAA'}],
            index: 3
        }, {
            name: 'A few days later',
            type: 'column',
            data: [33.3, 32.7,{y:31.8, color:'#B634BB'},{y:30.2, color:'#B634BB'}],
            index: 2
        }, {
            name: 'A week or more later',
            type: 'column',
            data: [12.8, 14.6,{y:15.9, color:'#CECFCB'},{y:17.9, color:'#CECFCB'}],
            index: 1
        }, {
            name: 'Can\'t remember ',
            type: 'column',
            data: [3.3, 3.3,{y:3.2, color:'#6FFFF5'},{y:3.6, color:'#6FFFF5'}],
            index: 0
        }]
    }