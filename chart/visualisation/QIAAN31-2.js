/* Created by EFisher on 03/12/2015 11:40:45 using v2.7 *//* Created by EFisher on 03/12/2015 11:31:32 using v2.7 */
/* Created by EFisher on 25/11/2015 15:02:34 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of timely antenatal assessments changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11 Q1', '2010/11 Q2', '2010/11 Q3', '2010/11 Q4', '2011/12 Q1', '2011/12 Q2', '2011/12 Q3', '2011/12 Q4', '2012/13 Q1', '2012/13 Q2', '2012/13 Q3', '2012/13 Q4', '2013/14 Q1', '2013/14 Q2', '2013/14 Q3', '2013/14 Q4', '2014/15 Q1', '2014/15 Q2', '2014/15 Q3', '2014/15 Q4', '2015/16 Q1']
, labels: {
 rotation: -45
, step: 2
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
    , max: 1.2, min: 0.8, tickInterval: 0.1,
labels: {
}, opposite: true},
       
       ],
series:[
{
name: 'Total number of maternities',
type: 'area',
    yAxis: 0,
data: [160679, 168871, 169895, 159937, 163344, 169611, 167602, 164338, 164856, 170332, 166507, 155930, 149091, 158213, 153514, 153528, 158329, 165983, 158087, 151979, 150590]
,index: 1
},
{
name: 'Maternities with antenatal appointments before 12 weeks 6 days',
type: 'area',
    yAxis: 0,
data: [140417, 146945, 144953, 148036, 152316, 156551, 153304, 155667, 153646, 162062, 152772, 150721, 154533, 159607, 145320, 146259, 144908, 154752, 151283, 156185, 153682]
,index: 2
},
{
name: 'Ratio of maternities ',
type: 'line',
    yAxis: 1,
data: [0.874, 0.87, 0.853, 0.926, 0.932, 0.923, 0.915, 0.947, 0.932, 0.951, 0.918, 0.967, 1.037, 1.009, 0.947, 0.953, 0.915, 0.932, 0.957, 1.028, 1.021]
}
]
}