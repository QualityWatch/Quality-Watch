/* Created by ianb on 27/04/2015 18:26:10 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Proportion of low birth weight by country'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'% of total live births'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,5.6,5.4,5.8,5.7,5.9,6,6.1,6.1,5.9,5.8,5.9,5.8,5.9,6,6.1,6.1,6.2,6.3,6.2,6.4,6.3,6.4,6.4,6.4,6.2,6.1,6.2,6.2,6.3]
,index: 1
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,5.9,5.9,null,5.9,6.3,6.5,null,6.5,6.7,6.7,6.8,6.4,null,6.7,6.6,6.7,6.7,6.8,6.5]
,index: 2
},
{
name: 'Germany',
visible: false,type: 'line',
data: [5.5,5.5,5.5,5.6,5.6,5.7,5.8,5.9,5.7,5.7,5.7,5.8,5.8,5.8,6,6.1,6.1,6.2,6.4,6.5,6.4,6.5,6.7,6.8,6.9,6.8,6.8,6.9,6.8,6.9,6.9,6.9]
,index: 3
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [6.7,6.5,6.6,6.6,6.6,6.7,6.8,6.8,6.6,6.7,6.7,6.8,6.7,6.8,6.9,7.2,7.2,7.3,7.4,7.5,7.5,7.5,7.6,7.6,7.5,7.5,7.5,7.1,7.1,7.1,6.9,7]
,index: 4
},
{
name: 'United States',
visible: false,type: 'line',
data: [6.8,6.8,6.8,6.8,6.7,6.8,6.8,6.9,7,7,7.2,7.1,7.1,7.2,7.3,7.3,7.4,7.5,7.6,7.6,7.6,7.7,7.8,7.9,8.1,8.2,8.3,8.2,8.2,8.2,8.2,8.1]
,index: 5
},
{
name: 'Finland',
visible: false,type: 'line',
data: [3.9,3.9,3.7,4,4.2,4.1,4,3.5,3.5,3.5,3.6,3.7,3.8,3.8,3.9,4,4.1,4,4.2,4.4,4.3,4.3,4.3,4.1,4.2,4.1,4.3,4.3,4.1,4.3,4.3,4.1]
,index: 6
},
{
name: 'Iceland',
visible: false,type: 'line',
data: [3.4,3.8,3.2,3.4,3,3.9,3,3.5,3,2.9,2.9,3.3,4.2,3.2,3.7,4.4,3.8,4.5,3.7,4.2,3.9,3.3,3.9,3.1,3.6,3.9,4,3.8,3.8,4.1,3.6,3.2]
,index: 7
}
]
}
