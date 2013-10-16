/* Created by ianb on 14/10/2013 11:45:39 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has mortality amenable to health care changed by gender?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
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
name: 'Males',
type: 'line',
data: [254.64,234.63,230.79,224.08,211.26,202.61,188.36,183.84,167.99,161.31,154.15,143.5,135.34,127.42,120.7,116.1,109.33,106.11]
,index: 1
},
{
name: 'Females',
type: 'line',
data: [157.03,146.7,144.89,139.27,134.68,129.29,120.19,118.08,108.63,103.74,100.09,93.8,89.87,85.52,82.13,79.54,74.09,71.12]
,index: 2
},
{
name: 'All',
type: 'line',
data: [202.92,188.12,185.4,179.43,171.01,164.18,152.68,149.44,137.06,131.38,126.05,117.71,111.78,105.76,100.76,97.23,91.13,88.06]
,index: 3
}
]
}
