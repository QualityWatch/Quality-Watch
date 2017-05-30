/* Created by NCODowd on 23/05/2016 18:08:10 using v2.7 */
/* Created by EFisher on 08/12/2015 18:27:03 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the average number of sickness days changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011', '2012', '2013', '2014','2015','2016']
, labels: {
 rotation: 0
, step: 1
}
},
yAxis: [
    {
    
title: {text:'Median number of sickness days for all staff roles', offset: 50}
    , max: 1.6
, min: 0
, tickInterval:0.1
, labels: {
}},
    {
    
title: {text:'Average (mean)  number of <br>sickness days taken by each employee', offset: 60}
    , max: 16, 
        min: 0, 
        tickInterval: 2,
labels: {
}, opposite: true},
       
       ],
series:[
{
name: 'Median days (left axis)',
type: 'column',
    yAxis: 0,
data: [1, 1, 1.5, 1,1,1]
,index: 1
},

{
name: 'Average (mean) per employee (right axis)',
type: 'line',
    yAxis: 1,
data: [9.7, 9.9, 10.3, 9.5,10.5,10.5]
}
]
}

