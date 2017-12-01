/* Created by JMorris on 28/11/2017 11:07:22 using v2.7 */
/* Created by JMorris on 28/11/2017 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of timely antenatal assessments changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11 Q1', '2010/11 Q2', '2010/11 Q3', '2010/11 Q4', '2011/12 Q1', '2011/12 Q2', '2011/12 Q3', '2011/12 Q4', '2012/13 Q1', '2012/13 Q2', '2012/13 Q3', '2012/13 Q4', '2013/14 Q1', '2013/14 Q2', '2013/14 Q3', '2013/14 Q4', '2014/15 Q1', '2014/15 Q2', '2014/15 Q3', '2014/15 Q4', '2015/16 Q1', '2015/16 Q2', '2015/16 Q3', '2015/16 Q4', '2016/17 Q1', '2016/17 Q2', '2016/17 Q3', '2016/17 Q4']
, labels: {
 rotation: -45
, step: 2
}
},
yAxis: [
    {
    
title: {text:'Total number of maternities or number of <br> women who had an antenatal assessment <br> by 12 weeks and 6 days of pregnancy <br> (thousands)', offset: 90},
max: 200,
min: 80,
tickInterval: 20,
labels: {}
},
    {
title: {text:'Proportion of maternities which had an <br> antenatal assessment by 12 weeks and <br> 6 days of pregnancy', offset: 90},
max: 110,
min: 80,
tickInterval: 5,
labels: {format: '{value}%'
}, opposite: true},
       
       ],
series:[
{
name: 'Total number of maternities',
type: 'area',
    yAxis: 0,
data: [160.679,168.871,169.895,159.937,163.344,169.611,167.602,164.338,164.856,170.332,166.507,155.93,149.091,158.213,153.514,153.528,158.329,165.983,158.087,151.979,160.452,164.612,161.64,153.644,159.282,165.468,155.58,147.265],
  tooltip: {valueSuffix: ' (thousands)'},
  zIndex: 1
},
{
name: 'Number of women who had an antenatal assessment by 12 weeks 6 days of pregnancy',
type: 'area',
    yAxis: 0,
data: [140.417,146.945,144.953,148.036,152.316,156.551,153.304,155.667,153.646,162.062,152.772,150.721,154.533,159.607,145.32,146.259,144.908,154.752,151.284,156.185,153.682,156.785,150.968,151.13,156.596,155.31,153.14,150.01],
  tooltip: {valueSuffix: ' (thousands)'},
zIndex: 2
},
{
name: 'Proportion of maternities',
type: 'line',
    yAxis: 1,
data:[87.4,87.0,85.3,92.6,93.2,92.3,91.5,94.7,93.2,95.1,91.8,96.7,103.7,100.9,94.7,95.3,91.5,93.2,95.7,102.8,95.8,95.2,93.4,98.4,98.3,93.9,98.4,101.9],
  tooltip: {valueSuffix: ' %'},
zIndex: 3
}
]
}
