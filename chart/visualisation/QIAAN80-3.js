/* Created by JMorris on 27/11/2017 16:47:42 using v2.7 */
/* Created by JMORRIS on 27/11/2017 using v2.7 */{
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'What\'s happening to people waiting the longest for treatment (over 52 weeks)?'
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
            categories: ['Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016', 'May 2016', 'Jun 2016', 'Jul 2016', 'Aug 2016','Sep 2016', 'Oct 2016', 'Nov 2016', 'Dec 2016', 'Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017', 'Jul 2017', 'Aug 2017','Sep 2017'],
            labels: {
                rotation: -90,
                step: 4
            }
        },
        yAxis: [{
        max:1,
            min: 0,
            title: {
                text: 'Proportion of patients waiting for treatment <br> >52 weeks after referral',
                offset: 65},
        labels: {format: '{value}%'}
        },
        { 
            max: 25000,
                min: 0,
            title: {
                text: 'Number of patients waiting for treatment <br> >52 weeks after referral',
                offset: 65
            },
            labels: {
                format: '{value:0f}'
            },
            opposite: true
        }],


    tooltip: {
        shared: true
    },
    series: [{
             tooltip: {
            valueSuffix: '%'},
        name: 'Proportion of people waiting >52 weeks',
        type: 'line',
        data: [0.879, 0.896, 0.799, 0.764, 0.841, 0.717, 0.709, 0.737, 0.786, 0.519, 0.554, 0.537, 0.608, 0.600, 0.609, 0.585, 0.543, 0.493, 0.520, 0.763, 0.762, 0.774, 0.434, 0.293, 0.255, 0.250, 0.237, 0.213, 0.170, 0.129, 0.132, 0.110, 0.078, 0.059, 0.049, 0.044, 0.042, 0.033, 0.026, 0.018, 0.014, 0.015, 0.010, 0.013, 0.012, 0.013, 0.009, 0.007, 0.011, 0.015, 0.019, 0.017, 0.017, 0.018, 0.019, 0.017, 0.016, 0.012, 0.013, 0.012, 0.014, 0.015, 0.015, 0.016, 0.014, 0.020, 0.023, 0.024, 0.022, 0.023, 0.026, 0.025, 0.023, 0.022, 0.021, 0.025, 0.025, 0.028, 0.026, 0.029, 0.029, 0.032, 0.038, 0.033, 0.034, 0.037, 0.043, 0.041, 0.042, 0.043, 0.040, 0.042, 0.045, 0.046]
    },  {
        name: 'Number of people waiting >52 weeks',
        type: 'line',
        yAxis: 1,
        data: [20792, 20737, 18681, 18494, 21098, 18458, 18221, 19585, 20855, 13442, 14254, 13568, 14671, 14222, 14880, 14355, 13434, 12536, 13257, 19937, 19938, 20097, 11132, 7324, 6071, 5898, 5653, 5149, 4213, 3308, 3478, 2959, 2054, 1570, 1281, 1147, 1085, 842, 663, 473, 391, 434, 295, 368, 350, 387, 257, 214, 316, 430, 539, 488, 516, 572, 594, 532, 490, 362, 381, 362, 399, 440, 442, 475, 413, 634, 751, 786, 739, 756, 868, 835, 758, 728, 692, 871, 886, 1009, 942, 1077, 1062, 1185, 1428, 1234, 1227, 1345, 1583, 1528, 1573, 1651, 1544, 1630, 1729, 1778]
    }]
    }
