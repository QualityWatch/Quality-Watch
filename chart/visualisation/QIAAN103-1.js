/* Created by ianb on 21/07/2014 16:45:27 using v2.1 */
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
                    text: 'How long to people wait to move to a hospital ward?'
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
            categories: ['Nov 2010', 'Nov 2010', 'Nov 2010', 'Nov 2010', 'Dec 2010', 'Dec 2010', 'Dec 2010', 'Dec 2010', 'Jan 2011', 'Jan 2011', 'Jan 2011', 'Jan 2011', 'Jan 2011', 'Feb 2011', 'Feb 2011', 'Feb 2011', 'Feb 2011', 'Mar 2011', 'Mar 2011', 'Mar 2011', 'Mar 2011', 'Apr 2011', 'Apr 2011', 'Apr 2011', 'Apr 2011', 'May 2011', 'May 2011', 'May 2011', 'May 2011', 'May 2011', 'Jun 2011', 'Jun 2011', 'Jun 2011', 'Jun 2011', 'Jul 2011', 'Jul 2011', 'Jul 2011', 'Jul 2011', 'Jul 2011', 'Aug 2011', 'Aug 2011', 'Aug 2011', 'Aug 2011', 'Sep 2011', 'Sep 2011', 'Sep 2011', 'Sep 2011', 'Oct 2011', 'Oct 2011', 'Oct 2011', 'Oct 2011', 'Oct 2011', 'Nov 2011', 'Nov 2011', 'Nov 2011', 'Nov 2011', 'Dec 2011', 'Dec 2011', 'Dec 2011', 'Dec 2011', 'Jan 2012', 'Jan 2012', 'Jan 2012', 'Jan 2012', 'Jan 2012', 'Feb 2012', 'Feb 2012', 'Feb 2012', 'Feb 2012', 'Mar 2012', 'Mar 2012', 'Mar 2012', 'Mar 2012', 'Apr 2012', 'Apr 2012', 'Apr 2012', 'Apr 2012', 'Apr 2012', 'May 2012', 'May 2012', 'May 2012', 'May 2012', 'Jun 2012', 'Jun 2012', 'Jun 2012', 'Jun 2012', 'Jul 2012', 'Jul 2012', 'Jul 2012', 'Jul 2012', 'Jul 2012', 'Aug 2012', 'Aug 2012', 'Aug 2012', 'Aug 2012', 'Sep 2012', 'Sep 2012', 'Sep 2012', 'Sep 2012', 'Sep 2012', 'Oct 2012', 'Oct 2012', 'Oct 2012', 'Oct 2012', 'Nov 2012', 'Nov 2012', 'Nov 2012', 'Nov 2012', 'Dec 2012', 'Dec 2012', 'Dec 2012', 'Dec 2012', 'Dec 2012', 'Jan 2013', 'Jan 2013', 'Jan 2013', 'Jan 2013', 'Feb 2013', 'Feb 2013', 'Feb 2013', 'Feb 2013', 'Mar 2013', 'Mar 2013', 'Mar 2013', 'Mar 2013', 'Mar 2013', 'Apr 2013', 'Apr 2013', 'Apr 2013', 'Apr 2013', 'May 2013', 'May 2013', 'May 2013', 'May 2013', 'Jun 2013', 'Jun 2013', 'Jun 2013', 'Jun 2013', 'Jun 2013', 'Jul 2013', 'Jul 2013', 'Jul 2013', 'Jul 2013', 'Aug 2013', 'Aug 2013', 'Aug 2013', 'Aug 2013', 'Sep 2013', 'Sep 2013', 'Sep 2013', 'Sep 2013', 'Sep 2013', 'Oct 2013', 'Oct 2013', 'Oct 2013', 'Oct 2013', 'Nov 2013', 'Nov 2013', 'Nov 2013', 'Nov 2013', 'Dec 2013', 'Dec 2013', 'Dec 2013', 'Dec 2013', 'Dec 2013', 'Jan 2014', 'Jan 2014', 'Jan 2014', 'Jan 2014', 'Feb 2014', 'Feb 2014', 'Feb 2014', 'Feb 2014', 'Mar 2014', 'Mar 2014', 'Mar 2014', 'Mar 2014', 'Mar 2014', 'Apr 2014', 'Apr 2014', 'Apr 2014', 'Apr 2014', 'May 2014', 'May 2014', 'May 2014', 'May 2014', 'Jun 2014', 'Jun 2014', 'Jun 2014', 'Jun 2014', 'Jun 2014', 'Jul 2014', 'Jul 2014'],
            labels: {
                rotation: -90,
                step: 6
            }, tickInterval: 2
        },
        yAxis: [{
            title: {
                text: 'Percentage of admitted patients <br> spending >4 hours from decision <br> to admit to admission',
                offset: 99
            },
            max: 10,
            labels: {
                format: '{value:.1f}',
                formatter: function () {
                    return this.value + '%';
                }
            }
        }, {
            title: {
                text: 'Number of admitted patients <br> spending >12 hours from decision <br> to admit to admission',
                offset: 99
            },
            opposite: true,
            max: 100,
            labels: {
                format: '{value:.1f}',
                formatter: function () {
                    return this.value;
                }
            }
        }


        ],
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Percentage',
            type: 'line',
            yAxis: 0,
            data: [1.8, 1.6, 1.4, 1.7, 2.2, 3.3, 3.3, 2.4, 4.1, 5.1, 3, 1.8, 1.7, 1.9, 2.3, 2.2, 1.5, 1.6, 1.9, 2, 2, 2.2, 2.2, 1.7, 1.6, 1.4, 2, 1.6, 1.5, 1.7, 1.8, 1.8, 1.8, 1.6, 1.6, 1.6, 1.2, 1, 1.3, 1.5, 1.1, 1, 1, 1.6, 2, 1.8, 1.6, 2.1, 2.3, 2.2, 1.7, 2.1, 2.7, 1.9, 1.7, 2.1, 2.2, 2.8, 3.1, 2, 2.1, 4.4, 3.2, 2.8, 2.9, 2.6, 3.6, 4.4, 4, 3.5, 2.4, 1.8, 2.1, 1.9, 1.9, 3.2, 2.5, 2.1, 1.7, 2, 2, 2.2, 1.7, 1.9, 2.1, 2, 1.9, 1.8, 1.5, 1.5, 1.6, 1.5, 1.7, 1.9, 1.7, 1.6, 1.8, 2.2, 2, 2.7, 2.7, 2.5, 2.6, 2.2, 2.2, 2.8, 2.7, 2.6, 2.9, 3.7, 4.1, 3.8, 2.9, 5.8, 4.7, 3.2, 4.3, 4.8, 4.3, 4.5, 4.5, 5.8, 6.1, 5.8, 5.4, 4, 6.8, 7.1, 5.4, 3.5, 2.1, 2.3, 2.3, 2.2, 2.1, 2.1, 2, 2.4, 1.4, 1.7, 2, 2, 2.6, 2.3, 2.3, 2.3, 2.5, 2.9, 3.1, 2.3, 3.5, 3.6, 3.4, 3, 3.2, 3.3, 2.1, 2.5, 2.5, 3.1, 2.9, 3.5, 3.7, 3.3, 2.1, 5, 5.1, 3.9, 3.1, 3.8, 5.1, 5.2, 3.8, 4.5, 3.9, 2.6, 3, 2.9, 4.5, 3.4, 2.2, 4.1, 3.5, 3.8, 3.8, 4, 3.9, 4, 3.6, 2.7, 2.9, 3.3, 3.2]
        }, {
            name: 'Number',
            type: 'column',
            yAxis: 1,
            data: [0, 0, 0, 2, 0, 0, 9, 1, 7, 7, 8, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 5, 0, 0, 1, 1, 0, 0, 2, 1, 4, 2, 2, 0, 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 13, 0, 0, 17, 17, 27, 4, 0, 1, 0, 3, 1, 0, 0, 7, 0, 0, 1, 0, 1, 4, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 4, 5, 0, 12, 13, 18, 6, 4, 4, 2, 5, 8, 13, 38, 13, 14, 12, 28, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 0, 0, 2, 1, 0, 0, 2, 0, 0, 2, 0, 6, 1, 0, 0, 0, 19, 3, 2, 1, 3, 0, 5, 3, 4, 2, 24, 22, 2, 1, 0, 33, 19, 22, 4, 4, 1, 1, 1, 11, 3, 5, 6, 0, 1, 3, 0, 7, 3, 1, 2, 0, 3, 1]
        }]
    }