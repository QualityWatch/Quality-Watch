/* Created by ianb on 27/06/2014 16:14:45 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has mortality amenable to health care changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Directly age-standardised rates <br> of mortality amenable to health <br> care (per 1000,000)', offset: 99}
, labels: {
}},
series:[
{
name: 'Male',
type: 'line',
data: [185.86,169.79,162.98,155.66,144.82,136.48,128.36,121.49,116.69,109.79,106.53,104.86,98.99]
,index: 1
},
{
name: 'Female',
type: 'line',
data: [120.21,110.58,105.62,101.89,95.48,91.45,87,83.5,80.83,75.22,72.26,71.31,69.68]
,index: 2
}
]
}
