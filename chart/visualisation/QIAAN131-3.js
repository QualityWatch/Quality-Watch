/* Created by NCODowd on 07/07/2016 12:52:03 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do people rate their health with condition specific questions?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Hip Replacement 2009/2010','Hip Replacement 2010/2011','Hip Replacement 2011/2012','','Hip Primary 2012/2013','Hip Primary 2013/2014','','Hip Revision 2012/2013','Hip Revision 2013/2014','','Knee Replacement 2009/2010','Knee Replacement 2010/2011','Knee Replacement 2011/2012','','Knee Primary 2012/2013','Knee Primary 2013/2014','','Knee Revision 2012/2013','Knee Revision 2013/2014','','Varicose Vein 2009/2010','Varicose Vein 2010/2011','Varicose Vein 2011/2012','Varicose Vein 2012/2013','Varicose Vein 2013/2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percent change'}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Improvement',
type: 'column',
data: [95.9,95.9,95.9,null,97.1,97.2,null,84.6,83.5,null,91.7,91.7,92,null,93.2,93.8,null,82.1,84.1,null,83.8,83.2,83.3,83.2,83.6]
,index: 2
},
{
name: 'No change',
type: 'column',
data: [0.6,0.6,0.7,null,0.5,0.5,null,3.1,2.9,null,1.4,1.4,1.3,null,1.1,1.1,null,3.1,2.6,null,0,0,0.1,0.1,0]
,index: 1
},
{
name: 'Deterioration',
type: 'column',
data: [3.6,3.5,3.4,null,2.4,2.3,null,12.3,13.6,null,7,6.9,6.7,null,5.7,5,null,14.8,13.2,null,16.2,16.7,16.6,16.7,16.4]
,index: 0
}
]
}
