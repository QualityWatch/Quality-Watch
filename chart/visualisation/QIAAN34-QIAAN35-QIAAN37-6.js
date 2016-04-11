/* Created by NCODowd on 01/04/2016 14:51:52 using v2.7 *//* Created by EFisher on 01/10/2015 11:30:06 using v2.7 */
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
            categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015],
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
            data: [35.098,34.471,32.453,32.714,28.063,28.312,29.107,30.046,38.16,38.313,37.682,35.65]
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
[37.23,38.135],
[35.274,36.025]
            ]
        }, {
            name: 'Acute',
            type: 'column',
            data: [35.886,35.452,31.656,31.807,27.19,27.402,27.935,28.767,36.255,36.284,36.941,35.227]
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
[36.683,37.2],
[34.954,35.499]
            ]
        }, {
            name: 'Ambulance',
            type: 'column',
            data:[35.853,34.856,33.072,33.091,29.682,29.111,32.038,33.524,44.465,49.593,50.91,47.201]
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
[50.636,51.183],
[46.93,47.472]
            ]
        }, {
            name: 'Mental Health & Learning Disability',
            type: 'column',
            data: [37.417,37.039,33.955,34.01,30.095,30.343,31.33,32.524,41.589,42.769,42.606,39.584]
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
[42.3,42.912],
[39.298,39.869]
            ]
        }, {
            name: 'Community',
            type: 'column',
            data: [null,null,null,null,null,null,null,31.012,40.472,42.903,41.691,39.49]
        }, {
            name: 'com err',
            type: 'errorbar',
            data: [null,
null,
null,
null,
null,
null,
null,
[30.798,31.226],
[40.226,40.719],
[42.664,43.143],
[41.364,42.019],
[39.248,39.733]
            ]
        }]
    }