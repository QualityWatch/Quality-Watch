/* Created by ianb on 07/10/2013 13:35:11 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times for cancer treatment changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people who had <br> their first cancer treatment within <br> 31 days of the decision to treat', offset: 99}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'All',
type: 'line',
data: [98.2,98.1,98,98.4,98.4,98.4,98.4,98.5,98.3,98.3,98.4,98.5,98.5,98.4,98.4,98.5,98.3,98.3]
,index: 1
},
{
name: 'Surgery',
type: 'line',
data: [94.8,95.1,95.7,97.1,97,97.6,97,97.2,96.7,97.5,97.7,97.6,97.3,97.4,97.5,97.5,97.1,97.7]
,index: 2
},
{
name: 'Anti-cancer drug regime',
type: 'line',
data: [99.2,99.4,99.5,99.7,99.5,99.7,99.6,99.7,99.6,99.7,99.8,99.8,99.7,99.6,99.8,99.7,99.6,99.7]
,index: 3
}
]
}

