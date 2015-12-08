/* Created by EFisher on 03/12/2015 13:09:34 using v2.7 */

{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the average number of sickness days changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011', '2012', '2013', '2014']
, labels: {
 rotation: 0
, step: 1
}
},
yAxis: [
    {
    
title: {text:'Median number of sickness days for all staff roles', offset: 50}
    , max: 2
, min: 0
, labels: {
}},
    {
    
title: {text:'Average (mean)  number of <br>sickness days taken by each employee', offset: 60}
    , max: 12, 
        min: 0, 
        tickInterval: 5,
labels: {
}, opposite: true},
       
       ],
series:[
{
name: 'Median days (left axis)',
type: 'column',
    yAxis: 0,
data: [1, 1, 1.5, 1]
,index: 1
},

{
name: 'Average (mean) per employee (right axis)',
type: 'line',
    yAxis: 1,
data: [9.7, 9.9, 10.3, 9.5]
}
]
}
