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
                    text: 'How long do patients have to wait to see someone at the GP surgery?'
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
            categories: ['2009/10', '2010/11', '2011/12', '2012/13', 'Jan - Sept 2013'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: {
            title: {
                text: 'Percentage of patients who said <br> the last time they saw or spoke <br> to a GP or nurse they were good <br> at giving them enough time',
                offset: 111
            },
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
        series: [{
            name: 'I don`t normally have to wait too long',
            type: 'column',
            data: [64.3, 61.9, 61.2, 59.5, {y:58.8, color: 'rgba(0,154,166,0.5)'}],
            index: 1
        }, {
            name: 'I have to wait a bit too long',
            type: 'column',
            data: [22.3, 24.2, 24.4, 25.3, {y:25.7, color: 'rgba(225,14,73,0.5)'}],
            index: 2
        }, {
            name: 'I have to wait far too long',
            type: 'column',
            data: [6.8, 6.9, 7.8, 8.6, {y:8.9, color: 'rgba(79,11,123,0.5)'}],
            index: 3
        }]
    }