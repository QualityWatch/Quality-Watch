/* Created by NCODowd on 08/07/2016 13:16:45 using v2.7 */
/* Created by EFisher on 17/02/2016 15:31:10 using v2.7 */
/* Created by EFisher on 26/11/2015 09:22:31 using v2.7 */
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
            categories: ['Apr 2011', 'May 2011', 'Jun 2011', 'Jul 2011', 'Aug 2011', 'Sep 2011', 'Oct 2011', 'Nov 2011', 'Dec 2011', 'Jan 2012', 'Feb 2012', 'Mar 2012', 'Apr 2012', 'May 2012', 'Jun 2012', 'Jul 2012', 'Aug 2012', 'Sep 2012', 'Oct 2012', 'Nov 2012', 'Dec 2012', 'Jan 2013', 'Feb 2013', 'Mar 2013', 'Apr 2013', 'May 2013', 'Jun 2013', 'Jul 2013', 'Aug 2013', 'Sep 2013', 'Oct 2013', 'Nov 2013', 'Dec 2013', 'Jan 2014', 'Feb 2014', 'Mar 2014', 'Apr 2014', 'May 2014', 'Jun 2014', 'Jul 2014', 'Aug 2014', 'Sep 2014', 'Oct 2014', 'Nov 2014', 'Dec 2014', 'Jan 2015', 'Feb 2015', 'Mar 2015', 'Apr 2015', 'May 2015', 'Jun 2015', 'Jul 2015', 'Aug 2015', 'Sep 2015', 'Oct 2015', 'Nov 2015', 'Dec 2015', 'Jan 2016','Feb 2016','Mar 2016','Apr 2016'],
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
            name: 'meeting the 8 minute target for responding to category A calls',
            type: 'column',
            data: [12, 11, 9, 11, 11, 10, 10, 12, 5, 12, 2, 9, 11, 7, 11, 11, 12, 10, 11, 9, 2, 8, 6, 4, 8, 10, 9, 5, 6, 6, 6, 3, 5, 8, 5, 7, 7, 4, 4, 1, 4, 5, 2, 2, 1, 2, 3, 4, 4, 6, 3, 3, 2, 3, 2, 3,3,0,0,0,1],
            
                     index: 1
        }, {
            name: 'breaching the 8 minute target for responding to category A calls',
            type: 'column',
            data: [0, 1, 3, 1, 1, 2, 2, 0, 7, 0, 10, 3, 1, 5, 1, 1, 0, 2, 1, 3, 10, 4, 5, 7, 3, 1, 2, 6, 5, 5, 5, 8, 6, 3, 6, 4, 4, 7, 7, 10, 7, 6, 9, 9, 10, 9, 8, 7, 7, 5, 8, 8, 9, 8, 9, 8, 8,11,11,11,10],
            index: 2
        }, {
            name: 'National breach',
            type: 'line',
            data: [null, null, null, null, null, null, null, null, 13, null, 13, null, null, 13, null, null, null, null, null, null, 13, null, null, 13, null, null, null, 13, null, 13, 13, 13, 13, null, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,13,13,13
],
            index: 1
        }]
    }
