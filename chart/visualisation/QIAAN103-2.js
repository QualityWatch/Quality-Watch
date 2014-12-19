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
                    text: 'How has the number of people spending more than four hours in A&E changed?'
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
            categories: ['2004-05 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2005-06 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2006-07 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2007-08 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2008-09 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2009-10 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2010-11 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2011-12 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2012-13 Q1: April - June', '- Q2: July - Sept', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2013-14 Q1: April - June', '- Q2: July - Sep', '- Q3: Oct - Dec', '- Q4: Jan - Mar', '2014-15 Q1: April - June', ,'- Q2: July - Sep'],
            labels: {
                rotation: -90,
                step: 2
            }
        },
        yAxis: [{
            title: {
                text: 'Number of attendances (millions)'
            },
            max: 8,
            labels: {
                format: '{value:.1f}'
            }
        }, {
            title: {
                text: 'Percentage spending less <br> than four hours in A&E'
            },
            opposite: true,
            min: 80,
            max: 100,
            tickInterval: 5,
            labels: {
                format: '{value:.1f}'
            }
        }],
        plotOptions: {
                    

    column: {           
       groupPadding: 0.5,   // Exactly overlap
        pointWidth: 10                                     
    }
},
        series: [{
            name: 'Total attendances',
            type: 'column',
            data: [4.502578, 4.556695, 4.374927, 4.402980, 4.859578, 4.744255, 4.605971, 4.549360, 4.891724, 4.892182, 4.559139, 4.579230, 4.924326, 4.847670, 4.698115, 4.606720, 4.987454, 4.930216, 4.865130, 4.805544, 5.291643, 5.180582, 5.126374, 4.913309, 5.523833, 5.375808, 5.250720, 5.230624, 5.501737, 5.344832, 5.253575, 5.381258, 5.587707, 5.493644, 5.351447, 5.305839, 5.554127, 5.525151, 5.294269, 5.405110, 5.771508, 5.602551]
        }, {
            name: 'Type 1 Departments - Major A&E',
            type: 'column',
            data: [3.377850, 3.381219, 3.257398, 3.249353, 3.520931, 3.403089, 3.346995, 3.282671, 3.509770, 3.493340, 3.307210, 3.292269, 3.463473, 3.398518, 3.305734, 3.227550, 3.419655, 3.360077, 3.351352, 3.295052, 3.546638, 3.424850, 3.422855, 3.223957, 3.598903, 3.503757, 3.426350, 3.402705, 3.586381, 3.469728, 3.432578, 3.525235, 3.623761, 3.582519, 3.545721, 3.500067, 3.620189, 3.588450, 3.476480, 3.528029, 3.765418, 3.672354]
        }, {
            name: 'Percentage in 4 hours or less (type 1)',
            type: 'line',
            yAxis: 1,
          
            data: [93.13, 94.6, 95.8, 96.43, 97.62, 98.32, 97.56, 96.57, 97.73, 97.9, 97.59, 96.78, 97.6, 97.7, 96.34, 96.46, 97.63, 98.1, 96.43, 96.76, 97.97, 98.13, 96.82, 96.9, 97.65, 97.02, 94.72, 94.83, 95.56, 95.9, 94.49, 93.68, 94.91, 95.39, 93.54, 91.14, 93.44, 94.36, 93.46, 92.69, 92.58, 92.48]
        }, {
            name: 'Percentage in 4 hours or less (type 2&3)',
            type: 'line',
            yAxis: 1,
            data: [99.47, 99.62, 99.75, 99.86, 99.9, 99.91, 99.88, 99.89, 99.91, 99.93, 99.91, 99.9, 99.81, 99.91, 99.88, 99.89, 99.87, 99.89, 99.87, 99.86, 99.84, 99.89, 99.89, 99.87, 99.88, 99.87, 99.82, 99.82, 99.84, 99.86, 99.84, 99.83, 99.83, 99.85, 99.83, 99.79, 99.81, 99.83, 99.83, 99.8, 99.74, 99.74]
        }, {
            name: 'Old target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
            data: [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        }, {
            name: 'New target',
            type: 'line',
                            marker: {
                    enabled: false
                },
            yAxis: 1,
            data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95]
        }]
    }