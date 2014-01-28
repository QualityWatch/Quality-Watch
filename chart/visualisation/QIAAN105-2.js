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
            categories: ['2011/12', '2012/13', 'Jan - Sept 2013'],
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
            data: [36.3, 36.4,  {y: 36.7, color:'rgba(0,154,166, 0.5)'}],
            index: 4
        }, {
            name: 'On the next working day',
            type: 'column',
            data: [14.2, 13, {y: 12.6, color:'rgba(225,14,73, 0.5)'}],
            index: 3
        }, {
            name: 'A few days later',
            type: 'column',
            data: [33.3, 32.7, {y: 32.3, color:'rgba(79,11,123, 0.5)'}],
            index: 2
        }, {
            name: 'A week or more later',
            type: 'column',
            data: [12.8, 14.6, {y: 15.2, color:'rgba(108,111,112, 0.5)'}],
            index: 1
        }, {
            name: 'Can\'t remember ',
            type: 'column',
            data: [3.3, 3.3, {y: 3.3, color:'rgba(63,207,213, 0.5)'}],
            index: 0
        }]
    }
