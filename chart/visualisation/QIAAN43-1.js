/* Created by EFisher on 12/10/2015 14:29:30 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have employment rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07Q3','2006/07Q4','2007/08Q1','2007/08Q2','2007/08Q3','2007/08Q4','2008/09Q1','2008/09Q2','2008/09Q3','2008/09Q4','2009/10Q1','2009/10Q2','2009/10Q3','2009/10Q4','2010/11Q1','2010/11Q2','2010/11Q3','2010/11Q4','2011/12Q1','2011/12Q2','2011/12Q3','2011/12Q4','2012/13Q1','2012/13Q2','2012/13Q3','2012/13Q4','2013/14Q1','2013/14Q2','2013/14Q3','2013/14Q4','2014/15Q1','2014/15Q2','2014/15Q3','2014/15Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Employement rate'}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Employment rate of people with long-term conditions',
type: 'line',
data: [58.1,57.7,57.7,57.5,58,58.2,57.8,57.9,57.8,58.4,58.1,57.3,57.5,57.7,59.2,59,59.6,59.4,59.2,58.6,59.3,58.8,58.3,59.1,59.6,60.3,59.5,58.7,58.5,58.7,58.8,59.9,60.3,60.5]
,index: 1
},
{
name: 'Employment rate of population ',
type: 'line',
data: [73.3,73,72.3,72.4,73.1,73.3,73,72.8,72.9,72.6,71.7,70.9,71.2,71.1,70.4,70.6,71.4,71,70.6,70.5,70.7,70.7,70.6,71.1,71.9,72.1,71.3,71.5,72.2,72.6,72.7,73.1,73.5,73.7]
,index: 2
}
]
}
