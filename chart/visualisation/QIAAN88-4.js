/* Created by EFisher on 20/12/2017 15:30:08 using v2.7 */{
        title: {
            text: 'Number of Ambulance Trusts in England meeting the 8 minute target for responding to Category A ambulance calls'
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How have trusts breaching the 8 minute target for Red 1 and 2 calls changed over time?'
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
            categories: ['Apr-11', 'May-11', 'Jun-11', 'Jul-11', 'Aug-11', 'Sep-11', 'Oct-11', 'Nov-11', 'Dec-11', 'Jan-12', 'Feb-12', 'Mar-12', 'Apr-12', 'May-12', 'Jun-12', 'Jul-12', 'Aug-12', 'Sep-12', 'Oct-12', 'Nov-12', 'Dec-12', 'Jan-13', 'Feb-13', 'Mar-13', 'Apr-13', 'May-13', 'Jun-13', 'Jul-13', 'Aug-13', 'Sep-13', 'Oct-13', 'Nov-13', 'Dec-13', 'Jan-14', 'Feb-14', 'Mar-14', 'Apr-14', 'May-14', 'Jun-14', 'Jul-14', 'Aug-14', 'Sep-14', 'Oct-14', 'Nov-14', 'Dec-14', 'Jan-15', 'Feb-15', 'Mar-15', 'Apr-15', 'May-15', 'Jun-15', 'Jul-15', 'Aug-15', 'Sep-15', 'Oct-15', 'Nov-15', 'Dec-15', 'Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16', 'Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17', 'Jul-17', 'Aug-17', 'Sep-17'],
            labels: {
                rotation: -45,
                step: 2
            }
        },
        yAxis: {
            title: {
                text: 'Number of trusts '
            },
            max: 14,
            labels: {}
        },
        plotOptions: {
                column: {
                    stacking: 'normal'}},
        series: [{
            name: 'met',
            type: 'column',
            data:[12, 11, 9, 11, 11, 10, 10, 12, 5, 12, 2, 9, 11, 7, 11, 11, 12, 10, 11, 9, 2, 8, 6, 4, 8, 10, 9, 5, 6, 6, 6, 3, 5, 8, 5, 7, 7, 4, 4, 1, 4, 5, 2, 2, 1, 2, 3, 4, 3, 5, 3, 3, 2, 3, 2, 3, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            
                     index: 1
        }, {
            name: 'Not met',
            type: 'column',
            data: [0, 1, 3, 1, 1, 2, 2, 0, 7, 0, 10, 3, 1, 5, 1, 1, 0, 2, 1, 3, 10, 4, 5, 7, 3, 1, 2, 6, 5, 5, 5, 8, 6, 3, 6, 4, 4, 7, 7, 10, 7, 6, 9, 9, 10, 9, 8, 7, 8, 6, 8, 8, 9, 8, 9, 8, 8, 11, 11, 11, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 7, 8, 7, 8, 8, 8, 6, 6],
            index: 2
        }, {
            name: 'National breach',
            type: 'line',
            data: [null, null, null, null, null, null, null, null, 13, null, 13, null, null, 13, null, null, null, null, null, null, 13, null, null, 13, null, null, null, 13, null, 13, 13, 13, 13, null, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
            index: 1
        }] }