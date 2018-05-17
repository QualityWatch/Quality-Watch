/* Created by JMorris on 09/05/2018 11:23:46 using v2.7 */{
/* Created by JMorris on 27/11/2017 using v2.7 */
    title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            chartOptions: {
                title: {
                    text: 'Trolley waits: how long to people wait to be admitted onto a hospital ward?'
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
            categories: ['Aug-10', 'Sep-10', 'Oct-10', 'Nov-10', 'Dec-10', 'Jan-11', 'Feb-11', 'Mar-11', 'Apr-11', 'May-11', 'Jun-11', 'Jul-11', 'Aug-11', 'Sep-11', 'Oct-11', 'Nov-11', 'Dec-11', 'Jan-12', 'Feb-12', 'Mar-12', 'Apr-12', 'May-12', 'Jun-12', 'Jul-12', 'Aug-12', 'Sep-12', 'Oct-12', 'Nov-12', 'Dec-12', 'Jan-13', 'Feb-13', 'Mar-13', 'Apr-13', 'May-13', 'Jun-13', 'Jul-13', 'Aug-13', 'Sep-13', 'Oct-13', 'Nov-13', 'Dec-13', 'Jan-14', 'Feb-14', 'Mar-14', 'Apr-14', 'May-14', 'Jun-14', 'Jul-14', 'Aug-14', 'Sep-14', 'Oct-14', 'Nov-14', 'Dec-14', 'Jan-15', 'Feb-15', 'Mar-15', 'Apr-15', 'May-15', 'Jun-15', 'Jul-15', 'Aug-15', 'Sep-15', 'Oct-15', 'Nov-15', 'Dec-15', 'Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16', 'Jan-17','Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17', 'Jul-17', 'Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17', 'Jan-18', 'Feb-18', 'Mar-18'],
            labels: {
                rotation: -90,
                step: 4
            },
            tickInterval: 2
        },
        yAxis: [{
            title: {
                text: 'Percentage of admitted patients waiting >4 hours <br> from decision to admit to admission',
                offset: 60
            },
            max: 20,
  min: 0,          labels: {
                format: '{value:.1f}',
                formatter: function () {
                    return this.value + '%';
                }
            }
        }, {
            title: {
                text: 'Number of admitted patients waiting <br> >12 hours from decision to admit to admission',
                offset: 60
            },
            opposite: true,
            max: 1200,
  min: 0,          labels: {
                format: '{value:.1f}',
                formatter: function () {
                    return this.value;
                }
            }
        }

        ],
        
        series: [{
            tooltip: {
            valueSuffix: '%'
        },name: 'Percentage waiting >4 hours',
            type: 'line',
            yAxis: 0,
            data: [0.87,1.39,1.59,1.67,3.05,2.98,1.96,1.93,1.80,1.71,1.71,1.33,1.22,1.82,2.09,2.10,2.48,3.24,3.73,2.24,2.39,1.96,1.97,1.63,1.68,2.14,2.48,2.66,3.66,4.51,4.69,5.38,5.47,2.21,1.98,2.10,2.45,3.13,3.08,2.70,3.27,4.15,4.57,3.23,3.53,3.82,3.27,3.59,3.56,4.40,5.31,5.53,9.49,9.69,7.80,6.48,6.22,5.02,4.16,3.65,4.40,5.58,6.58,7.19,6.75,10.64,10.82,10.86,8.39,7.75,7.35, 7.64, 7.28, 7.50, 9.90,10.83,12.40,16.16, 12.17,8.43,7.20,7.97,7.02,7.47,7.65,8.66,8.86,9.42,13.28,15.40,14.41,14.45] 
        }, {
            name: 'Number of extreme waits',
            type: 'column',
            yAxis: 1,
            data: [1, 0, 0, 2, 15, 17, 3, 1, 6, 3, 10, 6, 1, 9, 42, 28, 4, 8, 6, 1, 0, 0, 2, 1, 2, 2, 0, 1, 14, 50, 17, 81, 43, 0, 7, 3, 2, 9, 21, 7, 21, 42, 77, 10, 23, 10, 8, 5, 8, 28, 55, 35, 186, 650, 184, 54, 58, 46, 25, 22, 28, 23, 58, 29, 29, 158, 188, 349, 196, 107, 84, 113, 57, 86, 252, 457, 553, 989, 338, 270, 142, 114, 55, 74, 50, 77, 54, 107, 500, 1043, 371, 853]
        }] }