/* Created by EFisher on 25/02/2014 18:32:46 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Proportion of low birth weights by country'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of low weight births'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'France',
type: 'line',
data: [null,5.2,5.2,null,null,null,5.3,5,5,5.2,5.3,5.7,5.8,5.8,5.9,5.7,5.8,6.2,6.8,6.7,6.8,6.9,7,7.2,6.8,null,6.7,6.6,null,null,6.4]
,index: 1
},
{
name: 'Germany',
type: 'line',
data: [5.5,5.5,5.5,5.6,5.6,5.7,5.8,5.9,5.7,5.7,5.7,5.8,5.8,5.8,6,6.1,6.1,6.2,6.4,6.5,6.4,6.5,6.7,6.8,6.9,6.8,6.8,6.9,6.9,6.9,6.9]
,index: 2
},
{
name: 'United Kingdom',
type: 'line',
data: [6.7,6.5,6.6,6.6,6.6,6.7,6.8,6.8,6.6,6.7,6.7,6.8,6.7,6.8,6.9,7.2,7.2,7.3,7.4,7.5,7.5,7.5,7.6,7.6,7.5,7.4,7.5,7.1,7.1,7.1,6.9]
,index: 3
},
{
name: 'United States',
type: 'line',
data: [6.8,6.8,6.8,6.8,6.7,6.8,6.8,6.9,7,7,7.2,7.1,7.1,7.2,7.3,7.3,7.4,7.5,7.6,7.6,7.6,7.7,7.8,7.9,8.1,8.2,8.3,8.2,8.2,8.2,8.2]
,index: 4
},
{
name: 'Australia',
type: 'line',
data: [null,null,null,5.6,5.4,5.8,5.7,5.9,6,6.1,6.1,5.9,5.8,5.9,5.8,5.9,6,6.1,6.1,6.2,6.3,6.2,6.4,6.3,6.4,6.4,6.4,6.2,6.1,6.2,null]
,index: 5
}
]
}
