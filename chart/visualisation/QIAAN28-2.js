/* Created by NCODowd on 27/04/2016 10:33:21 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the absolute number of adults joining NHS stop smoking services changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Number of successful quitters',
type: 'line',
data: [204876,298124,329681,319720,350800,337054,373954,383548,400955,373872,299968,229687.5]
,index: 2
},
{
name: 'Number of people setting a quit date',
type: 'line',
data: [361224,529567,602820,600410,680289,671259,757537,787527,816444,724247,584913.7,450581.6]
,index: 1
}
]
}
