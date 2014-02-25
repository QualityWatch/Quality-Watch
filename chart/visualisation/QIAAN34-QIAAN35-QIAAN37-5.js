﻿/* Created by Ian on 14/02/2014 11:25:25 using v2.0 */    {
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How has the number of staff feeling pressured to work when unwell changed by sector?'
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
            categories: [2009, 2010, 2011, 2012],
            labels: {}
        },
        yAxis: {
            title: {
                text: 'Un-weighted percentage of staff <br> reporting feeling pressure to attend <br> work when feeling unwell in last <br> 3 months ± SEM',
                offset: 111
            },
            max: 40,
            min: 0,
            labels: {}
        },
        series: [{
            name: 'Acute',
            type: 'column',
            data: [25.4, 25.91, 25.89, 28.46],
            index: 1
        }, {
            name: 'Acute error',
            type: 'errorbar',
            data: [
                [25.24, 25.57],
                [25.72, 26.1],
                [25.69, 26.1],
                [28.22, 28.69]
            ]
        }, {
            name: 'Ambulance',
            type: 'column',
            data: [30.48, 32.25, 34.69, 38.08],
            index: 2
        }, {
            name: 'Amb error',
            type: 'errorbar',
            data: [
                [30.2, 30.75],
                [31.87, 32.63],
                [34.36, 35.02],
                [37.75, 38.41]
            ]
        }, {
            name: 'MH&LD',
            type: 'column',
            data: [18.49, 19.18, 19.71, 22.09],
            index: 3
        }, {
            name: 'MH error',
            type: 'errorbar',
            data: [
                [18.26, 18.71],
                [18.93, 19.42],
                [19.5, 19.92],
                [21.83, 22.35]
            ], index: 3
        }, {
            name: 'Community trusts',
            type: 'column',
            data: [0, 0, 21.81, 26.16],
            index: 4
        }, {
            name: 'Community error',
            type: 'errorbar',
            data: [
                [0, 0],
                [0, 0],
                [21.64, 21.98],
                [25.97, 26.34]
            ]
        }]
    }
