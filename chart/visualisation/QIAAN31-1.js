/* Created by JMorris on 04/12/2017 12:40:39 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of timely antenatal assessments changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of maternities which <br> had an antenatal assessment  by <br> 12 weeks and 6 days of pregnancy', offset: 99}
, max: 110
, min: 80
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of maternities which had an antenatal assessment by 12 weeks and 6 days',
type: 'line',
data: [87.4,87,85.3,92.6,93.2,92.3,91.5,94.7,93.2,95.1,91.8,96.7,103.7,100.9,94.7,95.3,91.5,93.2,95.7,102.8,95.8,95.2,93.4,98.4,98.3,93.9,98.4,101.9]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Trendline',
data: [[0, 89.8],[27, 99]]
}
]
}
