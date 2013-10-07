{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion in paid employment changed by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},xAxis: {
title: {text:''}
, categories: ['South East','London','England','Eastern','Yorkshire & Humber','South West','East Midlands','North East','North West','West Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of all adults with learning <br> difficulties who are in paid employment', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2009/10',
type: 'column',
    data: [9.6,8.5,{color:'#E10E49', y:6.4},6.1,5.2,5.8,6,4.8,5.3,4.1]
,index: 1
},
{
name: '2010/11',
type: 'column',
    data: [9.6,8.6,{color:'#E35479', y:6.6},6,6.3,5.7,5.3,5.7,4.9,5.5]
,index: 2
},
{
name: '2011/12',
type: 'column',
    data: [9.6,9.3,{color:'#E59AA9', y:7.1},7.2,6.8,5.8,5.8,5.7,5.4,6.3]
,index: 3
},
{
name: '2012/13',
type: 'column',
    data: [10.5,9.3,{color:'#E7E0D9', y:7.2},6.5,6.6,7.3,5.3,5.5,5.3,5.6]
,index: 4
}
]
}



















