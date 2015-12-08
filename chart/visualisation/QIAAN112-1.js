/* Created by EFisher on 26/11/2015 09:42:37 using v2.7 */    {
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
            categories: ['2002/03', '2003/04', '2004/05', '2005/06', '2006/07', '2007/08', '2008/09', '2009/10', '2010/11', '2011/12', '2012/13', '2013/14', '2014/15'],
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
            title: { offset: 70,
                text: 'Directly standardised rate per 100,000 <br> population'
            },
            opposite: true
        }
                

        ],
        series: [{
            name: 'Directly standardised fracture rate',
            type: 'line',
            yAxis: 1,
            data: [607.4, 616.87, 606.86, 611.44, 599.52, 607.2, 605.07, 616.15, 609.71, 610.61, 600.52, 616.24, 604.63]
        }, {
            name: 'error',
            type: 'errorbar',
            yAxis: 1,
            data: [
[601.97, 612.83], [611.38, 622.35], [601.43, 612.28], [606.05, 616.83], [594.24, 604.79], [601.94, 612.46], [599.86, 610.29], [610.93, 621.38], [604.56, 614.86], [605.5, 615.72], [595.51, 605.54], [611.2, 621.28], [599.7, 609.57]
            ]
        }, {
            name: 'No. of hip fractures',
            type: 'line',
            data: [48915, 49642, 49035, 50118, 50032, 51512, 51976, 53596, 53969, 54983, 55151, 57453, 57668]
        }

        ]
    }


