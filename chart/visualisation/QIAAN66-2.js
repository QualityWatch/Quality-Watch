/* Created by ianb on 14/10/2013 11:42:26 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have MMR vaccination rates by a child\'s 2nd birthday changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1991/92','1992/93','1993/94','1994/95','1995/96','1996/97','1997/98','1998/99','1999/00','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children immunised <br> by their second birthday (MMR 1st <br> dose)', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2001/2002 to 2011/2012 English time series',
type: 'line',
data: [90,92,91,91,92,92,91,88,88,87,84,82,80,81,84,85,85,85,88,89,91.2]
,index: 1
}
]
}
