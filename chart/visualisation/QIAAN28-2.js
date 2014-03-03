/* Created by EFisher on 25/02/2014 18:18:28 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How is the amount spent per smoker related to the percentage of quitters?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Cost per quitter (£)'}
, labels: {
format: '{value:.1f}' 
}
},
yAxis: {
title: {text:'Percentage of adults who quit smoking <br> within four weeks of those who set <br> a quit date (April 2003 to December <br> 2012)', offset: 111}
, max: 70
, min: 40
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Cost per quitter compared to successful quitters',
type: 'scatter',
data: [[174,53],[235,54],[209,57],[138,59],[180,54],[187,54],[170,57],[129,59],[159,53],[167,52],[194,55],[171,50],[192,51],[198,53],[120,56],[152,51],[144,50],[207,52],[194,53],[215,49],[240,49],[262,51],[182,51],[227,48],[250,48],[256,50],[185,51],[230,47],[234,48],[241,49],[190,50],[207,48],[223,48],[246,50],[210,51],[226,49],[260,50],[269,52]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Cost per quitter compared to successful quitters trendline',
data: [[120, 55.5],[269, 48.5]]
}
]
}
