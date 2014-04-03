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
            categories: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
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
            data: [35.1, 34.5, 32.5, 32.7, 28.1, 28.3, 29.1, 30, 38.2, 38.3]
        }, {
            name: 'eng err',
            type: 'errorbar',
            data: [
                [34.754, 35.442],
                [34.471, 34.471],
                [32.453, 32.453],
                [32.714, 32.714],
                [28.063, 28.063],
                [27.947, 28.678],
                [28.724, 29.489],
                [29.568, 30.524],
                [37.561, 38.759],
                [37.572, 39.054]
            ]
        }, {
            name: 'Acute',
            type: 'column',
            data: [35.9, 35.5, 31.7, 31.8, 27.2, 27.4, 27.9, 28.8, 36.3, 36.3]
        }, {
            name: 'ac err',
            type: 'errorbar',
            data: [
                [35.582, 36.19],
                [35.157, 35.746],
                [31.205, 32.106],
                [31.408, 32.206],
                [26.853, 27.528],
                [27.056, 27.747],
                [27.6, 28.269],
                [28.384, 29.15],
                [35.765, 36.744],
                [35.815, 36.754]
            ]
        }, {
            name: 'Ambulance',
            type: 'column',
            data: [35.8, 34.8, 33.1, 33.1, 29.7, 29.1, 32, 33.5, 44.5, 49.6]
        }, {
            name: 'amb err',
            type: 'errorbar',
            data: [
                [35.393, 36.244],
                [34.345, 35.281],
                [32.516, 33.628],
                [32.662, 33.52],
                [29.119, 30.244],
                [28.719, 29.504],
                [31.427, 32.649],
                [33.091, 33.957],
                [43.776, 45.153],
                [48.664, 50.523]
            ]
        }, {
            name: 'Mental Health & Learning Disability',
            type: 'column',
            data: [37.4, 37, 34, 34.1, 30.1, 30.3, 31.3, 32.5, 41.6, 42.8]
        }, {
            name: 'mh err',
            type: 'errorbar',
            data: [
                [37.094, 37.723],
                [36.674, 37.377],
                [33.541, 34.503],
                [33.717, 34.457],
                [29.73, 30.46],
                [29.999, 30.686],
                [30.913, 31.748],
                [32.166, 32.882],
                [41.068, 42.11],
                [42.262, 43.275]
            ]
        }, {
            name: 'Community',
            type: 'column',
            data: [null, null, null, null, null, null, null, 31, 40.5, 42.9]
        }, {
            name: 'com err',
            type: 'errorbar',
            data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null, [30.592, 31.432],
                [39.988, 40.956],
                [42.42, 43.387]
            ]
        }]
    }