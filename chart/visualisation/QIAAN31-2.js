{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of timely antenatal assessments changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009-10 Q3','2009-10 Q4','2010-11 Q1','2010-11 Q2','2010-11 Q3','2010-11 Q4','2011-12 Q1','2011-12 Q2','2011-12 Q3','2011-12 Q4','2012-13 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: [
    {
    
title: {text:'Number of maternities and number <br> of people who had their first antenatal <br> appointment before 12 weeks and <br> 6 days', offset: 111}
    , max: 180000
, min: 0
, labels: {
}},
    {
    
title: {text:'Ratio of maternities which had the<br>first antenatal appointment before<br>12 weeks 6 days', offset: 90}
    , max: 1
, min: 0
, labels: {
}, opposite: true},
       
       ],
series:[
{
name: 'Total number of maternities',
type: 'area',
    yAxis: 0,
data: [160683,168954,169831,159937,163344,169644,167602,164338,164884,170232,166406]
,index: 1
},
{
name: 'Maternities with antenatal appointments before 12 weeks 6 days',
type: 'area',
    yAxis: 0,
data: [140417,146945,144953,148036,152316,156551,153304,155667,153646,162062,152409]
,index: 2
},
{
name: 'Ratio of maternities ',
type: 'line',
    yAxis: 1,
data: [0.87,0.87,0.85,0.93,0.93,0.92,0.91,0.95,0.93,0.95,0.92]
}
]
}