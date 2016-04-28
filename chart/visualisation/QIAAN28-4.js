/* Created by NCODowd on 21/04/2016 09:38:16 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do quit rates vary by gender and ethnicity?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Pakistani','Any other Asian background','Chinese','Any other white background','Indian','British','Total Ethnic Groups','Irish','African','White and Black African','Bangladeshi','White and Asian','Caribbean','White and Black Caribbean','Any other Black background','Any other mixed background','Not stated','Any other ethnic group']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title:  {text:'Percentage of adults on the<br>NHS stop smoking who quit<br>smoking after 4 weeks', offset: 99}
,min: 20
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Total',
type: 'column',
    data: [56.1,53.2,53.1,52.5,52.4,51.8,{y:51.0, color: 'rgba(0,154,166,0.5)'},49.4,48.6,47.7,47.4,47.0,46.0,44.0,43.4,43.0,42.4,34.4]
,index: 1
},
{
name: 'Males',
type: 'column',
    data:[55.7,52.7,52.9,52.0,52.6,53.3,{y:52.2,color:'rgba(225,14,73,0.5)'},50.2,49.4,47.3,47.1,48.2,45.5,44.4,45.5,42.8,43.8,37.6]  
,index: 2
},
{
name: 'Females',
type: 'column',
    data:[57.8,55.2,53.7,52.9,51.7,50.5,{y:49.9,color:'rgba(79,11,123,0.5)'},48.7,46.7,48.1,48.9,45.5,46.5,43.6,40.3,43.3,41.1,30.3] 
,index: 3
}
]
}