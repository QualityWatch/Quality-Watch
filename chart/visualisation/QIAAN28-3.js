/* Created by ianb on 08/10/2013 13:47:24 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the percentage of quitters changed by quarter?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04 Q1','2003/04 Q2','2003/04 Q3','2003/04 Q4','2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Percentage of adults who quit smoking <br> within four weeks of those who set <br> a quit date ', offset: 99}
, max: 70
, min: 30
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage of quitters',
type: 'line',
data: [53,54,57,59,54,54,57,59,53,52,55,58,50,51,53,56,51,50,52,53,49,49,51,51,48,48,50,51,47,48,49,50,48,48,50,51,49,50,52]
,index: 1
}
]
}
