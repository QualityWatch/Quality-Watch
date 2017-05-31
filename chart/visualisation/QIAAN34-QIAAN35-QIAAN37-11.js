/* Created by RREED on 31/05/2017 13:45:24 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are there differences between staff groups reporting feeling pressure to work when unwell?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013,2014,"Question<br>changed",2015]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell <br> (±SEM) (%)', offset: 111}
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
data: [21.5,22.3,22.5,27,25.4,23,null,56.5]
,index: 1
},
{
name: 'Disabled staff',
type: 'column',
data: [30.2,32,32.6,38.5,37.1,34.3,null,73.3]
,index: 2
},
{
name: 'Non-disabled staff',
type: 'column',
data: [19.3,20.4,20.4,24.6,22.9,20.2,null,52.9]
,index: 3
}
]
}
