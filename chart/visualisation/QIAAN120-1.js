/* Created by NCODowd on 14/09/2016 15:41:09 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the rates of employment in England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/2007 Q2','2006/2007 Q3','2006/2007 Q4','2007/2008 Q1','2007/2008 Q2','2007/2008 Q3','2007/2008 Q4','2008/2009 Q1','2008/2009 Q2','2008/2009 Q3','2008/2009 Q4','2009/2010 Q1','2009/2010 Q2','2009/2010 Q3','2009/2010 Q4','2010/2011 Q1','2010/2011 Q2','2010/2011 Q3','2010/2011 Q4','2011/2012 Q1','2011/2012 Q2','2011/2012 Q3','2011/2012 Q4','2012/2013 Q1','2012/2013 Q2','2012/2013 Q3','2012/2013 Q4','2013/2014 Q1','2013/2014 Q2','2013/2014 Q3','2013/2014 Q4','2014/2015 Q1','2014/2015 Q2','2014/2015 Q3','2014/2015 Q4','2015/2016 Q1','2015/2016 Q2','2015/2016 Q3','2015/2016 Q4']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Rate of employment'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'People with mental illness',
type: 'line',
data: [28.5,26.9,26.6,26.7,27.5,27.4,28.1,27.9,28.3,27.5,28.6,27.8,27.5,28.1,30.2,29.7,29.6,28.7,28.1,27.4,29,30.2,29.7,31.2,32.6,33.3,32.4,33.3,35.1,35.6,36.1,36.3,37.2,37.7,38.9,37.7,38.3,39.9,40.1]
,index: 1
},
{
name: 'General population',
type: 'line',
data: [73.3,73,72.3,72.4,73.1,73.3,73,72.8,72.9,72.6,71.7,70.9,71.2,71.1,70.4,70.6,71.4,71,70.6,70.5,70.7,70.7,70.6,71.1,71.9,72.1,71.3,71.5,72.2,72.6,72.7,73.1,73.5,73.7,73.5,73.4,74.3,74.6,74.3]
,index: 2
}
]
}
