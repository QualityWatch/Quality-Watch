/* Created by ianb on 14/10/2013 11:42:52 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many people with depression/anxiety disorders access services and has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of people with anxiety <br> and/or depression (taken from the <br> Psychiatric Morbidity Survey) who <br> have entered (i.e. received) treatment', offset: 111}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of people receiving treatment',
type: 'line',
data: [2.02,2.13,2.14,2.43,2.4,2.5,2.38,2.53]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Proportion of people receiving treatment trendline',
data: [[0, 2],[7, 2.49]]
}
]
}
