/* Created by EFisher on 03/12/2015 11:48:01 using v2.7 *//* Created by EFisher on 03/12/2015 11:45:53 using v2.7 */
/* Created by EFisher on 25/11/2015 15:43:27 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of timely antenatal assessments changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11 Q1', '2010/11 Q2', '2010/11 Q3', '2010/11 Q4', '2011/12 Q1', '2011/12 Q2', '2011/12 Q3', '2011/12 Q4', '2012/13 Q1', '2012/13 Q2', '2012/13 Q3', '2012/13 Q4', '2013/14 Q1', '2013/14 Q2', '2013/14 Q3', '2013/14 Q4', '2014/15 Q1', '2014/15 Q2', '2014/15 Q3', '2014/15 Q4', '2015/16 Q1']
, labels: {
 rotation: -45
, step: 1
}
},
yAxis: [
    {
    
title: {text:'Total number of assessments', offset: 50}
    , max: 200000
, min: 0
, labels: {
}},
    {
    
title: {text:'Proportion of total assessments which <br> happened after 12 weeks and 6 days (%)', offset: 60}
    , max: 30, 
        min: 0, 
        tickInterval: 5,
labels: {
}, opposite: true},
       
       ],
series:[
{
name: 'Total number of assessments',
type: 'area',
    yAxis: 0,
data: [170887, 183640, 183640, 174265, 177397, 178599, 185187, 179294, 181749, 177266, 187326, 175682, 174475, 177084, 185208, 175746, 176158, 174490, 188863, 182254, 187475]
,index: 1
},

{
name: 'Proportion of total assessments',
type: 'line',
    yAxis: 1,
data: [18, 20, 17, 17, 15, 15, 14, 14, 13, 13, 13, 14, 13, 14, 17, 17, 17, 18, 17, 17, 17]
}
]
}