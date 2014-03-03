/* Created by EFisher on 25/02/2014 18:26:33 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the way inpatients rate the care they receive vary?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Patient response: 0 (I had a very poor experience) to 10 (I had <br> a very good experience)', offset: 27}
, categories: [0,1,2,3,4,5,6,7,8,9,10]
, labels: {
}
},
yAxis: {
title: {text:'How do you rate the care you received? <br> (Percentage of inpatients)', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012',
type: 'column',
data: [1,1,1,2,2,5,6,12,24,20,25]
,index: 1
}
]
}
