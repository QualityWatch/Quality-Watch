/* Created by ianb on 27/06/2014 16:15:02 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the percentage of successful quitters changed by quarter?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003 Q1','2003 Q2','2003 Q3','2003 Q4','2004 Q1','2004 Q2','2004 Q3','2004 Q4','2005 Q1','2005 Q2','2005 Q3','2005 Q4','2006 Q1','2006 Q2','2006 Q3','2006 Q4','2007 Q1','2007 Q2','2007 Q3','2007 Q4','2008 Q1','2008 Q2','2008 Q3','2008 Q4','2009 Q1','2009 Q2','2009 Q3','2009 Q4','2010 Q1','2010 Q2','2010 Q3','2010 Q4','2011 Q1','2011 Q2','2011 Q3','2011 Q4','2012 Q1','2012 Q2','2012 Q3','2012 Q4']
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
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Quitters',
type: 'line',
data: [53.3,53.62,57.09,59.49,53.81,53.92,56.59,58.54,52.56,51.99,54.65,57.82,50,51.25,53.06,56.38,50.69,49.91,52.29,53.36,49.11,49.35,51.46,50.69,48.08,47.69,49.65,51.31,46.96,47.92,48.95,50.41,47.83,48.08,49.72,50.6,50.07,50.86,52.38,53.13]
,index: 1
}
]
}
