/* Created by EFisher on 20/10/2015 10:21:27 using v2.7 */{
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'Has the number of people who finished a course of treatment increased and how successful was the treatment?'
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
            categories: ['2011-12 Q1', '2011-12 Q2', '2011-12 Q3', '2011-12 Q4', '2012-13 Q1', '2012-13 Q2', '2012-13 Q3', '2012-13 Q4', '2013-14 Q1', '2013-14 Q2', '2013-14 Q3', '2013-14 Q4', '2014-15 Q1', '2014-15 Q2', '2014-15 Q3'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: [{
            title: {
                text: 'Number of referrals which finish <br> a course (at least two treatment <br> contacts) in each quarter',
                offset: 99
            }
        }, {
            title: {
                text: 'Percentage of finished treatments <br> where the patient showed <br> reliable improvement',
                offset: 99
            },
            opposite: true
        }



        ],
        series: [{
            name: 'Number of people who finished a course of treatment (left axis)',

            type: 'column',
            data: [75697, 87387, 81753, 86334, 88162, 94990, 95057, 97107, 78642, 86870, 93830, 101816, 110450, 114697, 117813]
        }, {
            name: 'Percentage of people who showed reliable imporvement (right axis)',
            yAxis: 1,
            type: 'line',
            data: [null, null, null, null, null, null, null, null, 58.16, 59.74, 59.33, 59.83, 60.39, 61.27, 60.4]
        }]
    }