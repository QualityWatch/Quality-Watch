{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have  hip fracture readmissions within 28 days changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11']
, labels: {
 rotation: -90
, step: 1
}
},
    yAxis: [
        {
title: {text:'Readmissions within 28 days following <br> Fractured Neck of Fenur discharge', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
}},
    {opposite: true, 
title: {text:'Directly standardised readmission rate <br> per 1,000   admissions', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
}}],
series:[
{
name: 'Readmissions within 28 days',
type: 'line',
data: [3658,4115,4319,4513,4965,5091,5284,5450,5894,6180]
,index: 1
},
{
name: 'Directly standardised 28-day readmission rate',
type: 'line',
    yAxis: 1,
data: [80.3,84.1,86.9,91.8,98.7,101.1,101.9,104.9,108.6,113.4]
,index: 1
}, {
            name: 'error',
            type: 'errorbar',
    yAxis: 1,
            data: [
[77.69,82.91],
[81.53,86.7],
[84.28,89.49],
[89.16,94.56],
[95.99,101.52],
[98.31,103.91],
[99.13,104.69],
[102.13,107.77],
[105.83,111.46],
[110.54,116.29]

            ]
        }
]
}
