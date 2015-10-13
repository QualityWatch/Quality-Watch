/* Created by EFisher on 01/10/2015 11:30:06 using v2.7 */    {
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'Have there been changes in staff reporting being ill due to work related stress?'
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
            categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
            labels: {}
        },
        yAxis: {
            title: {
                text: 'Un-weighted percentage of staff <br> reporting that they had been ill <br> due to work related stress (%)',
                offset: 111
            },
            max: 100,
            labels: {
                format: '{value:.1f}'
            }
        },
        series: [{
            name: 'England',
            type: 'column',
            data: [35.1,34.47,32.45,32.71,28.06,28.31,29.11,30.05,38.16,38.31,37.68]
        }, {
            name: 'eng err',
            type: 'errorbar',
            data: [
                [34.923,35.274],
[34.282,34.66],
[32.214,32.691],
[32.514,32.914],
[27.872,28.254],
[28.126,28.499],
[28.912,29.302],
[29.802,30.29],
[37.855,38.466],
[37.935,38.691],
[37.23,38.135]
            ]
        }, {
            name: 'Acute',
            type: 'column',
            data: [35.89,35.45,31.66,31.81,27.19,27.4,27.93,28.77,36.25,36.28,36.94]
        }, {
            name: 'ac err',
            type: 'errorbar',
            data: [
                [35.731,36.041],
[35.301,35.602],
[31.426,31.885],
[31.603,32.01],
[27.018,27.362],
[27.226,27.578],
[27.764,28.105],
[28.572,28.963],
[36.005,36.504],
[36.052,36.516],
[36.683,37.2]
            ]
        }, {
            name: 'Ambulance',
            type: 'column',
            data: [35.85,34.86,33.07,33.09,29.68,29.11,32.04,33.52,44.46,49.59,50.91]
        }, {
            name: 'amb err',
            type: 'errorbar',
            data: [
                [35.639,36.066],
[34.621,35.091],
[32.789,33.356],
[32.872,33.31],
[29.395,29.969],
[28.911,29.312],
[31.726,32.35],
[33.303,33.745],
[44.113,44.816],
[49.134,50.053],
[50.636,51.183]
            ]
        }, {
            name: 'Mental Health & Learning Disability',
            type: 'column',
            data: [37.42,37.04,33.96,34.01,30.1,30.34,31.33,32.52,41.59,42.77,42.61]
        }, {
            name: 'mh err',
            type: 'errorbar',
            data: [
               [37.257,37.578],
[36.86,37.219],
[33.71,34.201],
[33.822,34.199],
[29.909,30.282],
[30.167,30.518],
[31.117,31.544],
[32.341,32.707],
[41.323,41.855],
[42.518,43.019],
[42.3,42.912]
            ]
        }, {
            name: 'Community',
            type: 'column',
            data: [null,null,null,null,null,null,null,31.01,40.47,42.9,41.69]
        }, {
            name: 'com err',
            type: 'errorbar',
            data: [null,null,null,null,null,null,null,[30.798,31.226],[40.226,40.719],[42.664,43.143],
[41.364,42.019]
            ]
        }]
    }