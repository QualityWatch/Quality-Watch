/* Created by rreed on 25/05/2017 13:35:14 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are there differences between staff groups in reporting being ill due to work-related stress?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they had been ill <br> due to work related stress (±SEM) <br> (%)', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'column',
data: [35.1,34.5,32.5,32.7,28.1,28.3,29.1,30,38.2,38.3,37.7,37]
,index: 1
},
{
name: 'Disabled staff',
type: 'column',
data: [50.5,52.1,50.3,47,42.8,41.2,42.2,43.7,52.3,53.2,51.8,50.5]
,index: 2
},
{
name: 'Non-disabled staff',
type: 'column',
data: [34,33.3,30.8,30.8,26.1,25.8,26.8,27.5,35.3,35.4,34.6,32.5]
,index: 3
}
]
}
