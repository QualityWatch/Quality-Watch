{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do quit rates vary by gender and ethnicity?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Pakistani','Any other white background','Any other Asian background','Indian','British','Total','Chinese','Irish','Bangladeshi','African','Any other ethnic group','Not stated','Any other mixed background','White and Asian','Caribbean','White and Black Caribbean','White and Black African','Any other Black background']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of adults on the NHS <br> stop smoking who quit smoking after <br> 4 weeks', offset: 99}
, min: 30
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Total',
type: 'column',
    data: [58.6,53.2,53.1,52.9,51.8,{y:51.7, color: 'rgba(0,154,166,0.5)'}, 51.5,51.3,51,50.6,49.8,49.5,49,47.2,46.7,44.7,44,42.4]
,index: 1
},
{
name: 'Males',
type: 'column',
    data: [59.1,53.4,54,53.1,53.4,{y:53.2,color:'rgba(225,14,73, 0.5)'}  , 52.5,51.9,50.6,52.1,50.3,50.3,50.9,47.7,47.6,46.7,44.6,45.1]
,index: 2
},
{
name: 'Females',
type: 'column',
    data: [56,52.9,50.1,52.1,50.4,{y:50.3,color:'rgba(79,11,123, 0.5)'}, 49.5,50.7,53.4,46.7,48.8,48.8,47.1,46.3,45.7,43.1,43.2,39.5]
,index: 3
}
]
}