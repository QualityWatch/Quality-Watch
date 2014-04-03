/* Created by EFisher on 26/03/2014 17:24:31 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion and amount spent on home care changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1994-95','1995-96','1996-97','1997-98','1998-99','1999-00','2000-01','2001-02','2002-03','2003-04','2004-05','2005-06','2006-07','2007-08','2008-09','2009-10','2010-11','2011-12','2012-13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of gross expenditure <br> (excluding support costs) on home <br> care for all adults', offset: 99}
, max: 20
, min: 10
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion spent on homecare',
type: 'line',
data: [18.67,18.12,17.52,17.54,17.31,17.24,16.7,16.72,15.87,16.66,17.29,18.09,18.45,18.32,18.46,18.57,19.01,17.66,17.06]
,index: 1
},
{
name: 'Amount spent on homecare',
type: 'line',
data: [102776483.71,114023313.35,123472619.22,133427491.85,141891394.62,153940962.45,160625655.94,169093296.93,179579710.49,198208521.04,221995363.48,248637286.32,264251246.66,269280208.38,285544939.27,299516336.91,311853764.92,295698940.11,285123546.07]
,index: 1
}
]
}
