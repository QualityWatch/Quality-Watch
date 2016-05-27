/* Created by NCODowd on 23/05/2016 17:53:54 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the trends in publicly funded adult social care staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Number of whole time equivalents'}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Direct care',
type: 'line',
data: [66600,62800,56500,52400,46100]
,index: 1
},
{
name: 'Manager, Supervisor',
type: 'line',
data: [20700,19800,18400,17000,16300]
,index: 2
},
{
name: 'Professional',
type: 'line',
data: [17500,17800,18100,17100,17200]
,index: 3
},
{
name: 'Other',
type: 'line',
data: [21200,19900,18600,17800,17400]
,index: 4
}
]
}
