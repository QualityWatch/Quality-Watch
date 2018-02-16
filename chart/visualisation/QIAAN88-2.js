/* Created by EFisher on 20/12/2017 15:10:37 using v2.7 */{
        title: {
            text: 'Number of Category A ambulance calls responded to within 8 minutes in Ambulance Trusts in England'
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'How have the number of calls resulting in an emergency response changed over time?'
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
            categories: ['Apr-11', 'May-11', 'Jun-11', 'Jul-11', 'Aug-11', 'Sep-11', 'Oct-11', 'Nov-11', 'Dec-11', 'Jan-12', 'Feb-12', 'Mar-12', 'Apr-12', 'May-12', 'Jun-12', 'Jul-12', 'Aug-12', 'Sep-12', 'Oct-12', 'Nov-12', 'Dec-12', 'Jan-13', 'Feb-13', 'Mar-13', 'Apr-13', 'May-13', 'Jun-13', 'Jul-13', 'Aug-13', 'Sep-13', 'Oct-13', 'Nov-13', 'Dec-13', 'Jan-14', 'Feb-14', 'Mar-14', 'Apr-14', 'May-14', 'Jun-14', 'Jul-14', 'Aug-14', 'Sep-14', 'Oct-14', 'Nov-14', 'Dec-14', 'Jan-15', 'Feb-15', 'Mar-15', 'Apr-15', 'May-15', 'Jun-15', 'Jul-15', 'Aug-15', 'Sep-15', 'Oct-15', 'Nov-15', 'Dec-15', 'Jan-16', 'Feb-16', 'Mar-16'],
            labels: {
                rotation: -45,
                step: 2
            }
        },
                tooltip: {
            shared: true
        },
        yAxis: [{
            title: {
                text: 'Monthly number of calls'
            },
            max: 400000,
            labels: {}
        }, {
            title: {
                text: 'Percentage within eight minutes'
            },
            min: 0,
            max: 80,
            opposite: true,
            labels: {}
        }],
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Percentage',
            type: 'line',
            yAxis: 1,
            data: [76.9, 77, 75.5, 76.6, 77.5, 75.7, 76, 77.1, 74.1, 77.9, 73.9, 75.5, 76.2, 74.8, 77.4, 77.3, 78, 75.8, 76.4, 75.9, 70.8, 75.6, 75.3, 73.8, 76, 77.8, 77.1, 74.1, 75.5, 73.9, 73.7, 73.1, 71.8, 76.4, 74.1, 74.8, 73.8, 72.6, 70.8, 68.9, 71.1, 70.1, 70, 68.6, 61.3, 67.8, 67.8, 69.8, 72.5, 73.4, 71.5, 70.7, 69.9, 69, 69, 67.6, 67.5, 63.7, 60.7, 58.4]
        }, {
            name: 'Eight minute target',
            type: 'line',
            yAxis: 1,
            markers: {enabled: false},
            data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75]
        }, {
            name: 'Number category A',
            type: 'column',
            yAxis: 0,
            data: [194617, 200706, 196613, 205952, 197883, 201988, 217997, 208380, 235387, 223779, 216615, 228985, 215997, 225609, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            name: 'Number red 1',
            type: 'column',
                 yAxis: 0,
                 data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 10453, 10860, 11053, 11171, 11117, 11254, 13360, 11958, 10841, 12306, 11147, 10873, 10207, 11328, 11399, 10679, 11156, 11095, 12849, 11915, 10763, 11829, 12546, 12860, 12438, 13278, 12629, 11792, 13837, 14045, 17080, 15950, 13360, 14663, 13874, 13781, 13351, 13909, 13764, 13398, 14774, 14487, 16224, 16281, 15012, 16190]
        }, {
            name: 'Number red 2',
            type: 'column',
                 yAxis: 0,
                 data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 203988, 211754, 204238, 202751, 216511, 214057, 244519, 225511, 205301, 236512, 224352, 224842, 214799, 228733, 221441, 216928, 233469, 227179, 249721, 234247, 218545, 242633, 234828, 249806, 241341, 248837, 235963, 236520, 250699, 251173, 287063, 258025, 228604, 252615, 237497, 246751, 242781, 252230, 254085, 248096, 266885, 268589, 289264, 293531, 276978, 305227
]
        }]
    }