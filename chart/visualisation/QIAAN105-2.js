/* Created by NCODowd on 08/09/2016 18:06:20 using v2.7 *//* Created by EFisher on 05/10/2015 15:49:53 using v2.7 */
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
            categories: ['2011/12', '2012/13', '2013/14', '2014/15', '2015/16'],
            labels: {}
        },
        yAxis: {
            title: {
                text: 'How long after initially contacting <br> the surgery did patients actually <br> see or speak someone (percentage <br> of patients)',
                offset: 111
            },
            max: 100,
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
            data: [36.3, 36.4, 36.8, 37.3, 37.6],
            index: 4
        }, {
            name: 'On the next working day',
            type: 'column',
            data: [14.2, 13.0, 12.2, 11.1, 10.7],
            index: 3
        }, {
            name: 'A few days later',
            type: 'column',
            data: [33.3, 32.7, 31.8, 30.2, 29.3],
            index: 2
        }, {
            name: 'A week or more later',
            type: 'column',
            data: [12.8, 14.6, 15.9, 17.9, 18.6],
            index: 1
        }, {
            name: 'Can\'t remember ',
            type: 'column',
            data: [3.3, 3.3, 3.2, 3.6, 3.8],
            index: 0
        }]
    }