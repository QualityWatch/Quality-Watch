/* Created by JMorris on 16/08/2018 17:26:28 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of cancelled elective operations changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04 Q1','2003/04 Q2','2003/04 Q3','2003/04 Q4','2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2','2016/17 Q3','2016/17 Q4','2017/18 Q1','2017/18 Q2','2017/18 Q3','2017/18 Q4','2018/19 Q1']
, labels: {
 rotation: -45
, step: 4
}
},
yAxis: [{
max: 16,
min: 0,
stepInterval: 4,
title: {text:'Percentage of elective admissions'},
labels: {format: '{value}%'}},
{ max: 16,
min: 0,
stepInterval: 4,
title: {text:'Percentage of cancellations'},
labels: {format: '{value}%'},
opposite: true
}],
 tooltip: {
        shared: true},

series:[{
 tooltip: {
            valueSuffix: '%'},
name: 'Cancelled operations as % of elective admissions',
type: 'line', marker: {enabled:false},
data: [1.1,1,1.3,1.4,1.1,1.1,1.2,1.6,1.1,0.9,1,1.2,0.9,0.8,0.9,0.9,0.8,0.8,1,1,0.9,0.8,1,1.2,0.8,0.8,0.9,1.1,0.8,0.7,1,0.9,0.7,0.7,0.8,0.9,0.8,0.7,0.9,1.1,0.8,0.8,0.9,0.9,0.8,0.8,1,1.1,0.8,0.8,0.9,1.2,0.9,1,1.1,1.1,1,0.9,1.1,1.3,1], color:'#009AA6'},
{ tooltip: {
            valueSuffix: '%'},
name: 'Patients not operated on within 28 days of cancellation as % of cancellations',
type: 'line',marker: {enabled:false},
yAxis: 1,
data: [10.9,9,8.5,9.6,9.8,9.5,12.5,13.5,12.5,8.9,7.9,7.7,7.3,5.2,5.2,5,4.9,4.9,4.6,6.1,4.6,3.2,4.2,5.5,3.9,2.5,3.3,4.5,3,2.7,3.1,5.5,4.6,3.2,3.8,6.3,5.3,4.4,4.1,5.6,7,3.8,4.3,4.7,5.1,4.3,6.3,8.7,7.2,5.9,5.9,8,8.4,6.3,7.3,7.8,7.2,6.8,7.3,11.6,10.8], color:'#4F0B7B'}]
}
