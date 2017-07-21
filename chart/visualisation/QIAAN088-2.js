/* Created by EFisher on 12/10/2015 14:31:20 using v2.7 */
{
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
            categories: ['May-2011', 'Apr-2011', 'Jun-2011', 'Jul-2011', 'Aug-2011', 'Sep-2011', 'Oct-2011', 'Nov-2011', 'Dec-2011', 'Jan-2012', 'Feb-2012', 'Mar-2012', 'Apr-2012', 'May-2012', 'Jun-2012', 'Jul-2012', 'Aug-2012', 'Sep-2012', 'Oct-2012', 'Nov-2012', 'Dec-2012', 'Jan-2013', 'Feb-2013', 'Mar-2013', 'Apr-2013', 'May-2013', 'Jun-2013', 'Jul-2013', 'Aug-2013', 'Sep-2013', 'Oct-2013', 'Nov-2013', 'Dec-2013', 'Jan-2014', 'Feb-2014', 'Mar-2014', 'Apr-2014', 'May-2014', 'Jun-2014', 'Jul-2014', 'Aug-2014', 'Sep-2014', 'Oct-2014', 'Nov-2014', 'Dec-2014', 'Jan-2015', 'Feb-2015', 'Mar-2015', 'Apr-2015', 'May-2015', 'Jun-2015', 'Jul-2015', 'Aug-2015', 'Sep-2015', 'Oct-2015', 'Nov-2015', 'Dec-2015', 'Jan-2016','Feb-2016','Mar-2016','April-2016','May-2016','Jun-2016','Jul-2016','Aug-2016',
'Sep-2016', 'Oct 2016', 'Nov 2016', 'Dec 2016', 'Jan 2017', 'Feb 2017', 'Mar 2017','Apr 2017'],
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
            max: 500000,
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
            data: [76.97, 76.91, 75.47, 76.62, 77.54, 75.71, 76.03, 77.12, 74.11, 77.87, 73.87, 75.52, 76.22, 74.76, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,null,null,null,null,null,null,null,null]
        }, {
            name: 'Eight minute target',
            type: 'line',
            yAxis: 1,
            markers: {enabled: false},
            data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75]
        }, {
            name: 'Number category A',
            type: 'column',
            data: [194617, 200706, 196613, 205952, 197883, 201988, 217997, 208380, 235387, 223779, 216615, 228985, 215997, 225609, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        }, {
            name: 'Number red 1',
            type: 'column',
            data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,10453,10860,11053,11171,11117,11254,13360,11958,10841,12306,11147,10873,10207,11328,11399,10679,11156,11095,12849,11915,10763,11829,12546,12860,12438,13278,12629,11792,13837,14045,17080,15950,13360,14663,13874,13781,13351,13909,13764,13398,14774,14487,16224,16281,15012,16190,13458,11517,9791,10081,9430,9433,10775,10805,12873,12602,10735,11454,11622]
        }, {
            name: 'Number red 2',
            type: 'column',
            data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,203988,211754,204238,202751,216511,214057,244519,225511,205301,236512,224352,224842,214799,228733,221441,216928,233469,227179,249721,234247,218545,242633,234828,249806,241341,248837,235963,236520,250699,251173,287063,258025,228604,252615,237497,246751,242781,252230,254085,248096,266885,268589,289264,293531,276978,305227,249055,229268,200600,203432,190483,193874,206951,202292,228904,221633,189613,203810,192756
]
        }]
    }
