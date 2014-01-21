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
                    text: 'What are the trends in admissions for hip fracture?'
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
            categories: ['2001/02', '2002/03', '2003/04', '2004/05', '2005/06', '2006/07', '2007/08', '2008/09', '2009/10', '2010/11'],
            labels: {
                rotation: -90,
                step: 1
            }
        },
        yAxis: [{ min: 0,
            title: {
                text: 'Admissions for fracture of neck of femur'
            }
                }, { min: 0, 
            title: { offset: 50,
                text: 'Directly standardised rate per 100,000 <br> population'
            },
            opposite: true
        }
                

        ],
        series: [{
            name: 'Directly standardised fracture rate',
            type: 'line',
            yAxis: 1,
            data: [432.84, 453.49, 453.52, 447.85, 448.04, 443.66, 450.07, 441.13, 455.43, 448.96]
        }, {
            name: 'error',
            type: 'errorbar',
            yAxis: 1,
            data: [
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null]
            ]
        }, {
            name: 'No. of hip fractures',
            type: 'line',
            data: [46495, 49237, 49273, 49154, 49850, 50178, 51757, 51229, 53484, 53694]
        }

        ]
    }


