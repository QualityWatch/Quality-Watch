/* Created by EFisher on 26/11/2015 10:18:34 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have  hip fracture readmissions within 28 days changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002/03', '2003/04', '2004/05', '2005/06', '2006/07', '2007/08', '2008/09', '2009/10', '2010/11', '2011/12', '2012/13', '2013/14', '2014/15']
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
format: '{value:.0f}' 
}},
    {opposite: true, 
title: {text:'Directly standardised readmission rate <br> per 1,000   admissions', offset: 87}
, min: 0
, labels: {
format: '{value:.0f}' 
}}],
series:[
{
name: 'Readmissions within 28 days',
type: 'line',
data: [3542, 3619, 3933, 4296, 4325, 4495, 4595, 4863, 5035, 5104, 5233, 5438, 5907]
,index: 1
},
{
name: 'Directly standardised 28-day readmission rate',
type: 'line',
    yAxis: 1,
data: [72.4, 72.9, 80.2, 85.7, 86.4, 87.3, 88.4, 90.7, 93.3, 92.8, 94.9, 94.7, 102.4]
}, {
            name: 'error',
            type: 'errorbar',
    yAxis: 1,
            data: [
[70.03, 74.8], [70.53, 75.28], [77.7, 82.71], [83.15, 88.28], [83.87, 89.02], [84.71, 89.81], [85.85, 90.96], [88.18, 93.28], [90.72, 95.87], [90.28, 95.38], [92.31, 97.46], [92.14, 97.17], [99.82, 105.04]

            ]
        }
]
}
  