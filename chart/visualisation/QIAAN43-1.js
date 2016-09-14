/* Created by NCODowd on 14/09/2016 15:37:46 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have employment rates changed?'},
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
title: {text:'Employment rates, in percentage'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Employment rate of people with long-term conditions',
type: 'line',
data: [58.1,57.7,57.7,57.5,58,58.2,57.8,57.9,57.8,58.4,58.1,57.3,57.5,57.7,59.2,59,59.6,59.4,59.2,58.6,59.3,58.8,58.3,59.1,59.6,60.3,59.5,58.7,58.5,58.7,58.8,59.9,60.3,60.5,60.4,60.3,60.2,60.9,61]
,index: 1
},
{
name: 'Employment rate of population ',
type: 'line',
data: [73.3,73,72.3,72.4,73.1,73.3,73,72.8,72.9,72.6,71.7,70.9,71.2,71.1,70.4,70.6,71.4,71,70.6,70.5,70.7,70.7,70.6,71.1,71.9,72.1,71.3,71.5,72.2,72.6,72.7,73.1,73.5,73.7,73.5,73.4,74.3,74.6,74.3]
,index: 2
}
]
}
