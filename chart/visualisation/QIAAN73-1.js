/* Created by EFisher on 03/12/2015 13:07:02 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Why are patients exiting drug treatment and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of service users and <br> their reason for exiting drug treatment', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Completed free of dependency',
type: 'line',
data: [38,43,47,46.9,45.4]
,index: 1
},
{
name: 'Transferred - not in custody',
type: 'line',
data: [15,14,14,13,12.4]
,index: 2
},
{
name: 'Referred on (old code)',
type: 'line',
data: [2,0,0,0,0]
,index: 3
},
{
name: 'Incomplete (including not known)',
type: 'line',
data: [37,32,28,29.5,31.3]
,index: 4
}
]
}
