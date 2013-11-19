{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about experiencing violence from patients or relatives?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},xAxis: {
            title: {
                text: ''
            },
            categories: ['2007', '2008', '2009', '2010', '2011', '2012'],
            labels: {}
        },
        yAxis: {
            title: {
                text: 'Un-weighted percentage of staff <br> reporting that they experienced <br> physical violence from patients/relatives <br> plus or minus SEM',
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
            name: 'National average',
            type: 'column',
            data: [11.3, 10.7, 9.5, 7.1, 6.7, null]
        }, 
{
            name: 'National average 95% confidence interval',
            type: 'errorbar',
            data: [
                [10.9, 11.6],
                [10.3, 11],
                [9.2, 9.9],
                [6.8, 7.4],
                [6.4,6.9]
            ]        },
        {
            name: 'Mental health & learning disability trusts',
            type: 'column',
            data: [21.5, 19.4, 18.1, 15, 12.8, null]
        }, 
        {
            name: 'Mental health & learning disability trusts 95% confidence interval',
            type: 'errorbar',
            data: [[21.2,21.8],
[19.2,19.7],
[17.9,18.4],
[14.7,15.2],
[12.5,13]]
        },                 
                 {
            name: 'National average (after question change)',
            type: 'column',
            data: [null, null, null, null, null, 15.5]
        },
{
            name: 'National average (after question change) 95% confidence interval',
            type: 'errorbar',
            data: [null, null, null, null, null, [15,15.9]]
        },
        {
            name: 'Mental health & learning disability trusts (after question change)',
            type: 'column',
            data: [null, null, null, null, null, 20]
        },
        {
            name: 'Mental health & learning disability trusts (after question change) 95% confidence interval',
            type: 'errorbar',
            data: [null, null, null, null, null, [19.5,20.4]
]
        }                ]
    }
