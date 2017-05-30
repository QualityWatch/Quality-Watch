/* Created by RREED on 30/05/2017 14:51:56 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Staff satisfaction with the quality of work and patient care they are able to deliver'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ["2015","2016"]
, labels: {
}
},
yAxis: {
title: {text:'Staff satisfaction with the quality <br> of work and care they are able to <br> deliver, weighted scores ', offset: 99}
, max: 5
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [3.30,3.32]
,index: 1
},
{
name: 'Acute',
type: 'column',
data: [3.30,3.32]
,index: 2
},
{
name: 'Ambulance',
type: 'column',
data: [3.06,3.10]
,index: 3
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [3.31,3.35]
,index: 4
},
{
name: 'Community',
type: 'column',
data: [3.27,3.29]
,index: 5
}
]
}
