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
            categories: ['Apr 2011', 'May 2011', 'Jun 2011', 'Jul 2011', 'Aug 2011', 'Sep 2011', 'Oct 2011', 'Nov 2011', 'Dec 2011', 'Jan 2012', 'Feb 2012', 'Mar 2012', 'Apr 2012', 'May 2012', 'Jun 2012', 'Jul 2012', 'Aug 2012', 'Sep 2012', 'Oct 2012', 'Nov 2012', 'Dec 2012', 'Jan 2013', 'Feb 2013', 'Mar 2013','Apr 2013', 'May 2013', 'Jun 2013', 'Jul 2013', 'Aug 2013', 'Sep 2013', 'Oct 2013', 'Nov 2013', 'Dec 2013', 'Jan 2014', 'Feb 2014', 'Mar 2014'    ,   'Apr 2014', 'May 2014', 'Jun 2014', 'Jul 2014', 'Aug 2014', 'Sep 2014', 'Oct 2014'   
                        
                        ],
            labels: {
                rotation: -90,
                step: 1
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
            max: 100,
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
            data: [76.91,76.97,75.47,76.62,77.54,75.71,76.03,77.12,74.11,77.87,73.87,75.52,76.22,74.76,77.43,77.32,77.97,75.85,76.4,75.88,70.77,75.64,75.28,73.75,75.98,77.82,77.09,74.11,75.39,73.87,73.67,73.06,71.77,76.35,74.09,74.81,73.68,72.58,70.77,68.85, 71.03, 70.10, 69.91]
        }, {
            name: 'Eight minute target',
            type: 'line',
            yAxis: 1,
            markers: {enabled: false},
            data: [75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75, 75, 75, 75]
        }, {
            name: 'Number category A',
            type: 'column',
            data: [194617, 200706, 196613, 205952, 197883, 201988, 217997, 208380, 235387, 223779, 216615, 228985, 215997, 225609]
        }, {
            name: 'Number red 1',
            type: 'column',
            data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 10453, 10860, 11053, 11171, 11117, 11254, 13360, 11958, 10841, 12306, 11147, 10873, 10207, 11328, 11399, 10679, 11156, 11095, 12849, 11915, 10763, 11829, 12053, 12840, 12439, 13283, 12632, 11793, 13830]
        }, {
            name: 'Number red 2',
            type: 'column',
            data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 203988, 211754, 204238, 202751, 216511, 214057, 244519, 225511, 205301, 236512, 224352, 224842, 214799, 228733, 221441, 216928, 233469, 227179, 249721, 234247, 218545, 242633, 235255, 249815, 240914, 248827, 235961, 236540, 250544]
        }]
    }