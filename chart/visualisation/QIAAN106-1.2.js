/* Created by NCODowd on 09/09/2016 09:08:01 using v2.7 */{
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
            categories: ['2011/12', '2012/13', '2013/14', '2014/15','2015/16'],
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
            data: [61.2,59.5,58.3,57.7,57.7],
            index: 1
        }, {
            name: 'I have to wait a bit too long',
            type: 'column',
            data: [24.4,25.3,25.9,25.1,24.9],
            index: 2
        }, {
            name: 'I have to wait far too long',
            type: 'column',
            data: [7.8,8.6,9.2,9.4,9.0],
            index: 3
        }]
    }