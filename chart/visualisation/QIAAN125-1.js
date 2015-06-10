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
                    text: 'How has the proportion and amount spent on home care changed?'
                },
                credits: {
                    enabled: true,
                    text: 'Copyright Nuffield Trust & The Health Foundation',
                    href: 'http://www.qualitywatch.org.uk'
                }
            }
        },
        xAxis:

        {
            title: {
                text: ''
            },
            categories: ['1994-95', '1995-96', '1996-97', '1997-98', '1998-99', '1999-00', '2000-01', '2001-02', '2002-03', '2003-04', '2004-05', '2005-06', '2006-07', '2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: [{
            title: {
                text: 'Proportion of gross expenditure <br> (excluding support costs) on home <br> care for all adults',
                offset: 99
            },
            max: 20,
            min: 10,
            labels: {
                format: '{value:.2f}',
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        {
            title: {
                text: 'Gross expenditure <br> (excluding support costs) on home <br> care for all adults',
                offset: 99
            },
            opposite: true,
            labels: {
                format: '{value:.2f}',
                formatter: function () {
                    return '£' + this.value + 'm';
                }
            }


    }],
    series: [{
        name: 'Proportion spent on homecare',
        type: 'line',
        data: [18.67, 18.12, 17.52, 17.54, 17.31, 17.24, 16.7, 16.72, 15.87, 16.66, 17.29, 18.09, 18.45, 18.32, 18.46, 18.57, 19.01, 17.66, 17.06]
    }, {
        name: 'Amount spent on homecare',
        type: 'column',
        yAxis: 1,
        data:

        [102.776484, 114.023313, 123.472619, 133.427492, 141.891395, 153.940962, 160.625656, 169.093297, 179.579710, 198.208521, 221.995363, 248.637286, 264.251246, 269.280208, 285.544939, 299.516337, 311.853765, 295.698940, 285.123546]
    }]
    }