/* Created by NCODowd on 27/04/2016 10:33:34 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do breastfeeding trends compare internationally?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of infants breastfed <br> at age 3 months', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Finland',
visible: true,type: 'line',
data: [74,null,null,null,null,76,null,null,null,null,76,null]
,index: 1
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,21.5,22.7,null]
,index: 2
},
{
name: 'Italy',
visible: false,type: 'line',
data: [63.5,null,63.5,null,null,59.2,null,null,null,null,null,null]
,index: 3
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [46,48,53,52,54,53,48.2,54,54.1,52.2,null,null]
,index: 4
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,65.5,null,null,null,null,63.3,null,null,null,null,66.54]
,index: 5
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [87.7,87.6,87.6,87.2,87,86.1,85.7,84.5,83.7,82.8,81.3,81]
,index: 6
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [28,null,null,null,null,34,null,null,null,null,42,null]
,index: 7
}
]
}
