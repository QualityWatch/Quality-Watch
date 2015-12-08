/* Created by EFisher on 03/12/2015 13:05:09 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of timely antenatal assessments changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Ratio of maternities which had their <br> first assessment before 12 weeks <br> and 6 days', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Ratio of maternities which had the first antenatal appointment before 12 weeks and 6 days',
type: 'line',
data: [87.4,87,85.3,92.6,93.2,92.3,91.5,94.7,93.2,95.1,91.8,96.7,103.7,100.9,94.7,95.3,91.5,93.2,95.7,102.8,102.1]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Ratio of maternities which had the first antenatal appointment before 12 weeks and 6 days trendline',
data: [[0, 88.1],[20, 99.4]]
}
]
}
